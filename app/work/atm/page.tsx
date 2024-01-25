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
		<div className='flex-1 flex flex-col items-center px-2'>
			<div className='w-full max-w-3xl px-6'>
				<section className='py-12 md:py-24 lg:py-32'>
					<div className='space-y-4 text-center'>
						<h1 className='text-2xl font-bold tracking-tighter sm:text-3xl md:text-4xl'>
							Application Tracking Manager: Re-imaging internal tracking for government apps
						</h1>
						<div className='space-y-4 text-center md:px-24 px-0 font-serif py-4'>
							<p className='text-gray-500 text-lg dark:text-gray-400'>
								Our division at Environment and Climate Change Canada develop and maintain nearly one
								hundred software applications across several independent teams... and critical
								record-keeping for these apps were still being handled in a spreadsheet.
							</p>
							<p className='text-gray-500 text-lg dark:text-gray-400'>
								I was a part of the ambitious project to design and build a brand new internal webapp to
								efficiently track information across these software applications, reduces admin burden,
								and ultimately get buy-in from senior management.
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
			<section className='px-6 space-y-12 text-center py-28 max-w-xl md:text-lg font-serif dark:text-gray-400 text-gray-600'>
				<p>
					The Resuable Application Division at Environment and Climate Change Canada (ECCC) is responsible for
					the development and maintenance of several software services and web-apps, including those for
					federal regulatory reporting, informational sites, data visualization and more.
				</p>
				<p>
					A team of seven student dev and design interns, including myself, along with one full-time developer
					was formed to pilot an initiative to improve the way that critical information about these
					applications were tracked.
				</p>
			</section>
			<div className='px-4 md:px-6 flex flex-col items-center max-w-screen-lg bg-slate-50 dark:bg-slate-800 w-full'>
				<section className='py-12 md:py-24 lg:py-32 max-w-lg'>
					<div className='space-y-4'>
						<h2 className='tracking-tighter font-semibold dark:text-gray-400 text-gray-600'>
							the challenge
						</h2>
						<h3 className='text-2xl font-bold tracking-tighter md:text-3xl'>
							Get users engaged in effective internal documentation
						</h3>
						<div className='py-8 space-y-4 text-gray-600 dark:text-gray-400 font-serif md:text-lg'>
							<p>
								Our goal was to enable employees in our division to keep internal documentation and
								information tracking up-to-date effortlessly.
							</p>
							<p>
								Our target users were engineering team leads and managers. We wanted to save our users
								time on the admin task of updating these app profiles, so that they can focus on what
								matters most to them:{' '}
								<em>
									providing essential business value, ensuring legal compliance and upholding high
									standards in the development of government software.
								</em>
							</p>
							<p>
								Further, we needed to get users excited and invested in our solution. This pilot project
								would introduce the capabilities of a modern web techstack{' '}
								<em>using Blazor and WebAssembly</em>. It would determine if it should be used in
								modernizing higher stake public-facing government apps. We were determined to impress
								and get buy-in from senior management.
							</p>
						</div>
					</div>
					<div className='space-y-4 py-10'>
						<h4 className='text-xl font-bold'>My role</h4>
						<div className='py-2 space-y-4 text-gray-600 dark:text-gray-400 md:text-lg font-serif'>
							<p>
								I led the design and frontend development of the application, collaborating with 3 other
								frontend developers.
							</p>
							<p>
								I was responsible for the interaction and visual design, as well as frontend
								development. In addition, I worked with our product manager to conduct user research and
								aid help in requirements gathering.
							</p>
							<p>
								I continued to gather user feedback and refine the design throughout the implementation
								of the minimum viable product. This pilot project lasted between July 2021-December
								2021.
							</p>
						</div>
					</div>
				</section>
			</div>
			<div className='flex flex-col items-center max-w-screen-lg'>
				<section className='px-4 md:px-6 py-12 md:py-24 lg:py-32 max-w-lg'>
					<div className='space-y-4 py-12'>
						<h2 className='tracking-tighter font-semibold dark:text-gray-400 text-gray-600'>
							the approach
						</h2>
						<h3 className='text-2xl font-bold tracking-tighter md:text-3xl'>
							Understanding points of friction
						</h3>
						<p className='py-4 text-gray-500 md:text-lg dark:text-gray-400 font-serif'>
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
								alt='An empty Excel spreadsheet'
							/>
							<figcaption className='text-xs text-gray-600 dark:text-gray-100 font-serif italic'>
								After years of using a spreadsheet, how could we re-invent the way employees think about
								tracking information?
							</figcaption>
						</figure>
					</div>
					<div className='space-y-4 py-12'>
						<h4 className='text-xl font-bold'>Insights</h4>
						<ul className='py-4 space-y-6 text-gray-500 dark:text-gray-100'>
							<li>
								<h5>Version chaos meant no authoritative source</h5>
								<p className='font-serif py-2 text-gray-600 dark:text-gray-400'>
									The spreadsheet originally used for tracking this data was circulated by email.
									There were no regular updates nor verification, hence no one knew if the information
									was up-to-date. "What is meant to be an authoritative source was simply not."
								</p>
							</li>
							<li>
								<h5>Time wasted on manual checks for accuracy</h5>
								<p className='font-serif py-2 text-gray-600 dark:text-gray-400'>
									"Managers often need to get critical information across many or all the
									applications, that's all supposed to be in the spreadsheet, but you have look up &
									then email all the team leads to double or triple check that all the data is
									actually accurate & reliable."
								</p>
							</li>
							<li>
								<h5>Spreadsheet was getting bloated</h5>
								<p className='font-serif py-2 text-gray-600 dark:text-gray-400'>
									Every time information is needed for even a subset of applications, a new column is
									added, despite it not applying to other applications. It became difficult to see
									what is relevant for an individuals team lead's project, and even harder for
									everyone to pick up updates from one version to the next.
								</p>
							</li>
						</ul>
					</div>
				</section>
				<section className='py-12 px-4 md:px-6 md:py-24 lg:py-32 flex flex-col items-center'>
					<div className='space-y-4 py-12 max-w-lg'>
						<h2 className='tracking-tighter font-semibold dark:text-gray-400 text-gray-600'>
							the solution
						</h2>
						<h3 className='text-2xl font-bold tracking-tighter md:text-3xl'>Introducing ATM</h3>
						<div className='py-4 text-gray-500 text-lg dark:text-gray-400 font-serif'>
							<p className='py-4 text-gray-500 dark:text-gray-400 font-serif'>
								We designed Application Tracking Manager (ATM) as an internal web-app with a delightful
								user experience focusing on:
							</p>
							<ol className='list-decimal font-serif list-outside pl-8'>
								<li>
									Relevancy: users can access individually relevant information quickly and with
									minimal distractions.
								</li>
								<li>Accuracy: keeping data up-to-date to build an authoritative source.</li>
								<li>Accountability: users can be held responsible for their changes.</li>
							</ol>
						</div>
					</div>
					<div className='space-y-4 py-12  max-w-lg'>
						<h4 className='text-xl font-bold'>Modularizing information enables relevancy</h4>
						<p className='py-4 text-gray-600 dark:text-gray-400 font-serif'>
							Each application record consist of a set of modules. Each module is a grouping of related
							information fields. Team leads may now select which modules are relevant for their
							application, and pin modules for viewers to highlight the most important at any point in
							time.
						</p>
					</div>
					<figure className='space-y-2 text-center'>
						<Image
							src={modules}
							style={{
								width: '100%',
								maxWidth: '960px',
								height: 'auto',
							}}
							alt='Application modules page with each module shown as a card, along with a pinned and all modules section'
						/>
						<figcaption className='text-xs text-gray-500 dark:text-gray-100 font-serif italic'>
							Modules overview for an application, with the most important and relevant modules pinned to
							the top of the page.
						</figcaption>
					</figure>
					<div className='space-y-8 pt-24 pb-12 max-w-lg text-gray-600 dark:text-gray-400 font-serif'>
						<p>
							Fields within modules are editable. We define different data types (e.g. single-select,
							boolean, text, long text, dates) for fields to make data entry more intuitive and less prone
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
							alt='Module page, with the upper half displaying metadata while the second half displays set of fields and values, which are editable.'
						/>
						<figcaption className='text-xs text-gray-600 dark:text-gray-100 font-serif italic'>
							Single module page. Users can view metadata relevant to the module, and can view and edit
							the set of fields and values.
						</figcaption>
					</figure>

					<div className='space-y-4 pt-24 pb-12 max-w-lg text-gray-600 dark:text-gray-400 font-serif'>
						<p>
							Keeping extensibility in mind, modules were designed so that they can be mandatory for all
							applications or optional. This enables managers to create new modules in the future and
							apply it to all applications quickly. At the same time, the flexibility of optional modules
							allows team leads to choose what is relevant to their application.
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
						<figcaption className='text-xs text-gray-600 dark:text-gray-100 font-serif italic'>
							Team leads or project managers can add or remove optional modules in their application's
							settings page, to always ensure relevancy.
						</figcaption>
					</figure>
					<div className='space-y-4 pb-8 pt-40 max-w-lg'>
						<h4 className='text-xl font-bold'>Reminders to encourage timely updates</h4>
						<p className='py-4 space-y-4 text-gray-600 dark:text-gray-400 font-serif'>
							Users can subscribe to modules, and edit the <em>Next update required</em> date. Reminder
							notifications are sent to all subscribers to the app. Now, users can set the update date,
							leave ATM and forget; they will get be notified by email automatically. This ensures regular
							up-keep of data without additional time wasted.
						</p>
					</div>
					<figure className='text-center max-w-xl'>
						<Image
							src={reminderEmail}
							style={{
								width: '100%',
								height: 'auto',
							}}
							alt='Image of email sent when next required date is past due or is upcoming.'
						/>
						<figcaption className='text-xs text-gray-600 dark:text-gray-100 font-serif italic'>
							Subscribers and designated team leads receive a reminder email for all modules with updates
							required one week prior and every week after past due.
						</figcaption>
					</figure>
					<div className='space-y-4 pt-24 pb-12 max-w-lg text-gray-600 dark:text-gray-400 font-serif'>
						<p>
							This design focuses on regular checks and updates, shifting the behaviour from neglecting to
							update due to <em>forgetting</em> until someone is urgently seeking the information, to
							regular data maintenance, When next update date is past, the module's status is auto-set to
							“Needs attention” so that others know that the information may be inaccurate.
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
						<figcaption className='text-xs text-gray-600 dark:text-gray-100 font-serif italic'>
							The next update required, of which the date was set by the previous editor, is past due.
						</figcaption>
					</figure>
					<div className='space-y-4 pt-24 pb-12 max-w-lg text-gray-600 dark:text-gray-400 font-serif'>
						<p>
							In-app notifications aggregate in the user's notifications center. Users are unlikely to be
							spending time daily or weekly in ATM (which is what we're aiming for), hence when they do
							return, they should be able to quickly access their important alerts.
						</p>
					</div>
					<figure className='text-center max-w-sm'>
						<Image
							src={alertNotifs}
							style={{
								width: '100%',
								maxWidth: '420px',
								height: 'auto',
							}}
							alt='View of the notification center, on the Alerts tab, displaying 3 alerts indicating past due updates.'
						/>
						<figcaption className='text-xs text-gray-600 dark:text-gray-100 font-serif italic'>
							Reminder alerts populate in the user's notification center for easy access to update modules
							that they may be responsible for.
						</figcaption>
					</figure>
					<div className='space-y-4 pb-8 pt-40 max-w-lg'>
						<h4 className='text-xl font-bold'>Accountability made simple</h4>
						<div className='py-4 space-y-4 text-gray-500 dark:text-gray-400 font-serif'>
							<p>
								Each module contains metadata on who last update the module and when. This ensures that
								the editor verifies that all information within that module is correct before saving, as
								they are marked as responsible.
							</p>
							<p>
								Editors must also required to edit the date of the next update, ensuring there is always
								accountability in the future for verifying the data.
							</p>
						</div>
					</div>
					<figure className='space-y-2 text-center'>
						<Image
							src={lastUpdated}
							style={{
								width: '100%',
								maxWidth: '1048px',
								height: 'auto',
							}}
							alt='Module page highlighting the last updated and lasted updated by metadata fields.'
						/>
						<figcaption className='text-xs text-gray-600 dark:text-gray-100 font-serif italic'>
							The current editor is blocked from saving their changes until the "Next update required"
							value has been updated
						</figcaption>
					</figure>
					<div className='space-y-4 pt-24 pb-12 max-w-lg'>
						<p className='py-4 space-y-4 text-gray-500 dark:text-gray-400 font-serif'>
							Further, whenever any user edits information, subscribers of that module are informed.
							Updates are sent via a weekly email digest. Subscribers also receives in-app toast
							notifications, as well as in the notification (always accessible from the top bar). This
							keeps them informed on new information, but also keeps record of who is making changes to
							the data.
						</p>
					</div>

					<figure className='space-y-4 text-center max-w-2xl'>
						<Image
							src={updateNotifs}
							style={{
								width: '100%',
								maxWidth: '1048px',
								height: 'auto',
							}}
							alt='Left shows the update notification in the notification center. Right shows the update in the pop-up toast.'
						/>
						<figcaption className='text-xs text-gray-600 dark:text-gray-100 font-serif italic'>
							User receives an in-app toast notification when subscribed applications are updated (right),
							and can view all notifications in their notification center (left).
						</figcaption>
					</figure>
					<div className='space-y-4 pt-24 pb-12 max-w-lg'>
						<p className='py-4 space-y-4 text-gray-500 dark:text-gray-400 font-serif'>
							An initial ambitious design, involving comprehensive change tracking, was revised due to
							time restrictions. Working closely with developers to account for implementation effort, we
							modify the design to track <em>when a change occurred</em>. The revision provides just
							enough information such that it is still useful in maintaining a history and trail of
							responsibility.
						</p>
					</div>
					<figure className='space-y-4 text-center max-w-2xl'>
						<Image
							src={updateNotifsComp}
							style={{
								width: '100%',
								maxWidth: '1048px',
								height: 'auto',
							}}
							alt='Left shows the original proposal for update notification. Right shows the final design'
						/>
						<figcaption className='text-xs text-gray-600 dark:text-gray-100 font-serif italic'>
							The original proposal featured exact changed values, adding technical complexity. The final
							design, revised for time constraints, simplifies the data needed to be tracked while
							achieving its intended purpose.
						</figcaption>
					</figure>
				</section>
				<section className='px-4 py-12 mt-16 mb-16 md:py-24 lg:py-32 space-y-12 w-full bg-slate-50 dark:bg-slate-800 flex flex-col items-center'>
					<div className='space-y-4 max-w-lg'>
						<h2 className='tracking-tighter font-semibold'>the pilot launch</h2>
						<h3 className='text-2xl font-bold tracking-tighter md:text-3xl'>6 months later</h3>

						<p className='py-4 text-gray-600 text-lg dark:text-gray-300 font-serif'>
							I continued to be involved in refining the details of the design as we developed features,
							and gathered feedback from users. An MVP was ready in production in 6 months, and I led the
							demo to senior managers and engineering leads across the division in early December 2021
						</p>
					</div>
					<div className='space-y-4 py-8 max-w-lg'>
						<h4 className='text-xl font-bold'>Outcomes</h4>
						<div className='py-2 space-y-6 text-lg text-gray-600 dark:text-gray-300 font-serif'>
							<p>
								We received immense positive feedback. This would not only <b>save developer time</b>,
								but it would also extend to other divisions and user groups that use the data. Technical
								managers posed questions about developer tool features including data extraction and API
								features, demonstrating their <b>enthusiasm for the potential of ATM</b>.
							</p>
							<p>
								We would continue to develop the application, introducing further features (case study
								coming soon) and resolving technical complications.
							</p>
							<p>
								We launched ATM officially in June 2022, less than a year since the start of the
								intiative. I had built a launch plan for a smooth adoption of the product. Now, at the
								time of writing (1 year later) the app is{' '}
								<b>actively tracking almost 100 software applications</b> across the division, with over
								100 users.
							</p>
							<p>
								Further, the shift to using Blazor on several business critical applications has long
								begun. Our project showcased the capabilities of Blazor, generating interest to impact
								the development of government applications.
							</p>
						</div>
					</div>
				</section>
			</div>
			<div></div>
		</div>
	);
}
