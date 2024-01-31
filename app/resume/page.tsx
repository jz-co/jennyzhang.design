import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
	title: "Jenny Zhang's Resume",
	description: 'Resume outlining my work experience',
};

export default function Page() {
	return (
		<div className='flex-1 flex flex-col items-center px-12 py-28 '>
			<div className='space-y-8 max-w-3xl space-y-8'>
				<div className='space-y-2'>
					<h1 className='text-3xl font-semibold tracking-tighter sm:text-4xl md:text-3xl'>Jenny Zhang</h1>
					<p className='text-gray-500 dark:text-gray-400'>UX / Product Designer</p>
				</div>
				<div className='space-y-2'>
					<h2 className='text-lg font-bold'>About</h2>
					<p className='text-gray-500 dark:text-gray-400'>
						I am passionate about building intuitive, delightful user experiences. Currently on a young UX
						team at ECCC, I am building a culture of user-centred design, and bringing the UX team onto the
						forefront of app development and modernization in our division. With a mindset for growth, I
						proactively seek opportunities to sharpen my team&apos;s and my own design skills.
					</p>
				</div>
				<div className='space-y-2'>
					<h3 className='text-lg font-bold'>Contact</h3>
					<div className='text-gray-500 dark:text-gray-400'>
						<p>
							Email:{' '}
							<a className='underline underline-offset-2' href='mailto:jz-zhang@hotmail.com'>
								jz-zhang@hotmail.com
							</a>
						</p>
						<p>Phone: 647-982-8618</p>
						<p>
							Linkedin:{' '}
							<a
								className='underline underline-offset-2'
								href='https://www.linkedin.com/in/jennyzhangofficial/'>
								jennyzhangofficial
							</a>
						</p>
					</div>
				</div>
				<div className='grid gap-1 space-y-2'>
					<h3 className='text-lg font-bold'>Work Experience</h3>
					<div className='text-gray-500 dark:text-gray-400'>
						<h4 className='text-gray-700 dark:text-gray-100'>
							UX Designer at Environment & Climate Change Canada (Gov. of Canada)
						</h4>
						<p className='text-gray-400 dark:text-gray-500'>Sept 2022 - Now</p>
						<div className='py-2 space-y-2'>
							<p>
								Lead multi-client redesign projects for internal and public-facing government apps
								(responsive web apps and mobile), including reporting software for federal regulations
								(ex. SWIM). Objectives focus on addressing user complaints, pain points and inefficient
								workarounds, reduce task completion time and errors, and improve accessibility.
							</p>

							<ul className='list-disc ml-8'>
								<li>Organize and execute the user-centred design process.</li>
								<li>
									Present designs and seek feedback from my team, users and stakeholders, iteratively
									improving designs, and collaborating to implement designs.
								</li>
								<li>
									Facilitate design reviews with stakeholders (clients, business and engineering) to
									collaboratively make product decisions and timelines based on user needs and
									opportunities, business needs and technical trade-offs.
								</li>
								<li>
									Lead the design and end-to-end development of an internal equipment inventory
									management web app (team of 6) using Microsoft&apos;s Power Platform.
								</li>
							</ul>
							<ul className='py-2 space-y-2'>
								<li>Mentor two junior designers and design intern.</li>
								<li>Established and documented an official onboarding process for new team members.</li>
							</ul>
						</div>
					</div>
					<div className='text-gray-500 dark:text-gray-400 pt-4'>
						<h4 className='text-gray-700 dark:text-gray-100'>
							UX Design and Web Dev Intern at Environment & Climate Change Canada (Gov. of Canada)
						</h4>
						<p className='text-gray-400 dark:text-gray-500'>May 2021 - Aug 2022</p>
						<div className='space-y-2 py-2'>
							<p>
								Redesigned eight government web apps, including regulatory reporting, search interfaces
								and map applications, focusing on modern UI design, intuitive navigation, responsiveness
								and accessibility (WCAG 2.0).
							</p>
							<ul className='list-disc ml-8'>
								<li>
									Conducted user research (surveys, interviews) to understand user needs and pain
									points, and usability tests to evaluate design assumptions.
								</li>
								<li>
									Consolidated and presented research findings and feedback as actionable insights.
								</li>
								<li>
									Created user flows, wireframes, and prototypes to visualize and test UX concepts.
								</li>
								<li>
									Created and presented high-fidelity mock-ups using <b>Figma</b> and written decision
									logs to communicate design concepts, rationale and trade-offs.
								</li>
							</ul>
							<p>
								Led the UI design and frontend development (team of 4) of a{' '}
								<Link href='/work/atm' className='underline underline-offset-2'>
									new internal web app
								</Link>{' '}
								that actively maintains authoritative data for nearly 100 projects across the division.
							</p>
							<p>
								Spearheaded the creation of a Figma design library for the Canada.ca design guidelines
								and WET library for quicker prototyping and smoother developer hand-off.
							</p>
							<p>
								Ran team activities and workshops that boost team morale and reinforce a culture of
								design-thinking, feedback-giving and collaboration.
							</p>
						</div>
					</div>
				</div>
				<div className='grid gap-1'>
					<h3 className='text-lg font-bold'>Education</h3>
					<div className=' text-gray-500 dark:text-gray-400'>
						<p>B.S. Computer Science Specialist, Statistics Minor at University of Toronto</p>
						<p>Graduated Spring 2023</p>
						<p>Courses: Human-Computer Interaction, Design Large Software Systems, Software Engineering</p>
					</div>
				</div>
				<div className='grid gap-1'>
					<h3 className='text-lg font-bold'>Courses</h3>
					<div className=' text-gray-500 dark:text-gray-400'>
						<p>Nielson Norman Group (NN/g) UX Training Courses</p>
						<p>October 2023</p>
						<p>Courses: Measuring UX and ROI, and DesignOps: Scaling UX Design and User Research</p>
					</div>
				</div>
				<div className='grid gap-1'>
					<h3 className='text-lg font-bold'>Skills</h3>
					<div className=' text-gray-500 dark:text-gray-400 space-y-2'>
						<p>
							Technical design: UI Design, Visual and Interaction Design, User Research, Usability
							Testing, Heuristic Analysis, Wireframing, Prototyping, Figma, Axure RP, HTML/CSS,
						</p>
						<p>Programming languages: Javascript, React, Python, C#/.NET, SQL</p>
						<p>
							Languages: English (Native), Mandarin (Professional), French (Professional writing &
							comprehension, actively working on oral communication)
						</p>
					</div>
				</div>
			</div>
		</div>
	);
}
