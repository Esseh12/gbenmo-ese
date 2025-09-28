import { Plus_Jakarta_Sans } from 'next/font/google';
import './globals.css';

const jakartaSans = Plus_Jakarta_Sans({
	variable: '--font-jakarta-sans',
	subsets: ['latin'],
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

export default function RootLayout({ children }) {
	return (
		<html lang='en'>
			<body className={` ${jakartaSans.className} antialiased`}>
				{children}
			</body>
		</html>
	);
}
