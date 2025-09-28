import Image from 'next/image';
import { Icon } from '@iconify/react';

export default function Projects() {
	const projects = [
		{
			title: 'Trevor Project',
			description:
				'A safe space and support website for the LGBTQ+ community, designed and built with React and Tailwind CSS to provide accessibility and responsiveness.',
			url: 'https://trevor-project-six.vercel.app/',
			image: '/trevor-project.png',
			alt: 'Trevor Project homepage',
			technologies: ['React', 'Tailwind CSS'],
		},
		{
			title: 'WFJ Law Firm',
			description:
				'A professional website for a law firm, built with React and Tailwind CSS, focusing on clarity, trust, and accessibility.',
			url: 'https://wfjlawfirm.vercel.app/',
			image: '/wfj-lawfirm.png',
			alt: 'WFJ Law Firm website homepage',
			technologies: ['React', 'Tailwind CSS'],
		},
		{
			title: 'Leewo Jones',
			description:
				'An e-commerce platform for photography products. Designed and developed a clean, minimal interface with React and Tailwind CSS to ensure smooth user experience.',
			url: 'https://leewo-jones.vercel.app/',
			image: '/leewo-jones.png',
			alt: 'Leewo Jones photography e-commerce homepage',
			technologies: ['React', 'Tailwind CSS'],
		},
		{
			title: 'Metafora',
			description:
				'An aggregate transport platform MVP that lets users compare prices and book smooth trips from different transport companies directly on their phones.',
			url: 'https://metafora-eta.vercel.app/',
			image: '/metafora.png',
			alt: 'Metafora transport platform homepage',
			technologies: ['React', 'Tailwind CSS', 'JavaScript'],
		},
	];

	return (
		<section
			id='projects'
			className='mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24'
			aria-label='Selected projects'>
			<div className='sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0'>
				<h2 className='text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only'>
					Projects
				</h2>
			</div>

			<div>
				<ul className='group/list text-[#8b9cba]'>
					{projects.map((project, index) => (
						<li
							key={index}
							className='mb-12'>
							<div className='group relative grid gap-4 pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50'>
								<div className='absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg' />

								<div className='z-10 sm:order-2 sm:col-span-6'>
									<h3>
										<a
											className='inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-purple-400 focus-visible:text-purple-400 group/link text-base'
											href={project.url}
											target='_blank'
											rel='noreferrer noopener'
											aria-label={`${project.title} (opens in a new tab)`}>
											<span className='absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block' />
											<span>
												{project.title}{' '}
												<span className='inline-block'>
													<Icon
														icon='tabler:arrow-up-right'
														className='inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px'
													/>
												</span>
											</span>
										</a>
									</h3>

									<p className='mt-2 text-sm leading-normal'>
										{project.description}
									</p>

									{project.technologies && (
										<ul
											className='mt-2 flex flex-wrap'
											aria-label='Technologies used:'>
											{project.technologies.map((tech, techIndex) => (
												<li
													key={techIndex}
													className='mr-1.5 mt-2'>
													<div className='flex items-center rounded-full bg-purple-400/10 px-3 py-1 text-xs font-medium leading-5 text-purple-400'>
														{tech}
													</div>
												</li>
											))}
										</ul>
									)}
								</div>

								<div className='sm:order-1 sm:col-span-2 sm:translate-y-1'>
									<Image
										alt={project.alt}
										width={200}
										height={48}
										className='aspect-video object-cover rounded border-2 border-slate-200/10 transition group-hover:border-slate-200/30'
										src={project.image}
										loading='lazy'
									/>
								</div>
							</div>
						</li>
					))}
				</ul>

				<div className='mt-12'>
					<a
						className='inline-flex items-center font-medium leading-tight text-slate-200 font-semibold text-slate-200 group'
						aria-label='View Full Project Archive'
						href='/archive'>
						<span>
							<span className='border-b border-transparent pb-px transition group-hover:border-purple-400 motion-reduce:transition-none'>
								View Full Project{' '}
							</span>
							<span className='whitespace-nowrap'>
								<span className='border-b border-transparent pb-px transition group-hover:border-purple-400 motion-reduce:transition-none'>
									Archive
								</span>
								<Icon
									icon='tabler:arrow-right'
									className='ml-1 inline-block h-4 w-4 shrink-0 -translate-y-px transition-transform group-hover:translate-x-2 group-focus-visible:translate-x-2 motion-reduce:transition-none'
								/>
							</span>
						</span>
					</a>
				</div>
			</div>
		</section>
	);
}
