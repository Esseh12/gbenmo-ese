'use client';

import Nav from './components/Nav';
import Hero from './components/Hero';
import Marquee from './components/Marquee';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Writing from './components/Writing';
import Contact from './components/contact';

export default function Home() {
	return (
		<div className='overflow-x-clip'>
			<a
				href='#content'
				className='brutal-btn sr-only bg-sun focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60]'>
				Skip to content
			</a>

			<Nav />

			<main
				id='content'
				className='mx-auto max-w-screen-2xl space-y-20 px-4 pb-6 pt-6 sm:space-y-28 sm:px-6 sm:pt-8 lg:px-8'>
				<Hero />
				<Marquee />
				<About />
				<Experience />
				<Projects />
				<Writing />
				<Contact />
			</main>
		</div>
	);
}
