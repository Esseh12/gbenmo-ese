/* eslint-disable @next/next/no-img-element */
import { Icon } from '@iconify/react';
import SectionTitle from './SectionTitle';

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
			aria-labelledby='writing-title'>
			<SectionTitle
				index='04'
				id='writing-title'
				color='bg-mint'>
				Writing
			</SectionTitle>

			<ul className='grid gap-6 md:grid-cols-2'>
				{articles.map((article) => (
					<li key={article.url}>
						<a
							href={article.url}
							target='_blank'
							rel='noreferrer noopener'
							aria-label={`${article.title} (opens in a new tab)`}
							className='brutal brutal-lift group flex h-full flex-col gap-4 bg-card p-4 sm:flex-row sm:items-center'>
							<img
								src={article.image}
								alt={article.alt}
								width={200}
								height={112}
								loading='lazy'
								className='aspect-video w-full rounded-lg border-3 border-ink object-cover sm:w-40 sm:shrink-0'
							/>
							<div>
								<span className='tag bg-sun'>{article.year}</span>
								<h3 className='mt-2 font-bold leading-snug group-hover:underline group-hover:decoration-3 group-hover:underline-offset-4'>
									{article.title}
									<Icon
										icon='tabler:arrow-up-right'
										className='ml-1 inline-block size-4 -translate-y-px'
									/>
								</h3>
							</div>
						</a>
					</li>
				))}
			</ul>
		</section>
	);
}
