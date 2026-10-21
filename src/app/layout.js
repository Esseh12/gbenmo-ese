import { Space_Grotesk, Archivo_Black } from 'next/font/google';
import { email, seo, siteUrl, socialLinks } from './utils/utils';
import './globals.css';

const spaceGrotesk = Space_Grotesk({
	variable: '--font-space',
	subsets: ['latin'],
});

const archivoBlack = Archivo_Black({
	variable: '--font-archivo',
	subsets: ['latin'],
	weight: '400',
});

export const metadata = {
	metadataBase: new URL(siteUrl),
	title: {
		default: seo.title,
		template: `%s | ${seo.name}`,
	},
	description: seo.description,
	keywords: [
		...seo.jobTitles,
		'Fullstack Developer',
		'Software Developer',
		'React Developer',
		'Next.js Developer',
		'TypeScript Developer',
		'Freelance Software Engineer',
		'Remote Software Engineer',
		...seo.skills,
		seo.name,
	],
	authors: [{ name: seo.name, url: siteUrl }],
	creator: seo.name,
	alternates: { canonical: '/' },
	openGraph: {
		type: 'profile',
		url: '/',
		siteName: seo.name,
		title: seo.title,
		description: seo.description,
		locale: 'en_US',
		firstName: 'Ese',
		lastName: 'Gbenmo',
	},
	twitter: {
		card: 'summary_large_image',
		title: seo.title,
		description: seo.description,
		creator: '@gbenmo_ese',
	},
	robots: {
		index: true,
		follow: true,
		googleBot: { index: true, follow: true, 'max-image-preview': 'large' },
	},
};

export const viewport = {
	themeColor: '#fff8e7',
};

// Runs before paint so the saved (or system) theme is applied without a flash.
const themeScript = `try{var t=localStorage.getItem('theme');if(t==='dark'||(!t&&matchMedia('(prefers-color-scheme: dark)').matches))document.documentElement.classList.add('dark')}catch(e){}`;

// Structured data so search engines understand who the site is about.
const jsonLd = {
	'@context': 'https://schema.org',
	'@graph': [
		{
			'@type': 'Person',
			'@id': `${siteUrl}/#person`,
			name: seo.name,
			url: siteUrl,
			email: `mailto:${email}`,
			jobTitle: seo.jobTitles,
			description: seo.description,
			knowsAbout: seo.skills,
			sameAs: socialLinks.map((link) => link.href),
			worksFor: { '@type': 'Organization', name: 'Salariopay' },
		},
		{
			'@type': 'WebSite',
			'@id': `${siteUrl}/#website`,
			url: siteUrl,
			name: seo.name,
			description: seo.description,
			publisher: { '@id': `${siteUrl}/#person` },
		},
	],
};

export default function RootLayout({ children }) {
	return (
		<html
			lang='en'
			suppressHydrationWarning
			className={`${spaceGrotesk.variable} ${archivoBlack.variable}`}>
			<head>
				<script dangerouslySetInnerHTML={{ __html: themeScript }} />
				<script
					type='application/ld+json'
					dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
				/>
			</head>
			<body className='font-sans antialiased'>{children}</body>
		</html>
	);
}
