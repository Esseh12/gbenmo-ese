import { Icon } from '@iconify/react';

export default function Experience() {
	const experiences = [
		{
			period: 'June 2024 — Present',
			title: 'Frontend Engineer',
			company: 'Salariopay',
			companyUrl: 'https://www.salariopay.com/',
			description:
				'Build and maintain user-facing features for the company’s payroll and HR tools. Led the development of the Integration Marketplace and collaborated closely with designers and backend engineers to deliver pixel-perfect, high-performance interfaces with accessibility and responsiveness in mind.',
			technologies: [
				'React',
				'Redux',
				'TypeScript',
				'JavaScript',
				'Tailwind CSS',
				'jQuery',
			],
		},
		{
			period: 'Jan 2024 — June 2024',
			title: 'Software Developer',
			company: 'Metro Health HMO',
			companyUrl: 'https://metrohealthhmo.com/',
			description:
				'Built core in-house software to streamline operations and improve business workflows. Developed an HR onboarding system and other internal tools while collaborating with cross-functional teams to deliver scalable, user-friendly solutions.',
			technologies: ['JavaScript', 'TypeScript', 'React', 'Node.js', 'Next.js'],
		},
		{
			period: 'Jan 2023 — Dec 2023',
			title: 'Frontend Engineer',
			company: 'Mauritius Commercial Bank (MCB)',
			companyUrl: '#',
			description:
				'Migrated the MCB website from HTML/CSS/JavaScript to React to improve maintainability and performance. Implemented responsive components and front-end features to improve customer experience.',
			technologies: ['React', 'TypeScript', 'JavaScript', 'HTML', 'CSS'],
		},
	];

	return (
		<section
			id='experience'
			className='mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24'
			aria-label='Work experience'>
			<div className='sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0'>
				<h2 className='text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only'>
					Experience
				</h2>
			</div>

			<div>
				<ol className='group/list text-[#8b9cba]'>
					{experiences.map((exp, index) => (
						<li
							key={index}
							className='mb-12'>
							<div className='group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50'>
								<div className='absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg' />

								<header
									className='z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-slate-500 sm:col-span-2'
									aria-label={exp.period}>
									{exp.period}
								</header>

								<div className='z-10 sm:col-span-6'>
									<h3 className='font-medium leading-snug text-slate-200'>
										<div>
											<a
												className='inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-purple-400 focus-visible:text-purple-400 group/link text-base'
												href={exp.companyUrl}
												target='_blank'
												rel='noreferrer noopener'
												aria-label={`${exp.title} at ${exp.company} (opens in a new tab)`}>
												<span className='absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block' />
												<span>
													{exp.title} ·{' '}
													<span className='inline-block'>
														{exp.company}
														<Icon
															icon='tabler:arrow-up-right'
															className='inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px'
														/>
													</span>
												</span>
											</a>
										</div>
									</h3>

									<p className='mt-2 text-sm leading-normal'>
										{exp.description}
									</p>

									<ul
										className='mt-2 flex flex-wrap'
										aria-label='Technologies used'>
										{exp.technologies.map((tech, techIndex) => (
											<li
												key={techIndex}
												className='mr-1.5 mt-2'>
												<div className='flex items-center rounded-full bg-purple-400/10 px-3 py-1 text-xs font-medium leading-5 text-purple-400'>
													{tech}
												</div>
											</li>
										))}
									</ul>
								</div>
							</div>
						</li>
					))}
				</ol>

				<div className='mt-12'>
					<a
						className='inline-flex items-baseline leading-tight text-slate-200 hover:text-purple-400 focus-visible:text-purple-400 font-semibold  group/link text-base'
						href='/Ese-Gbenmo-frontend-engineer.pdf'
						target='_blank'
						rel='noreferrer noopener'
						aria-label='View Full Résumé (opens in a new tab)'>
						<span>
							View Full <span className='inline-block'>Résumé</span>
							<Icon
								icon='tabler:arrow-up-right'
								className='inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px'
							/>
						</span>
					</a>
				</div>
			</div>
		</section>
	);
}
