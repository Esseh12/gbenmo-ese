'use client';

import { useEffect, useRef } from 'react';

// The drawing's viewBox, and the point between the eyes the pupils aim from.
const VIEW = { x: -4, y: -6, w: 150, h: 146 };
const EYES = { x: 70, y: 65 };
// How far the pupils can travel inside the almond-shaped eyes, in drawing units.
const REACH = { x: 3.6, y: 1.8 };
// Circling the cursor round her this many radians (two laps) makes her dizzy.
const SPIN_LIMIT = Math.PI * 4;
// How quickly built-up spin fades once the circling slows down, in ms.
const SPIN_FADE = 2500;
const DIZZY_FOR = 2500;

// A flat-style portrait of me whose eyes follow the cursor (or the last tap on touch screens).
// Circle the cursor round her too much and she gets dizzy for a moment.
export default function Portrait({ className = '' }) {
	const svgRef = useRef(null);
	const pupilsRef = useRef(null);

	useEffect(() => {
		const svg = svgRef.current;
		const pupils = pupilsRef.current;
		const target = { x: 0, y: 0 };
		const current = { x: 0, y: 0 };
		let frame = null;
		let lastAngle = null;
		let lastTime = 0;
		let spin = 0;
		let recover = null;

		// Ease the pupils toward the target so they glide rather than jump.
		const step = () => {
			current.x += (target.x - current.x) * 0.25;
			current.y += (target.y - current.y) * 0.25;
			pupils.setAttribute(
				'transform',
				`translate(${current.x.toFixed(2)} ${current.y.toFixed(2)})`,
			);
			const settled =
				Math.abs(target.x - current.x) < 0.01 &&
				Math.abs(target.y - current.y) < 0.01;
			frame = settled ? null : requestAnimationFrame(step);
		};

		// Adds up how far the cursor has travelled around her face.
		const trackSpin = (angle, dist, now) => {
			if (dist < 12) {
				lastAngle = null;
				return;
			}
			spin *= Math.exp(-(now - lastTime) / SPIN_FADE);
			if (lastAngle !== null) {
				let delta = angle - lastAngle;
				if (delta > Math.PI) delta -= 2 * Math.PI;
				else if (delta < -Math.PI) delta += 2 * Math.PI;
				spin += delta;
			}
			lastAngle = angle;
			lastTime = now;

			if (Math.abs(spin) > SPIN_LIMIT) {
				spin = 0;
				svg.classList.add('dizzy');
				clearTimeout(recover);
				recover = setTimeout(() => svg.classList.remove('dizzy'), DIZZY_FOR);
			}
		};

		const onPointer = (e) => {
			const rect = svg.getBoundingClientRect();
			const scale = rect.width / VIEW.w;
			const dx = e.clientX - (rect.left + (EYES.x - VIEW.x) * scale);
			const dy = e.clientY - (rect.top + (EYES.y - VIEW.y) * scale);
			const dist = Math.hypot(dx, dy) || 1;
			trackSpin(Math.atan2(dy, dx), dist, e.timeStamp);
			const strength = Math.min(dist / (rect.width * 0.2), 1);
			target.x = (dx / dist) * strength * REACH.x;
			target.y = (dy / dist) * strength * REACH.y;
			if (!frame) frame = requestAnimationFrame(step);
		};

		window.addEventListener('pointermove', onPointer);
		window.addEventListener('pointerdown', onPointer);
		return () => {
			window.removeEventListener('pointermove', onPointer);
			window.removeEventListener('pointerdown', onPointer);
			if (frame) cancelAnimationFrame(frame);
			clearTimeout(recover);
		};
	}, []);

	return (
		<Avatar
			svgRef={svgRef}
			pupilsRef={pupilsRef}
			className={className}
		/>
	);
}

const SKIN = '#7b4a2d';
const SKIN_SHADE = '#5e3620';
const HAIR = '#2b1a12';
const HAIR_SHINE = '#5a3a28';

// Afro outline: overlapping curls around the head, angles in degrees.
const CURLS = [215, 200, 170, 145, 120, 95, 70, 45, 20, -10, -25].map((deg) => {
	const rad = (deg * Math.PI) / 180;
	return { cx: 70 + 36 * Math.cos(rad), cy: 56 - 36 * Math.sin(rad) };
});

