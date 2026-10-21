import { Space_Grotesk, Archivo_Black } from 'next/font/google';
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
	title: 'Ese Gbenmo',
	description:
		'Ese Gbenmo is a frontend engineer  passionate about building sleek, user-friendly web experiences and scalable digital products.',
	metadataBase: new URL('https://esegbenmo.com'),
	openGraph: {
		title: 'Ese Gbenmo',
		description:
			'Frontend engineer  passionate about building sleek, user-friendly web experiences and scalable digital products.',
		images: '',
	},
	twitter: {
		card: 'summary_large_image',
		title: 'Ese Gbenmo',
		description:
			'Frontend engineer  passionate about building sleek, user-friendly web experiences and scalable digital products.',
		images: '',
		creator: '@gbenmo_ese',
	},
};

export const viewport = {
	themeColor: '#fff8e7',
};

// Runs before paint so the saved (or system) theme is applied without a flash.
const themeScript = `try{var t=localStorage.getItem('theme');if(t==='dark'||(!t&&matchMedia('(prefers-color-scheme: dark)').matches))document.documentElement.classList.add('dark')}catch(e){}`;

export default function RootLayout({ children }) {
	return (
		<html
			lang='en'
			suppressHydrationWarning
			className={`${spaceGrotesk.variable} ${archivoBlack.variable}`}>
			<head>
				<script dangerouslySetInnerHTML={{ __html: themeScript }} />
			</head>
			<body className='font-sans antialiased'>{children}</body>
		</html>
	);
}
