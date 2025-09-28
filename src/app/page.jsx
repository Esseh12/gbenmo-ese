'use client';

import { useEffect } from 'react';
import Header from './components/Header';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Writing from './components/Writing';

export default function Home() {
	useEffect(() => {
		// Smooth scroll functionality
		const handleSmoothScroll = (e) => {
			const href = e.currentTarget.getAttribute('href');
			if (href && href.startsWith('#')) {
				e.preventDefault();
				const target = document.querySelector(href);
				if (target) {
					target.scrollIntoView({ behavior: 'smooth' });
				}
			}
		};

		const links = document.querySelectorAll('a[href^="#"]');
		links.forEach((link) => {
			link.addEventListener('click', handleSmoothScroll);
		});

		return () => {
			links.forEach((link) => {
				link.removeEventListener('click', handleSmoothScroll);
			});
		};
	}, []);

	return (
		<div className='__variable_20b187 group/spotlight relative bg-[#101b35]'>
			<div
				className='pointer-events-none fixed inset-0 z-30 transition duration-300 lg:absolute'
				style={{
					background:
						'radial-gradient(600px circle at 0px 0px, rgba(29, 78, 216, 0.15), transparent 80%)',
				}}
			/>

			<div className='mx-auto min-h-screen max-w-screen-xl px-6 py-12 font-sans md:px-12 md:py-16 lg:py-0'>
				<a
					href='#content'
					className='absolute left-0 top-0 block -translate-x-full rounded bg-gradient-to-br from-teal-400 via-blue-500 to-purple-600 px-4 py-3 text-sm font-bold uppercase tracking-widest text-white focus-visible:translate-x-0'>
					Skip to Content
				</a>

				<div className='lg:flex lg:justify-between lg:gap-4'>
					<Header />

					<main
						id='content'
						className='pt-24 lg:w-[52%] lg:py-24'>
						<About />
						<Experience />
						<Projects />
						<Writing />

						<footer className='max-w-md pb-16 text-sm text-slate-500 sm:pb-0'>
							<p>
								Feel free to reach out to me:{' '}
								<a
									href='mailto:gbenmoese788@gmail.com'
									className='font-medium text-slate-400 hover:text-purple-400 focus-visible:text-purple-400'>
									Gbenmoese788@gmail.com
								</a>
								.
							</p>
						</footer>
					</main>
				</div>
			</div>
		</div>
	);
}