// Archimedean spiral centred on an eye, used for the dizzy look.
const spiral = (cx, cy) => {
	const turns = 2.5;
	const end = turns * 2 * Math.PI;
	const points = [];
	for (let i = 0; i <= 60; i++) {
		const t = (i / 60) * end;
		const r = (t / end) * 6.5;
		points.push(
			`${(cx + r * Math.cos(t)).toFixed(2)} ${(cy + r * Math.sin(t)).toFixed(2)}`,
		);
	}
	return `M${points.join(' L')}`;
};

const SPARKLE =
	'M0 -7 C1 -2 2 -1 7 0 C2 1 1 2 0 7 C-1 2 -2 1 -7 0 C-2 -1 -1 -2 0 -7 Z';

const LEFT_EYE = 'M49 66 Q58 56 67 66 Q58 74 49 66 Z';
const RIGHT_EYE = 'M73 66 Q82 56 91 66 Q82 74 73 66 Z';

// The drawing itself: afro, headset with boom mic, hoop earring and a crew-neck top.
function Avatar({ svgRef, pupilsRef, className }) {
	return (
		<svg
			ref={svgRef}
			viewBox={`${VIEW.x} ${VIEW.y} ${VIEW.w} ${VIEW.h}`}
			className={className}
			role='img'
			aria-label='Illustration of Ese, a Black woman with an afro wearing a headset'>
			<defs>
				<clipPath id='portrait-eyes'>
					<path d={LEFT_EYE} />
					<path d={RIGHT_EYE} />
				</clipPath>
			</defs>

			<g
				stroke='#111'
				strokeWidth='4'
				strokeLinecap='round'
				strokeLinejoin='round'>
				{/* white sticker edge so the dark hair still reads on the dark theme */}
				<g
					fill='#fff'
					stroke='#fff'
					strokeWidth='12'>
					{CURLS.map((curl, i) => (
						<circle
							key={i}
							cx={curl.cx}
							cy={curl.cy}
							r='17'
						/>
					))}
				</g>

				{/* top */}
				<path
					d='M28 146 C28 118 48 108 76 108 C104 108 124 118 124 146 Z'
					fill='#111'
				/>
				<path
					d='M22 140 C22 112 42 102 70 102 C98 102 118 112 118 140 Z'
					fill='#b197fc'
				/>
				<path
					d='M40 126 q3 6 1 14 M100 126 q-3 6 -1 14'
					fill='none'
					strokeWidth='3'
				/>
				<path
					d='M24 3 L29 18 L45 19 L32 29 L37 45 L24 35 L11 45 L16 29 L3 19 L19 18 Z'
					transform='translate(88 112) scale(0.38)'
					fill='#ffd23f'
					strokeWidth='6'
				/>

				{/* neck */}
				<path
					d='M60 84 L60 103 Q70 111 80 103 L80 84 Z'
					fill={SKIN}
				/>
				<ellipse
					cx='70'
					cy='93'
					rx='10'
					ry='4'
					fill={SKIN_SHADE}
					stroke='none'
				/>
				<path
					d='M53 102 Q70 117 87 102'
					fill='none'
				/>

				{/* afro */}
				{CURLS.map((curl, i) => (
					<circle
						key={i}
						cx={curl.cx}
						cy={curl.cy}
						r='17'
						fill={HAIR}
					/>
				))}
				<circle
					cx='70'
					cy='56'
					r='40'
					fill={HAIR}
					stroke='none'
				/>
				<path
					d='M34 44 q4 -5 9 -1 M47 26 q4 -5 9 -1 M84 25 q4 -5 9 -1 M97 38 q4 -5 9 -1 M60 18 q4 -5 9 -1'
					fill='none'
					stroke={HAIR_SHINE}
					strokeWidth='2.5'
				/>

				{/* face */}
				<ellipse
					cx='70'
					cy='65'
					rx='27'
					ry='30'
					fill={SKIN}
				/>
				<path
					d='M40 60 C40 20 100 20 100 60 C93 46 83 42 70 43 C57 42 47 46 40 60 Z'
					fill={HAIR}
					stroke='none'
				/>
				<path
					d='M43.5 57 C49 47 58 43 70 43.5 C82 43 91 47 96.5 57'
					fill='none'
					strokeWidth='3'
				/>

				{/* brows */}
				<path
					d='M50 55 Q58 50 66 53.5 M74 53.5 Q82 50 90 55'
					fill='none'
					strokeWidth='3'
				/>

				{/* eyes */}
				<g className='buddy-blink portrait-eyes'>
					<path
						d={LEFT_EYE}
						fill='#fff'
						stroke='none'
					/>
					<path
						d={RIGHT_EYE}
						fill='#fff'
						stroke='none'
					/>
					<g clipPath='url(#portrait-eyes)'>
						<g
							ref={pupilsRef}
							stroke='none'>
							<circle
								cx='58'
								cy='65.5'
								r='4.6'
								fill='#111'
							/>
							<circle
								cx='82'
								cy='65.5'
								r='4.6'
								fill='#111'
							/>
							<circle
								cx='59.6'
								cy='63.8'
								r='1.3'
								fill='#fff'
							/>
							<circle
								cx='83.6'
								cy='63.8'
								r='1.3'
								fill='#fff'
							/>
						</g>
					</g>
					<path
						d='M48 65.5 Q58 55 68 65.5 M72 65.5 Q82 55 92 65.5'
						fill='none'
						strokeWidth='3'
					/>
					<path
						d='M49 65 l-4 -3 M91 65 l4 -3'
						fill='none'
						strokeWidth='2.5'
					/>
				</g>

				<g
					className='dizzy-only'
					fill='none'
					strokeWidth='2.2'>
					<path
						className='dizzy-spin'
						d={spiral(58, 65.5)}
					/>
					<path
						className='dizzy-spin'
						d={spiral(82, 65.5)}
					/>
				</g>

				{/* nose, blush, lips */}
				<path
					d='M66 77 Q70 80.5 74 77'
					fill='none'
					strokeWidth='2.5'
				/>
				<ellipse
					cx='50'
					cy='77'
					rx='5'
					ry='2.5'
					fill='#ff8fc7'
					stroke='none'
					opacity='0.35'
				/>
				<ellipse
					cx='90'
					cy='77'
					rx='5'
					ry='2.5'
					fill='#ff8fc7'
					stroke='none'
					opacity='0.35'
				/>
				<g className='portrait-mouth'>
					<path
						d='M61 84.5 Q65.5 81.5 70 83.5 Q74.5 81.5 79 84.5 Q70 93 61 84.5 Z'
						fill='#a8434f'
						strokeWidth='2.5'
					/>
					<path
						d='M61.5 84.8 Q70 87.5 78.5 84.8'
						fill='none'
						strokeWidth='2'
					/>
				</g>
				<path
					className='dizzy-only'
					d='M60 86 q3.3 -3 6.6 0 t6.6 0 t6.6 0'
					fill='none'
					strokeWidth='2.5'
				/>

				{/* headset */}
				<path
					d='M27 62 C27 2 113 2 113 62'
					fill='none'
					strokeWidth='10'
				/>
				<path
					d='M27 62 C27 2 113 2 113 62'
					fill='none'
					stroke='#ff8fc7'
					strokeWidth='4'
				/>
				<rect
					x='18'
					y='52'
					width='18'
					height='28'
					rx='7'
					fill='#ffd23f'
				/>
				<rect
					x='104'
					y='52'
					width='18'
					height='28'
					rx='7'
					fill='#ffd23f'
				/>
				<circle
					cx='113'
					cy='88'
					r='4.5'
					fill='none'
					strokeWidth='5'
				/>
				<circle
					cx='113'
					cy='88'
					r='4.5'
					fill='none'
					stroke='#ffd23f'
					strokeWidth='2'
				/>
				<path
					d='M27 79 C28 91 38 95 50 90.5'
					fill='none'
					strokeWidth='3.5'
				/>
				<rect
					x='48'
					y='87'
					width='10'
					height='7'
					rx='3.5'
					fill='#111'
					transform='rotate(-20 53 90.5)'
				/>

				{/* dizzy stars */}
				<g
					className='dizzy-only'
					fill='#ffd23f'
					strokeWidth='2'>
					{[
						[30, 8],
						[70, -1],
						[110, 8],
					].map(([x, y], i) => (
						<g
							key={x}
							transform={`translate(${x} ${y})`}>
							<path
								className='dizzy-twinkle'
								style={{ animationDelay: `${i * 0.2}s` }}
								d={SPARKLE}
							/>
						</g>
					))}
				</g>
			</g>
		</svg>
	);
}
