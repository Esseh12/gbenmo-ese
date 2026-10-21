// Shared pieces of my illustrated character, drawn around x=150 in a 280×200 scene.

export const SKIN = '#7b4a2d';
const HAIR = '#2b1a12';
const HAIR_SHINE = '#5a3a28';
const SHIRT = '#b197fc';

// Afro outline around the head, angles in degrees.
const CURLS = [215, 200, 170, 145, 120, 95, 70, 45, 20, -10, -25].map((deg) => {
	const rad = (deg * Math.PI) / 180;
	return { cx: 150 + 20 * Math.cos(rad), cy: 72 - 20 * Math.sin(rad) };
});

export function Afro() {
	return (
		<>
			{CURLS.map((curl, i) => (
				<circle
					key={i}
					cx={curl.cx}
					cy={curl.cy}
					r='12'
					fill={HAIR}
				/>
			))}
			<circle
				cx='150'
				cy='72'
				r='24'
				fill={HAIR}
				stroke='none'
			/>
			<path
				d='M130 62 q3 -4 7 -1 M146 50 q3 -4 7 -1 M162 58 q3 -4 7 -1'
				fill='none'
				stroke={HAIR_SHINE}
				strokeWidth='2'
			/>
		</>
	);
}

export function Torso() {
	return (
		<path
			d='M120 162 C120 122 130 104 150 104 C170 104 180 122 180 162 Z'
			fill={SHIRT}
		/>
	);
}

// Arm drawn as an outlined thick stroke, ending in a hand.
export function Arm({ from, to }) {
	const d = `M${from[0]} ${from[1]} L${to[0]} ${to[1]}`;
	return (
		<>
			<path
				d={d}
				strokeWidth='14'
			/>
			<path
				d={d}
				stroke={SHIRT}
				strokeWidth='8'
			/>
			<circle
				cx={to[0]}
				cy={to[1]}
				r='6.5'
				fill={SKIN}
				strokeWidth='3'
			/>
		</>
	);
}

// Head facing the viewer: afro, face, headset and boom mic.
export function FrontHead() {
	return (
		<>
			<Afro />
			<ellipse
				cx='150'
				cy='76'
				rx='17'
				ry='19'
				fill={SKIN}
			/>
			<path
				d='M131 72 C131 46 169 46 169 72 C164 62 158 59 150 60 C142 59 136 62 131 72 Z'
				fill={HAIR}
				stroke='none'
			/>
			<path
				d='M133.5 69 C137 63 143 60 150 60.5 C157 60 163 63 166.5 69'
				fill='none'
				strokeWidth='2'
			/>
			<path
				d='M138 69.5 Q143 66.5 148 68.5 M152 68.5 Q157 66.5 162 69.5'
				fill='none'
				strokeWidth='2'
			/>
			<path
				d='M137 77 Q143 71 149 77 Q143 81 137 77 Z M151 77 Q157 71 163 77 Q157 81 151 77 Z'
				fill='#fff'
				stroke='none'
			/>
			<circle
				cx='143'
				cy='76.5'
				r='2.8'
				fill='#111'
				stroke='none'
			/>
			<circle
				cx='157'
				cy='76.5'
				r='2.8'
				fill='#111'
				stroke='none'
			/>
			<path
				d='M136.5 76.5 Q143 70 149.5 76.5 M150.5 76.5 Q157 70 163.5 76.5'
				fill='none'
				strokeWidth='2'
			/>
			<ellipse
				cx='137'
				cy='84'
				rx='3'
				ry='1.6'
				fill='#ff8fc7'
				stroke='none'
				opacity='0.4'
			/>
			<ellipse
				cx='163'
				cy='84'
				rx='3'
				ry='1.6'
				fill='#ff8fc7'
				stroke='none'
				opacity='0.4'
			/>
			<path
				d='M147.5 82.5 Q150 84.5 152.5 82.5'
				fill='none'
				strokeWidth='1.8'
			/>
			<path
				d='M144 87 Q150 93 156 87 Z'
				fill='#a8434f'
				strokeWidth='2'
			/>
			<path
				d='M129.5 72 C129.5 34 170.5 34 170.5 72'
				fill='none'
				strokeWidth='7'
			/>
			<path
				d='M129.5 72 C129.5 34 170.5 34 170.5 72'
				fill='none'
				stroke='#ff8fc7'
				strokeWidth='3'
			/>
			<rect
				x='124'
				y='68'
				width='11'
				height='18'
				rx='5'
				fill='#ffd23f'
			/>
			<rect
				x='165'
				y='68'
				width='11'
				height='18'
				rx='5'
				fill='#ffd23f'
			/>
			<path
				d='M129 86 C130 94 135 96 141 93'
				fill='none'
				strokeWidth='2.5'
			/>
			<rect
				x='139'
				y='90.5'
				width='7'
				height='5'
				rx='2.5'
				fill='#111'
				strokeWidth='2'
			/>
		</>
	);
}

export function Neck() {
	return (
		<>
			<path
				d='M144 90 L144 104 Q150 109 156 104 L156 90 Z'
				fill={SKIN}
			/>
			<path
				d='M139 105 Q150 114 161 105'
				fill='none'
				strokeWidth='3'
			/>
		</>
	);
}
