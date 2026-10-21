'use client';

import { useEffect, useRef, useState } from 'react';
import { Afro, Arm, FrontHead, Neck, Torso } from './Me';

// Me at my desk: back to the viewer while working, then swivelling round to wave
// once the scene scrolls into view (and back again when it leaves).
export default function DeskScene({ className = '' }) {
	const ref = useRef(null);
	const [turned, setTurned] = useState(false);

	useEffect(() => {
		const observer = new IntersectionObserver(
			([entry]) => setTurned(entry.isIntersecting),
			{ threshold: 0.6 },
		);
		observer.observe(ref.current);
		return () => observer.disconnect();
	}, []);

	return (
		<svg
			ref={ref}
			viewBox='0 0 280 200'
			className={`${className} ${turned ? 'turned' : ''}`}
			role='img'
			aria-label='Illustration of Ese at her desk, turning around to wave'>
			<g
				stroke='#111'
				strokeWidth='3.5'
				strokeLinecap='round'
				strokeLinejoin='round'>
				<line
					x1='4'
					y1='192'
					x2='276'
					y2='192'
				/>

				{/* desk */}
				<path
					d='M34 134 V192 M246 134 V192'
					fill='none'
				/>
				<rect
					x='20'
					y='126'
					width='240'
					height='8'
					rx='3'
					fill='#fff'
				/>

				{/* monitor */}
				<rect
					x='101'
					y='26'
					width='110'
					height='72'
					rx='6'
					fill='#111'
				/>
				<rect
					x='95'
					y='20'
					width='110'
					height='72'
					rx='6'
					fill='#74c0fc'
				/>
				<rect
					x='103'
					y='28'
					width='94'
					height='56'
					rx='3'
					fill='#fff'
				/>
				<g strokeWidth='4'>
					<path
						d='M111 38 H135 M119 50 H155 M111 74 H129'
						stroke='#ff8fc7'
					/>
					<path d='M141 38 H160' />
					<path
						d='M119 62 H139'
						stroke='#b197fc'
					/>
					<path
						d='M145 62 H185'
						stroke='#ff922b'
					/>
				</g>
				<rect
					x='143'
					y='92'
					width='14'
					height='28'
					fill='#fff'
				/>
				<rect
					x='127'
					y='118'
					width='46'
					height='8'
					rx='3'
					fill='#fff'
				/>

				{/* mug */}
				<rect
					x='40'
					y='104'
					width='22'
					height='22'
					rx='3'
					fill='#ff922b'
				/>
				<path
					d='M62 109 h5 a7 7 0 0 1 0 12 h-5'
					fill='none'
				/>
				<path
					d='M46 96 q-3 -6 0 -11 q3 -5 0 -10 M56 96 q-3 -6 0 -11 q3 -5 0 -10'
					fill='none'
					strokeWidth='2.5'
				/>

				{/* plant */}
				<path
					d='M234 104 C226 94 226 82 234 72 C242 82 242 94 234 104 Z'
					fill='#63e6be'
				/>
				<path
					d='M234 102 C222 98 218 88 220 80 C228 84 234 92 234 102 Z'
					fill='#63e6be'
				/>
				<path
					d='M234 102 C246 98 250 88 248 80 C240 84 234 92 234 102 Z'
					fill='#63e6be'
				/>
				<path
					d='M222 104 H246 L242 126 H226 Z'
					fill='#ff8fc7'
				/>

				{/* sparkle */}
				<path
					d='M70 22 C71 30 74 33 82 34 C74 35 71 38 70 46 C69 38 66 35 58 34 C66 33 69 30 70 22 Z'
					fill='#fff'
					strokeWidth='2.5'
				/>

				{/* legs and chair base */}
				<rect
					x='132'
					y='166'
					width='12'
					height='20'
					fill='#3d3d6b'
				/>
				<rect
					x='156'
					y='166'
					width='12'
					height='20'
					fill='#3d3d6b'
				/>
				<ellipse
					cx='137'
					cy='188'
					rx='8'
					ry='4'
					fill='#111'
				/>
				<ellipse
					cx='163'
					cy='188'
					rx='8'
					ry='4'
					fill='#111'
				/>
				<path
					d='M150 170 V182 M126 184 H174'
					fill='none'
				/>

				{/* back view: working at the desk */}
				<g className='desk-back'>
					<Torso />
					<path
						d='M124 120 q-6 8 -4 18 M176 120 q6 8 4 18'
						fill='none'
					/>
					<Afro />
					<path
						d='M126 70 C126 38 174 38 174 70'
						fill='none'
						strokeWidth='7'
					/>
					<path
						d='M126 70 C126 38 174 38 174 70'
						fill='none'
						stroke='#ff8fc7'
						strokeWidth='3'
					/>
					<rect
						x='119'
						y='64'
						width='12'
						height='20'
						rx='5'
						fill='#ffd23f'
					/>
					<rect
						x='169'
						y='64'
						width='12'
						height='20'
						rx='5'
						fill='#ffd23f'
					/>
				</g>

				{/* front view: turned round, waving */}
				<g className='desk-front'>
					<Torso />
					<Neck />
					<Arm
						from={[125, 118]}
						to={[121, 152]}
					/>
					<FrontHead />
					<g className='desk-wave'>
						<Arm
							from={[175, 116]}
							to={[194, 86]}
						/>
					</g>
				</g>

				{/* chair seat sits in front of either pose */}
				<rect
					x='116'
					y='160'
					width='68'
					height='10'
					rx='5'
					fill='#ff8fc7'
				/>
			</g>
		</svg>
	);
}
