import Link from 'next/link';

export default function Navbar() {
	return (
		<header className='px-16 lg:px-12 h-14 flex items-center'>
			<Link className='flex items-center justify-center' href='/'>
					<span>Jenny Zhang</span>
			</Link>
			<nav className='ml-auto flex gap-4 sm:gap-6'>
				<Link className='text-sm font-medium hover:underline underline-offset-4' href='/work/atm'>
					Portfolio
				</Link>
				<Link className='text-sm font-medium hover:underline underline-offset-4' href='/'>
					About
				</Link>
				<Link className='text-sm font-medium hover:underline underline-offset-4' href='/'>
					Contact
				</Link>
			</nav>
		</header>
	);
}
