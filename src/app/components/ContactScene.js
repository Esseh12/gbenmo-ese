const HEART =
	'M150 40 c0 -10 14 -14 18 -4 c4 -10 18 -6 18 4 c0 12 -18 22 -18 22 s-18 -10 -18 -22 z';

// A sealed letter with a paper plane flying off carrying the message.
export default function ContactScene({ className = '' }) {
	return (
		<svg
			viewBox='0 0 260 180'
			className={className}
			role='img'
			aria-label='Illustration of a sealed letter and a paper plane flying off with a message'>
			<g
				stroke='#111'
				strokeWidth='4'
				strokeLinecap='round'
				strokeLinejoin='round'>
				<path
					d='M150 62 C172 28 196 26 212 40'
					fill='none'
					strokeWidth='3'
					strokeDasharray='5 8'
				/>

				<g className='contact-bob'>
					<rect
						x='34'
						y='74'
						width='130'
						height='88'
						rx='8'
						fill='#111'
					/>
					<rect
						x='26'
						y='66'
						width='130'
						height='88'
						rx='8'
						fill='#fff'
					/>
					<path
						d='M28 72 L91 118 L154 72 M28 150 L74 108 M154 150 L108 108'
						fill='none'
					/>
					<path
						d={HEART}
						transform='translate(7 94) scale(0.5)'
						fill='#ff8fc7'
						strokeWidth='7'
					/>
				</g>

				<g className='contact-plane'>
					<path
						d='M206 38 L252 18 L234 52 Z'
						fill='#fff'
					/>
					<path
						d='M252 18 L224 42 L234 52 M224 42 L222 54 L229 48'
						fill='#74c0fc'
					/>
				</g>

				<path
					d={HEART}
					transform='translate(-40 -2) scale(0.45)'
					fill='#ffd23f'
					strokeWidth='8'
				/>
				<path
					d={HEART}
					transform='translate(140 110) scale(0.35)'
					fill='#fff'
					strokeWidth='9'
				/>
				<path
					d='M226 128 C227 136 230 139 238 140 C230 141 227 144 226 152 C225 144 222 141 214 140 C222 139 225 136 226 128 Z'
					fill='#ffd23f'
					strokeWidth='2.5'
				/>
			</g>
		</svg>
	);
}
