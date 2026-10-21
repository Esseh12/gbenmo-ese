import { Icon } from '@iconify/react';
import Portrait from './Portrait';
import { Star, Squiggle } from './Doodles';
import { socialLinks } from '@/app/utils/utils';

export default function Hero() {
	return (
		<section
			id='top'
			aria-label='Introduction'
			className='brutal relative grid overflow-hidden bg-card md:grid-cols-[1.15fr_1fr] md:items-end'>
			<Star className='pointer-events-none absolute right-5 top-5 size-10 animate-wiggle text-sun sm:right-8 sm:top-8 sm:size-12' />
			<Squiggle className='pointer-events-none absolute bottom-10 left-[52%] hidden w-24 text-bubblegum lg:block' />

			<div className='relative z-10 px-5 pb-4 pt-8 sm:px-8 sm:pt-12 md:self-center md:py-14'>
				<span className='tag bg-mint'>
					<span className='size-2 animate-pulse rounded-full bg-ink' />
					Open to freelance &amp; contract work
				</span>

				<h1 className='mt-5 font-display text-5xl leading-[0.95] sm:text-6xl lg:text-7xl'>
					Ese
					<br />
					Gbenmo
				</h1>

				<p className='mt-5 inline-block -rotate-2 rounded-md border-3 border-ink bg-sun px-3 py-1 text-lg font-bold shadow-brutal-sm sm:text-xl'>
					Full Stack Engineer
				</p>

				<p className='mt-5 max-w-md text-base leading-relaxed text-ink/80 sm:text-lg'>
					I build user-friendly, pixel-perfect web applications with a strong
					emphasis on accessibility, performance, and design detail.
				</p>

				<div className='mt-7 flex flex-wrap gap-3'>
					<a
						href='#projects'
						className='brutal-btn bg-sun'>
						See my work
						<Icon
							icon='tabler:arrow-down'
							className='size-4'
						/>
					</a>
					<a
						href='/Ese_Gbenmo_Fullstack_Resume.pdf'
						target='_blank'
						rel='noreferrer noopener'
						className='brutal-btn bg-card'>
						Résumé
						<Icon
							icon='tabler:arrow-up-right'
							className='size-4'
						/>
					</a>
				</div>

				<ul
					className='mt-7 flex flex-wrap gap-2.5'
					aria-label='Social media'>
					{socialLinks.map((link) => (
						<li key={link.name}>
							<a
								href={link.href}
								target='_blank'
								rel='noreferrer noopener'
								aria-label={`${link.name} (opens in a new tab)`}
								title={link.name}
								className='brutal-btn size-11 justify-center bg-card p-0 hover:bg-lilac hover:text-black'>
								<Icon
									icon={link.icon}
									className='size-5'
								/>
							</a>
						</li>
					))}
				</ul>
			</div>

			<div className='relative flex justify-center px-5 pt-6 sm:px-8 md:justify-end md:pt-20'>
				<span
					aria-hidden='true'
					className='tag absolute left-5 top-4 z-10 -rotate-3 bg-paper sm:left-8 md:left-4 md:top-12'>
					<span className='md:hidden'>Tap around</span>
					<span className='hidden md:inline'>Move your cursor</span> 👀
				</span>
				<Portrait className='block w-full max-w-[300px] sm:max-w-[360px] md:max-w-[440px] lg:max-w-[500px]' />
			</div>
		</section>
	);
}
