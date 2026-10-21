import { Sparkle } from './Doodles';

const stack = [
	'React',
	'Next.js',
	'TypeScript',
	'JavaScript',
	'Node.js',
	'Tailwind CSS',
	'Redux',
	'React Query',
	'Framer Motion',
	'Supabase',
	'Gemini API',
	'Anthropic API',
	'Python',
	'SQL',
];

export default function Marquee() {
	return (
		<div
			className='brutal -mx-1 -rotate-1 overflow-hidden bg-ink py-3'
			aria-label='Technologies I work with'>
			<div className='flex w-max animate-marquee'>
				{[0, 1].map((copy) => (
					<ul
						key={copy}
						aria-hidden={copy === 1}
						className='flex shrink-0 items-center'>
						{stack.map((tech) => (
							<li
								key={tech}
								className='flex items-center gap-5 px-5 font-display text-lg text-paper sm:text-xl'>
								{tech}
								<Sparkle className='size-4 text-sun' />
							</li>
						))}
					</ul>
				))}
			</div>
		</div>
	);
}
