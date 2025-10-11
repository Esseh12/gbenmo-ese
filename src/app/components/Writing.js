/* eslint-disable @next/next/no-img-element */
import { Icon } from '@iconify/react';

export default function Writing() {
	const articles = [
		{
			year: '2025',
			title:
				'Bitcoin Explained: Your First Step into the Wild World of Digital Money',
			url: 'https://medium.com/@gbenmoese788/bitcoin-explained-your-first-step-into-the-wild-world-of-digital-money-50ad14097a78',
			image: '/blog-1.webp',
			alt: 'Bitcoin concept illustration',
		},
		{
			year: '2024',
			title: 'The Magic of DNS: Transforming Domain Names into IP Addresses',
			url: 'https://medium.com/@gbenmoese788/the-magic-of-dns-transforming-domain-names-into-ip-addresses-172aebdb1ce2',
			image: '/blog-2.webp',
			alt: 'DNS concept illustration',
		},
	];

	return (
		<section
			id='writing'
			className='mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24'
			aria-label='Blog posts'>
			<div className='sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0'>
				<h2 className='text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only'>
					Writing
				</h2>
			</div>

			<div>
				<ul className='group/list text-[#8b9cba]'>
					{articles.map((article, index) => (
						<li
							key={index}
							className='mb-12'>
							<div className='group relative grid grid-cols-8 gap-4 transition-all sm:items-center sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50'>
								<div className='absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg' />

								<div className='z-10 col-span-2'>
									<img
										alt={article.alt}
										width={200}
										height={48}
										className='aspect-video object-cover rounded border-2 border-slate-200/10 transition group-hover:border-slate-200/30'
										src={article.image}
										loading='lazy'
									/>
								</div>

								<div className='z-10 col-span-6'>
									<p className='-mt-1 text-sm font-semibold leading-6'>
										{article.year}
									</p>
									<h3 className='-mt-1'>
										<a
											className='inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-purple-400 focus-visible:text-purple-400 group/link text-base'
											href={article.url}
											target='_blank'
											rel='noreferrer noopener'
											aria-label={`${article.title} (opens in a new tab)`}>
											<span className='absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block' />
											<span>
												{article.title}
												<span className='inline-block'>
													<Icon
														icon='tabler:arrow-up-right'
														className='inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px'
													/>
												</span>
											</span>
										</a>
									</h3>
								</div>
							</div>
						</li>
					))}
				</ul>
			</div>
		</section>
	);
}
