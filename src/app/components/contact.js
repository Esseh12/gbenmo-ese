import { Icon } from '@iconify/react';
import ContactScene from './ContactScene';
import { Star } from './Doodles';
import { email, socialLinks } from '@/app/utils/utils';

export default function Contact() {
	return (
		<>
			<section
				id='contact'
				aria-labelledby='contact-title'
				className='brutal relative overflow-hidden bg-bubblegum p-6 sm:p-10'>
				<Star className='pointer-events-none absolute -left-3 -top-3 size-16 text-sun' />

				<div className='relative grid items-center gap-6 md:grid-cols-[1.2fr_1fr] md:gap-8'>
					<div>
						<span className='tag bg-card'>05 · Contact</span>
						<h2
							id='contact-title'
							className='mt-4 font-display text-4xl leading-none sm:text-5xl'>
							Got an idea?
							<br />
							Let’s build it.
						</h2>
						<p className='mt-4 max-w-md leading-relaxed'>
							Whether it’s a product, a website, or just a hello, my inbox is
							always open. Feel free to reach out.
						</p>

						<a
							href={`mailto:${email}`}
							className='brutal-btn mt-6 max-w-full bg-card text-sm break-all sm:text-base'>
							<Icon
								icon='tabler:mail'
								className='size-5 shrink-0'
							/>
							{email}
						</a>

						<ul
							className='mt-6 flex flex-wrap gap-2.5'
							aria-label='Social media'>
							{socialLinks.map((link) => (
								<li key={link.name}>
									<a
										href={link.href}
										target='_blank'
										rel='noreferrer noopener'
										aria-label={`${link.name} (opens in a new tab)`}
										title={link.name}
										className='brutal-btn size-11 justify-center bg-sun p-0'>
										<Icon
											icon={link.icon}
											className='size-5'
										/>
									</a>
								</li>
							))}
						</ul>
					</div>

					<ContactScene className='mx-auto block w-full max-w-[260px] sm:max-w-[340px] md:max-w-[420px]' />
				</div>
			</section>

			<footer className='pb-4 text-center text-sm font-semibold'>
				© {new Date().getFullYear()} Ese Gbenmo · Built with Next.js &amp;
				Tailwind CSS
			</footer>
		</>
	);
}
