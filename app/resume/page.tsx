import type { Metadata } from 'next';

export const metadata: Metadata = {
	title: "Jenny Zhang' Resume",
	description: '...',
};

export default function Page() {
	return (
		<div className='flex-1 flex flex-col items-center px-2 py-12'>
			<div className='space-y-8 max-w-3xl'>
				<div className='space-y-2'>
					<h1 className='text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl'>Jenny Zhang</h1>
					<p className='text-gray-500 dark:text-gray-400'>Product designer</p>
				</div>
				<div className='space-y-2'>
					<h2 className='text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl'>About</h2>
					<p className='text-gray-500 dark:text-gray-400'>
						I am passionate about building intuitive, delightful user experiences. Currently on a young UX
						team at ECCC, I am building a culture of user-centred design, and bringing the UX team onto the
						forefront of app development and modernization in our division. With a mindset for growth, I
						proactively seek opportunities to sharpen my team’s and my own design skills.
					</p>
				</div>
				<div className='grid gap-4'>
					<div className='grid gap-1'>
						<h3 className='text-lg font-bold'>Contact Information</h3>
						<p className='text-sm text-gray-500 dark:text-gray-400'>
							Email: <a href='mailto:jz-zhang@hotmail.com'>jz-zhang@hotmail.com</a>
						</p>
						<p className='text-sm text-gray-500 dark:text-gray-400'>Phone: 647-982-8618</p>
						<p className='text-sm text-gray-500 dark:text-gray-400'>
							Linkedin: <a href='https://www.linkedin.com/in/jennyzhangofficial/'>jennyzhangofficial</a>
						</p>
					</div>
					<div className='grid gap-1'>
						<h3 className='text-lg font-bold'>Work Experience</h3>
						<p className='text-sm text-gray-500 dark:text-gray-400'>Company Name - Job Title</p>
						<p className='text-sm text-gray-500 dark:text-gray-400'>Dates</p>
						<p className='text-sm text-gray-500 dark:text-gray-400'>Responsibilities</p>
					</div>
					<div className='grid gap-1'>
						<h3 className='text-lg font-bold'>Education</h3>
						<p className='text-sm text-gray-500 dark:text-gray-400'>School Name - Degree</p>
						<p className='text-sm text-gray-500 dark:text-gray-400'>Dates</p>
						<p className='text-sm text-gray-500 dark:text-gray-400'>Coursework</p>
					</div>
					<div className='grid gap-1'>
						<h3 className='text-lg font-bold'>Skills</h3>
						<p className='text-sm text-gray-500 dark:text-gray-400'>Skill 1</p>
						<p className='text-sm text-gray-500 dark:text-gray-400'>Skill 2</p>
						<p className='text-sm text-gray-500 dark:text-gray-400'>Skill 3</p>
						<p className='text-sm text-gray-500 dark:text-gray-400'>Skill 4</p>
						<p className='text-sm text-gray-500 dark:text-gray-400'>Skill 5</p>
					</div>
				</div>
			</div>
		</div>
	);
}
