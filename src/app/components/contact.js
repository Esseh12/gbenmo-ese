import { Icon } from '@iconify/react';

export default function Contact() {
	const contacts = [
		{
			label: 'Email',
			value: 'ese.gbenmo@gmail.com',
			url: 'mailto:ese.gbenmo@gmail.com',
			icon: 'tabler:mail',
		},
		{
			label: 'GitHub',
			value: 'github.com/esegbenmo',
			url: 'https://github.com/esegbenmo',
			icon: 'tabler:brand-github',
		},
		{
			label: 'LinkedIn',
			value: 'linkedin.com/in/esegbenmo',
			url: 'https://www.linkedin.com/in/esegbenmo',
			icon: 'tabler:brand-linkedin',
		},
		{
			label: 'Twitter',
			value: '@esegbenmo',
			url: 'https://twitter.com/esegbenmo',
			icon: 'tabler:brand-twitter',
		},
	];

	return (
		<section
			id='contact'
			className='mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24'
			aria-label='Contact'>
			<div className='sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0'>
				<h2 className='text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only'>
					Contact
				</h2>
			</div>

			<div>
				<ul className='group/list'>
					{contacts.map((contact, index) => (
						<li
							key={index}
							className='mb-6'>
							<a
								href={contact.url}
								target='_blank'
								rel='noreferrer noopener'
								className='group relative flex items-center gap-3 font-medium text-slate-200 hover:text-purple-400 focus-visible:text-purple-400 text-base'
								aria-label={`${contact.label} (opens in a new tab)`}>
								<span className='absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-3 lg:block' />
								<Icon
									icon={contact.icon}
									className='h-5 w-5 shrink-0 transition-colors group-hover:text-purple-400'
								/>
								<span>{contact.value}</span>
							</a>
						</li>
					))}
				</ul>
			</div>
		</section>
	);
}
