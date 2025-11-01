export default function About() {
	return (
		<section
			id='about'
			className='mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24'
			aria-label='About me'>
			<div className='sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0'>
				<h2 className='text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only'>
					About
				</h2>
			</div>

			<div className='text-[#8b9cba]'>
				<p className='mb-4'>
					I’m a frontend developer with a focus on building accessible,
					pixel-perfect interfaces that blend thoughtful design with clean,
					maintainable engineering. I enjoy working at the intersection of
					design and development — turning ideas into smooth, user-centered
					experiences.
				</p>

				<p className='mb-4'>
					Recently, I’ve worked on projects like a{' '}
					<a
						className='font-medium text-slate-200 hover:text-purple-400 focus-visible:text-purple-400'
						href='#'>
						Lottery System
					</a>{' '}
					and an{' '}
					<a
						className='font-medium text-slate-200 hover:text-purple-400 focus-visible:text-purple-400'
						href='#'>
						AI Community Manager
					</a>
					, collaborating with designers, backend engineers, and product leads
					to bring features from concept to deployment.
				</p>

				<p className='mb-4'>
					Previously, I worked as a frontend developer at an HMO company, where
					I built core internal tools used daily across multiple departments,
					ranging from operations to customer support.
				</p>

				<ul className='list-disc list-inside mb-4 space-y-2'>
					<li>
						<span className='font-medium text-slate-200 mr-1'>
							Waiting Time Tracking System (WTTS):
						</span>
						Helped hospitals reduce enrollee wait time by providing real-time
						insights and analytics.
					</li>
					<li>
						<span className='font-medium text-slate-200 mr-1'>
							Staff Management System:
						</span>
						Built in collaboration with HR and leadership teams — included
						onboarding flows, performance reviews, KPI dashboards, and role
						permissions.
					</li>
					<li>
						<span className='font-medium text-slate-200 mr-1'>
							Tariff Management System:
						</span>
						Redesigned and automated a manual hospital tariff process, enabling
						faster mapping, uploads, previews, and validation.
					</li>
				</ul>

				<p className='mb-4'>
					I also take on freelance and contract work, where I partner with
					startups and small teams to design and ship fast, scalable digital
					products.
				</p>

				<p className='mb-4'>
					Outside of work, you’ll probably find me reading, hanging out with
					friends, or exploring{' '}
					<span className='inline-flex cursor-pointer font-medium text-slate-200 group'>
						{'blockchain'.split('').map((char, index) => {
							const colors = [
								'text-red-400',
								'text-orange-400',
								'text-yellow-400',
								'text-lime-400',
								'text-green-400',
								'text-teal-400',
								'text-cyan-400',
								'text-sky-400',
								'text-blue-400',
								'text-indigo-400',
								'text-violet-400',
							];
							return (
								<span
									key={index}
									className={`transition duration-200 group-hover:-translate-y-px group-hover:${
										colors[index % colors.length]
									}`}>
									{char}
								</span>
							);
						})}
					</span>{' '}
					development.
				</p>
			</div>
		</section>
	);
}
