import Link from 'next/link';
import { Icon } from '@iconify/react';
export default function Header() {
	const socialLinks = [
		{
			id: 1,
			href: 'https://github.com/Esseh12',
			icon: (
				<Icon
					icon='mdi:github'
					width='24'
					height='24'
				/>
			),
		},
		{
			id: 2,
			href: 'https://www.linkedin.com/in/gbenmoese/',
			icon: (
				<Icon
					icon='mdi:linkedin'
					width='24'
					height='24'
				/>
			),
		},
		{
			id: 3,
			name: 'Instagram',
			href: 'https://www.instagram.com/gbenmo_ese/',
			icon: (
				<Icon
					icon='ri:instagram-fill'
					width='24'
					height='24'
				/>
			),
		},
		{
			id: 4,
			name: '	Twitter',
			href: 'https://x.com/gbenmo_ese',
			icon: (
				<Icon
					icon='streamline-logos:x-twitter-logo-block'
					width='24'
					height='24'
				/>
			),
		},
		{
			id: 5,
			name: 'Medium',
			href: 'https://medium.com/@gbenmoese788',
			icon: (
				<Icon
					icon='ri:medium-fill'
					width='24'
					height='24'
				/>
			),
		},
	];

	const navItems = [
		{ href: '#about', text: 'About' },
		{ href: '#experience', text: 'Experience' },
		{ href: '#projects', text: 'Projects' },
	];

	return (
		<header className='lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-[48%] lg:flex-col lg:justify-between lg:py-24'>
			<div>
				<h1 className='text-4xl font-bold tracking-tight text-slate-200 sm:text-5xl'>
					<Link href='/'>Ese Gbenmo</Link>
				</h1>
				<h2 className='mt-3 text-lg font-medium tracking-tight text-slate-200 sm:text-xl'>
					Front End Engineer
				</h2>
				<p className='mt-4 max-w-xs leading-normal text-[#8b9cba]'>
					I build user-friendly, pixel-perfect web applications with a strong
					emphasis on accessibility, performance, and design detail.
				</p>

				<nav
					className='nav hidden lg:block'
					aria-label='In-page jump links'>
					<ul className='mt-16 w-max'>
						{navItems.map((item) => (
							<li key={item.href}>
								<a
									className='group flex items-center py-3 active'
									href={item.href}>
									<span className='nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none' />
									<span className='nav-text text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-200 group-focus-visible:text-slate-200'>
										{item.text}
									</span>
								</a>
							</li>
						))}
					</ul>
				</nav>
			</div>

			<ul
				className='ml-1 mt-8 flex items-center'
				aria-label='Social media'>
				{socialLinks.map((link, id) => (
					<li
						key={id}
						className='mr-5 shrink-0 text-xs'>
						<a
							className='block text-[#8b9cba]  hover:text-slate-200'
							href={link.href}
							target='_blank'
							rel='noreferrer noopener'
							aria-label={`${link.name} (opens in a new tab)`}
							title={link.name}>
							<span className='sr-only'>{link.name}</span>
							<div className='w-6 h-6'>{link.icon}</div>
						</a>
					</li>
				))}
			</ul>
		</header>
	);
}
