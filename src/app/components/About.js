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

			<div className='text-[#8b9cba] '>
				<p className='mb-4'>
					I’m a developer driven by the challenge of building accessible,
					pixel-perfect interfaces that unite thoughtful design with strong
					engineering. I thrive at the intersection of design and development,
					creating experiences that are not only visually appealing but also
					carefully optimized for performance and usability.
				</p>

				<p className='mb-4'>
					I’m a Frontend Engineer and Product Designer currently building a{' '}
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
					. In the past, I’ve worked on several production-level applications
					across different industries, often handling projects end-to-end.
				</p>

				<p className='mb-4'>
					While working at an HMO company as the sole frontend developer, I was
					tasked with building many of their core business applications. Some of
					the key systems I developed include:
				</p>

				<ul className='list-disc list-inside mb-4 space-y-2'>
					<li>
						<span className='font-medium text-slate-200 hover:text-purple-400 focus-visible:text-purple-400 mr-1'>
							Waiting Time Tracking System (WTTS):
						</span>
						Built to monitor and reduce the waiting time of enrollees and
						patients at hospitals, improving efficiency and patient
						satisfaction.
					</li>
					<li>
						<span className='font-medium text-slate-200 hover:text-purple-400 focus-visible:text-purple-400 mr-1'>
							Staff Management System:
						</span>
						Developed in-house to replace costly third-party tools. Included
						features such as performance appraisal, employee onboarding and
						exit, role management, KPI tracking, and permissions handling.
					</li>
					<li>
						<span className='font-medium text-slate-200 hover:text-purple-400 focus-visible:text-purple-400 mr-1'>
							Tariff Management System:
						</span>
						Automated the lengthy process of handling hospital tariffs by
						implementing tariff mapping, coding, file previews, and robust data
						handling features.
					</li>
				</ul>

				<p className='mb-4'>
					Beyond this, I’ve also taken on freelance and contract work, building
					tailored digital products that merge thoughtful design with scalable
					engineering solutions.
				</p>

				<p className='mb-4'>
					In my spare time, I enjoy reading books, hanging out with friends, and
					exploring{' '}
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
