import type { Metadata } from 'next';
import { Analytics } from '@vercel/analytics/react';
import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from './components/nav';
import Footer from './components/footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
	title: 'Jenny Zhang (UX Designer & Developer)',
	description: 'Portfolio of work',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang='en'>
			<body className={`${inter.className} flex flex-col min-h-screen bg-white dark:bg-gray-900`}>
				<Navbar />
				<main className='flex-1 flex justify-center'>{children}</main>
				<Footer />
				<Analytics />
			</body>
		</html>
	);
}
