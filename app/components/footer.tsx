export default function Footer() {
	return (
		<footer className='flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t dark:border-slate-800'>
			<p className='text-xs text-gray-500 dark:text-gray-400'>© 2024 Jenny Zhang</p>
			<nav className='sm:ml-auto flex gap-4 sm:gap-6'>
				<a
					className='text-xs hover:underline underline-offset-4'
					href='https://www.linkedin.com/in/jennyzhangofficial'
					target='_blank'
					rel='noopener noreferrer'>
					LinkedIn
				</a>
				<a className='text-xs hover:underline underline-offset-4' href='mailto: jz-zhang@hotmail.com'>
					Email Me
				</a>
			</nav>
		</footer>
	);
}
