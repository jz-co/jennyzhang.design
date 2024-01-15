import type { Metadata } from 'next';
import Image from 'next/image';
import banner from '../../../public/images/atm_banner.png';

export const metadata: Metadata = {
	title: 'Application Tracking Manager (design case study)',
	description: '...',
};

export default function Page() {
	return (
		<div className='flex-1 flex flex-col items-center'>
			<div className='w-full max-w-3xl px-4 md:px-6'>
				<section className='py-12 md:py-24 lg:py-32'>
					<div className='space-y-4 text-center'>
						<h1 className='text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl'>
							Application Tracking Manager: Re-imaging internal tracking for government apps
						</h1>
						<div className='space-y-4 text-center px-24'>
							<p className='text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400'>
								Our division at Environment and Climate Change were developing and maintaining nearly
								one hundred different software applications across siloed teams... and critical
								record-keeping for these apps were still being handled in a spreadsheet.
							</p>
							<p className='text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400'>
								I was a part of the ambitious project to design a brand new application to efficiently
								track application data across short of 100 software applications in my division, and get
								buy-in from senior management.
							</p>
						</div>
					</div>
				</section>
			</div>
			<div className='w-full bg-slate-200'>
				<Image
					src={banner}
					sizes='100vw'
					style={{
						width: '100%',
						height: 'auto',
					}}
					alt='Picture of the application'
				/>
			</div>
			<div className='w-full max-w-3xl px-4 md:px-6'>
				<section className='py-12 md:py-24 lg:py-32'>
					<div className='space-y-4'>
						<h2 className='text-2xl font-bold tracking-tighter md:text-3xl'>Problem Statement</h2>
						<p className='text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400'>
							The existing mobile banking app was outdated and difficult to use.
						</p>
					</div>
				</section>
				<section className='py-12 md:py-24 lg:py-32'>
					<div className='space-y-4'>
						<h2 className='text-2xl font-bold tracking-tighter md:text-3xl'>Research & Analysis</h2>
						<p className='text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400'>
							We conducted user interviews and analyzed the existing app to identify the issues.
						</p>
					</div>
				</section>
				<section className='py-12 md:py-24 lg:py-32'>
					<div className='space-y-4'>
						<h2 className='text-2xl font-bold tracking-tighter md:text-3xl'>Design Process</h2>
						<p className='text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400'>
							We designed a new user-friendly mobile banking app that addressed the issues identified in
							the research and analysis phase.
						</p>
					</div>
				</section>
				<section className='py-12 md:py-24 lg:py-32'>
					<div className='space-y-4'>
						<h2 className='text-2xl font-bold tracking-tighter md:text-3xl'>Final Solution</h2>
						<p className='text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400'>
							The new mobile banking app was launched and received positive feedback from users.
						</p>
					</div>
				</section>
			</div>
		</div>
	);
}
