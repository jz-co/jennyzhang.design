import type { Metadata } from 'next';
import Image from 'next/image';
import banner from '../../../public/images/atm_banner.png';
import spreadsheet from '../../../public/images/excel.jpg';
import modules from '../../../public/images/modules.png';
import modulePg from '../../../public/images/security_module.png';
import moduleSettingsPg from '../../../public/images/module_settings.png';
import updateDue from '../../../public/images/update_due_server.png';
import reminderEmail from '../../../public/images/reminder_email.png';
import alertNotifs from '../../../public/images/notifs_alerts.png';
import updateNotifs from '../../../public/images/updates.png';
import updateNotifsComp from '../../../public/images/notifs_comparison.png';
import lastUpdated from '../../../public/images/last_updated.png';

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
			<div className='px-4 md:px-6 flex flex-col items-center max-w-screen-lg'>
				<section className='py-12 md:py-24 lg:py-32 max-w-xl'>
					<div className='space-y-4'>
						<h2 className='tracking-tighter font-semibold'>the challenge</h2>
						<h3 className='text-2xl font-bold tracking-tighter md:text-3xl'>
							Create engagement in effective documentation
						</h3>
						<div className='py-8 space-y-4 text-gray-500 dark:text-gray-400 font-serif'>
							<p>
								Our goal was to ... We needed to get people excited about internal information tracking.
							</p>
							<p>
								Our users were team leads and managers. We wanted to save users time and focus on what
								matters most to them: providing essential business value, but also ensuring legal
								compliance and upholding high standards in the development of government software.
							</p>
							<p>
								Get users invested in the capabilities of modern technology - Blazor and WebAssembly. We
								were piloting a test project, but we were determined to impress and get buy-in.
							</p>
						</div>
					</div>
					<div className='space-y-4 py-8'>
						<h4 className='text-xl font-bold'>My Role</h4>
						<div className='py-2 space-y-4 text-gray-500 dark:text-gray-400 font-serif'>
							<p>I led the design of the application from the beginning in June 2021.</p>
							<p>
								I collaborated with 3 other frontend developers, who doubled as designers to define the
								flow, visual design and interaction design. In addition, I worked with a product manager
								to help in gathering and refining requirements.
							</p>
							<p>
								I continued to gather user feedback and refine the design throughout the implementation
								stage from (July-Dec 2021). Further, I developed the front end for several pages.
							</p>
						</div>
					</div>
				</section>
				<section className='py-12 md:py-24 lg:py-32 max-w-xl'>
					<div className='space-y-4 py-12'>
						<h2 className='tracking-tighter font-semibold'>the approach</h2>
						<h3 className='text-2xl font-bold tracking-tighter md:text-3xl'>
							Understanding friction points
						</h3>
						<p className='text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400'>
							We conducted user interviews with team leads and managers to uncover pain points with the
							current workflow, which would reveal opportunities to differentiate our solution.
						</p>
						<figure className='space-y-2 text-center'>
							<Image
								src={spreadsheet}
								style={{
									width: '100%',
									height: 'auto',
								}}
								alt='Image of an empty Excel spreadsheet'
							/>
							<figcaption className='text-sm text-gray-400 dark:text-gray-100'>
								After years of using a spreadsheet, were the users ready for a change?
							</figcaption>
						</figure>
					</div>
					<div className='space-y-4'>
						<h4 className='text-xl font-bold'>Insights</h4>
						<div className='py-4 space-y-4 text-gray-500 dark:text-gray-400 font-serif'>
							<p>
								Version chaos: the spreadsheet was circulated by email. Regular updates were not being
								made (only on a “need-to” basis) or verified, hence no one knew if the information was
								up-to-date.
							</p>
							<p>
								Manual checks for accuracy: "Managers often need to get critical information across many
								or all the applications, that's all supposed to be in the spreadsheet, but you have look
								up & then email all the team leads to double or triple check that all the data is
								actually accurate & reliable."
							</p>
							<p>
								The spreadsheet was getting bloated. Everytime information is needed for even a subset
								of applications, a new column is added, even when it doesn't apply to other
								applications. It became difficult to see what is relevant for a team lead's project, and
								even harder for everyone to pick up updates from one version to the next.
							</p>
						</div>
					</div>
				</section>
				<section className='py-12 md:py-24 lg:py-32 flex flex-col items-center'>
					<div className='space-y-4 py-12 max-w-xl'>
						<h2 className='tracking-tighter font-semibold'>the solution</h2>
						<h3 className='text-2xl font-bold tracking-tighter md:text-3xl'>Introducing...</h3>
						<p className='text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400'>
							We designed a project management web application, with a focus on relevancy (getting the
							relevant information quickly and without distraction for each user), accountability,
							accuracy & reliability, and a delightful user experience.
						</p>
					</div>
					<div className='space-y-4 py-12  max-w-xl'>
						<h4 className='text-2xl font-bold'>Modularizing information enables relevancy</h4>
						<p className='py-4 text-gray-500 dark:text-gray-400 font-serif'>
							Each software application record consisted of a set of modules. Each module is a grouping of
							related information fields. Team leads may now select which modules are relevant for their
							application, and pin modules for viewers to highlight the most important at any point in
							time.
						</p>
					</div>
					<figure className='space-y-2 text-center'>
						<Image
							src={modules}
							style={{
								width: '100%',
								maxWidth: '1048px',
								height: 'auto',
							}}
							alt='Application modules page'
						/>
						<figcaption className='text-sm text-gray-400 dark:text-gray-100'>
							Modules overview for an application, with the most important and relevant modules pinned to
							the top of the page.
						</figcaption>
					</figure>
					<div className='space-y-4 py-12 max-w-xl text-gray-500 dark:text-gray-400 font-serif'>
						<p>
							Fields within modules are editable, and we define different data types (e.g. single-select,
							boolean, text, long text, dates) to make data entry more intuitive to users and less prone
							to errors.
						</p>

						<p>
							Further, we can track metadata for separate modules so that team members who are responsible
							for different aspects of an application can make changes without "stepping on each other's
							toes".
						</p>
					</div>
					<figure className='space-y-2 text-center'>
						<Image
							src={modulePg}
							style={{
								width: '100%',
								maxWidth: '1048px',
								height: 'auto',
							}}
							alt='Module page, consisting of metadata (who and when last updated) and editable data fields'
						/>
						<figcaption className='text-sm text-gray-400 dark:text-gray-100'>
							Single module containing set of fields and values, which are editable.
						</figcaption>
					</figure>

					<div className='space-y-4 py-12 max-w-xl text-gray-500 dark:text-gray-400 font-serif'>
						<p>
							Keeping extensibility in mind, a feature of modules is that they can be mandatory for all
							applications or optional. This enables managers who create new modules in the future (as
							required) to apply new modules to all applications quickly. At the same time, the
							flexibility of optional modules allows team leads to choose what is relevant to their
							project.
						</p>
					</div>
					<figure className='space-y-2 text-center'>
						<Image
							src={moduleSettingsPg}
							style={{
								width: '100%',
								maxWidth: '1048px',
								height: 'auto',
							}}
							alt='Module page, consisting of metadata (who and when last updated) and editable data fields'
						/>
						<figcaption className='text-sm text-gray-400 dark:text-gray-100'>
							Team leads or project managers can add optional modules if applicable or delete them if no
							longer needed, always ensuring relevancy.
						</figcaption>
					</figure>
					<div className='space-y-4 py-12 max-w-xl'>
						<h4 className='text-2xl font-bold'>Reminders to encourage timely updates</h4>
						<p className='py-4 space-y-4 text-gray-500 dark:text-gray-400 font-serif'>
							In each module, there is a <em>Next update required</em> date. Reminder notifications are
							sent to all subscribers to the app. Now, editors can set the date, leave the app and forget;
							they will get be notified by email when they need. This keeps users informed, but still
							focused on what matters, i.e. building good apps.
						</p>
					</div>
					<figure className='space-y-2 text-center max-w-2xl'>
						<Image
							src={reminderEmail}
							style={{
								width: '100%',

								height: 'auto',
							}}
							alt='Image of email sent when next required date is past due or is upcoming.'
						/>
						<figcaption className='text-sm text-gray-400 dark:text-gray-100'>
							Subscribers and designated team leads receive single, combined reminder email for all
							updates required one week prior and every week after required next update.
						</figcaption>
					</figure>
					<div className='space-y-4 py-12 max-w-xl text-gray-500 dark:text-gray-400 font-serif'>
						<p>
							This model focuses on regular checks and updates, shifting the mindset to maintaining data
							regularly, instead of <em>forgetting</em> until someone is urgently seeking the information.
							When next update date is reached, status is auto-set to “Needs attention” so that others
							know that the information may be inaccurate.
						</p>
					</div>
					<figure className='space-y-2 text-center'>
						<Image
							src={updateDue}
							style={{
								width: '100%',
								maxWidth: '1048px',
								height: 'auto',
							}}
							alt='Module page with status needs attention and the next required date past due'
						/>
						<figcaption className='text-sm text-gray-400 dark:text-gray-100'>
							next update required
						</figcaption>
					</figure>
					<div className='space-y-4 py-12 max-w-xl text-gray-500 dark:text-gray-400 font-serif'>
						<p>
							In-app notifications aggregate in the notifications center. Users aren't likely to be
							spending time regularly in the app (that's what we're aiming for), hence when they do
							return, we want to inform quickly of important alerts.
						</p>
					</div>
					<figure className='space-y-2 text-center'>
						<Image
							src={alertNotifs}
							style={{
								width: '100%',
								maxWidth: '1048px',
								height: 'auto',
							}}
							alt='View of the notification center, on the Alerts tab, displaying 3 alerts indicating past due updates.'
						/>
						<figcaption className='text-sm text-gray-400 dark:text-gray-100'>
							Reminder alerts populate in the user's notification center for easy access to update modules
							that they may be responsible for.
						</figcaption>
					</figure>

					<div className='space-y-4 py-12'>
						<h4 className='text-2xl font-bold'>Accountability made simple</h4>
						<div className='py-4 space-y-4 text-gray-500 dark:text-gray-400 font-serif'>
							<p>
								Each module contains metadata on who last update the module and when. This ensures that
								editor verifies that all information within that module is correct, as they are marked
								as responsible.
							</p>
						</div>
						<figure className='space-y-2 text-center'>
							<Image
								src={lastUpdated}
								style={{
									width: '100%',
									maxWidth: '1048px',
									height: 'auto',
								}}
								alt='Last updated'
							/>
							<figcaption className='text-sm text-gray-400 dark:text-gray-100'>
								Last updated when and who; next update required
							</figcaption>
						</figure>
						<div>
							<p>
								Whenever any user edits information, subscribers are informed. Updates are also sent via
								email digest and in-app notifications (pop-up with notification center) to subscribers.
								This keeps them informed on new information, but also keeps record of who is making
								changes to the data.
							</p>
						</div>
						<figure className='space-y-2 text-center'>
							<Image
								src={updateNotifs}
								style={{
									width: '100%',
									maxWidth: '1048px',
									height: 'auto',
								}}
								alt='Left shows the update notification in the notification center. Right shows the update in the pop-up toast.'
							/>
							<figcaption className='text-sm text-gray-400 dark:text-gray-100'>
								User receives an in-app toast notification when subscribed applications are updated
								(right), and can view all notifications in their notification center.
							</figcaption>
						</figure>
						<div>
							<p>
								An initial ambitious design involving for comprehensive change tracking, was revised due
								to time restrictions. Working closely with developers to balance implementation effort,
								we modify the design to track <em>when a change occurred</em>. It provides enough
								information that it is still useful and maintains a trail of responsibility, achieving
								accountability.
							</p>
						</div>
						<figure className='space-y-2 text-center'>
							<Image
								src={updateNotifsComp}
								style={{
									width: '100%',
									maxWidth: '1048px',
									height: 'auto',
								}}
								alt='Left shows the original proposal for update notification. Right shows the final design'
							/>
							<figcaption className='text-sm text-gray-400 dark:text-gray-100'>
								The original proposal featured exact values changed, added complexity. The final design,
								revised for time constraints, simplifies the data needed to be tracked while achieving
								intended purpose.
							</figcaption>
						</figure>
					</div>
				</section>
				<section className='py-12 md:py-24 lg:py-32'>
					<div className='space-y-4'>
						<h2 className='tracking-tighter font-semibold'>the pilot launch</h2>
						<h3 className='text-2xl font-bold tracking-tighter md:text-3xl'>6 months later</h3>

						<p className='text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400'>
							I continued to be involved in refining the finer details of the design as we developed and
							implemented features. We demoed work-in-progress to stakeholders, after feedback and
							iterations, the app was ready in production within 6 months.
						</p>
					</div>
					<div className='space-y-4 py-8'>
						<h4 className='text-xl font-bold'>The Outcomes</h4>
						<div className='py-2 space-y-4 text-gray-500 dark:text-gray-400 font-serif'>
							<p>
								We demoed the first production-ready application to senior manages in early December
								2021 (exactly 6 months). Our pitch received immense positive feedback. There was no
								doubt that this would save hours of developer work time, with future extensions into
								other divisions / groups that use the data.
							</p>
							<p>
								Technical managers brought questions regarding develop tools including data extraction
								and API features, demonstrating their enthusiasm for the potential of this application.
							</p>
							<p>
								We would continue to develop the application, introducing further features (case study
								coming soon) and resolving technical complications. I set up a launch plan for a smooth
								adoption of the product.
							</p>
							<p>
								We launched the site officially in June 2022, less than a year since the start of the
								intiative. Now, one year later, the app is activity being used to track almost 100
								software applications across the division, with over 100 users.
							</p>
							<p>
								Further, the shift to using Blazor on several large scale business critical applications
								has long begun. Our project showcased the capabilities of Blazor, generating enough
								interest to impact the development and operations of sites used by Canadians all over
								the country.
							</p>
						</div>
					</div>
				</section>
			</div>
			<div></div>
		</div>
	);
}
