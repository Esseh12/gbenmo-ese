// Hand-drawn style SVG illustrations used across the page.
// Fill colours come from `currentColor` where it makes sense, so they can be tinted with text-* classes.

export function Star({ className = '' }) {
	return (
		<svg
			viewBox='0 0 48 48'
			className={className}
			aria-hidden='true'>
			<path
				d='M24 3 L29 18 L45 19 L32 29 L37 45 L24 35 L11 45 L16 29 L3 19 L19 18 Z'
				fill='currentColor'
				stroke='#111'
				strokeWidth='3'
				strokeLinejoin='round'
			/>
		</svg>
	);
}

export function Sparkle({ className = '' }) {
	return (
		<svg
			viewBox='0 0 24 24'
			className={className}
			aria-hidden='true'>
			<path
				d='M12 0 C13 8 16 11 24 12 C16 13 13 16 12 24 C11 16 8 13 0 12 C8 11 11 8 12 0 Z'
				fill='currentColor'
			/>
		</svg>
	);
}

export function Squiggle({ className = '' }) {
	return (
		<svg
			viewBox='0 0 120 24'
			className={className}
			aria-hidden='true'>
			<path
				d='M4 12 Q14 2 24 12 T44 12 T64 12 T84 12 T104 12 T116 12'
				fill='none'
				stroke='currentColor'
				strokeWidth='5'
				strokeLinecap='round'
			/>
		</svg>
	);
}
