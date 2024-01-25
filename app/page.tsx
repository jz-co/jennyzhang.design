import Image from 'next/image';
import thumbnail from '../public/images/atm_thumbnail.png';
import Link from 'next/link';

export default function Home() {
	return (
		<main className='flex flex-col items-center justify-between px-4 py-24 md:px-12 lg:px-24 space-y-12'>
			<div className='text-center'>
				<h1 className={`mb-3 text-2xl font-semibold`}>Jenny is a UX designer based in Toronto.</h1>
			</div>
			<div className='pb-12 pt-4 px-12 w-full max-w-6xl bg-slate-100 dark:bg-slate-800 text-gray-800 dark:text-gray-100'>
				<Image
					src={thumbnail}
					style={{
						width: '100%',
						height: 'auto',
					}}
					alt='Picture of the application'
				/>
				<div className='pb-4'>
					<h2 className='text-sm font-semibold text-gray-600 dark:text-gray-400 mb-2'>
						Government of Canada
					</h2>
					<h3 className='text-xl font-semibold'>
						Application Tracking Manager: <br />
						Re-imaging internal tracking for government apps
					</h3>
				</div>
				<Link className='text-sm font-medium hover:underline underline-offset-4' href='/work/atm'>
					View project <span>-&gt;</span>
				</Link>
			</div>
			<div className='mb-12 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-3 lg:text-left gap-4'>
				<div className='group rounded-lg border border-transparent px-5 py-4'>
					<h2 className={`mb-3 text-xl font-semibold text-gray-500`}>
						Resume{' '}
						{/* <span className='inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none'>
							-&gt;
						</span> */}
						<span className='text-lg text-gray-400'>(coming soon)</span>
					</h2>
					<p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
						Find all the places where I've had an opportunity to make an impact through UX design.
					</p>
				</div>

				<div className='group rounded-lg border border-transparent px-5 py-4'>
					<h2 className={`mb-3 text-xl font-semibold text-gray-500`}>
						Figma{' '}
						{/* <span className='inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none'>
							-&gt;
						</span> */}
						<span className='text-lg text-gray-400'>(coming soon)</span>
					</h2>
					<p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
						Check out what I'm sharing on Figma community profile.
					</p>
				</div>

				<a
					href='https://techcorner-blog.vercel.app/'
					className='group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-slate-300 hover:bg-slate-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30'
					target='_blank'
					rel='noopener noreferrer'>
					<h2 className='mb-3 text-xl font-semibold'>
						Tech Corner{' '}
						<span className='inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none'>
							-&gt;
						</span>
					</h2>
					<p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
						Learn Computer Science concepts in this charming website, designed and built with Next.js.
					</p>
				</a>
			</div>
		</main>
	);
}
