'use client';

import { useState } from 'react';
import { Icon } from '@iconify/react';
import ThemeToggle from './ThemeToggle';
import { email } from '@/app/utils/utils';

const navItems = [
	{ href: '#about', text: 'About' },
	{ href: '#experience', text: 'Experience' },
	{ href: '#projects', text: 'Projects' },
	{ href: '#writing', text: 'Writing' },
	{ href: '#contact', text: 'Contact' },
];

export default function Nav() {
	const [open, setOpen] = useState(false);

	return (
		<header className='sticky top-3 z-50 mx-auto mt-3 max-w-screen-2xl px-4 sm:px-6 lg:px-8'>
			<nav
				aria-label='Main'
				className='brutal flex items-center justify-between gap-4 bg-card px-3 py-2.5 sm:px-4'>
				<a
					href='#top'
					className='flex items-center gap-2.5 font-display text-lg'>
					<span className='grid size-9 place-items-center rounded-lg border-3 border-ink bg-bubblegum text-sm'>
						EG
					</span>
					<span className='hidden sm:inline'>Ese Gbenmo</span>
				</a>

				<ul className='hidden items-center gap-1 md:flex'>
					{navItems.map((item) => (
						<li key={item.href}>
							<a
								href={item.href}
								className='rounded-lg border-2 border-transparent px-3 py-1.5 text-sm font-bold transition-colors hover:border-ink hover:bg-sun hover:text-black'>
								{item.text}
							</a>
						</li>
					))}
				</ul>

				<div className='flex items-center gap-2'>
					<ThemeToggle />
					<a
						href={`mailto:${email}`}
						className='brutal-btn bg-sun px-3 py-1.5 text-sm'>
						Say hi
						<Icon
							icon='tabler:hand-finger-right'
							className='size-4'
						/>
					</a>
					<button
						type='button'
						onClick={() => setOpen((o) => !o)}
						aria-expanded={open}
						aria-controls='mobile-menu'
						className='brutal-btn size-10 justify-center bg-card p-0 md:hidden'>
						<Icon
							icon={open ? 'tabler:x' : 'tabler:menu-2'}
							className='size-5'
						/>
						<span className='sr-only'>Menu</span>
					</button>
				</div>
			</nav>

			{open && (
				<ul
					id='mobile-menu'
					className='brutal mt-2 grid gap-1 bg-card p-2 md:hidden'>
					{navItems.map((item) => (
						<li key={item.href}>
							<a
								href={item.href}
								onClick={() => setOpen(false)}
								className='flex items-center justify-between rounded-lg border-2 border-transparent px-3 py-2.5 font-bold hover:border-ink hover:bg-sun hover:text-black'>
								{item.text}
								<Icon
									icon='tabler:arrow-right'
									className='size-4'
								/>
							</a>
						</li>
					))}
				</ul>
			)}
		</header>
	);
}
