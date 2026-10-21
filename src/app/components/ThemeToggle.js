'use client';

import { useEffect, useState } from 'react';
import { Icon } from '@iconify/react';

export default function ThemeToggle({ className = '' }) {
	const [dark, setDark] = useState(false);

	useEffect(() => {
		setDark(document.documentElement.classList.contains('dark'));
	}, []);

	const toggle = () => {
		const next = !dark;
		document.documentElement.classList.toggle('dark', next);
		try {
			localStorage.setItem('theme', next ? 'dark' : 'light');
		} catch {}
		setDark(next);
	};

	return (
		<button
			type='button'
			onClick={toggle}
			aria-pressed={dark}
			title={dark ? 'Switch to light mode' : 'Switch to dark mode'}
			className={`brutal-btn size-10 justify-center bg-lilac p-0 ${className}`}>
			<Icon
				icon={dark ? 'tabler:sun' : 'tabler:moon'}
				className='size-5'
			/>
			<span className='sr-only'>Dark mode</span>
		</button>
	);
}
