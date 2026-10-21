import SectionTitle from './SectionTitle';
import DeskScene from './DeskScene';

const linkClass =
	'font-bold underline decoration-bubblegum decoration-3 underline-offset-4 hover:bg-sun hover:text-black';

const highlights = [
	{
		title: 'Waiting Time Tracking System',
		text: 'Helped hospitals reduce enrollee wait time by providing real-time insights and analytics.',
		color: 'bg-sky',
	},
	{
		title: 'Staff Management System',
		text: 'Built with HR and leadership teams — onboarding flows, performance reviews, KPI dashboards, and role permissions.',
		color: 'bg-mint',
	},
	{
		title: 'Tariff Management System',
		text: 'Redesigned and automated a manual hospital tariff process, enabling faster mapping, uploads, previews, and validation.',
		color: 'bg-bubblegum',
	},
];

export default function About() {
	return (
		<section
			id='about'
			aria-labelledby='about-title'>
			<SectionTitle
				index='01'
				id='about-title'>
				About me
			</SectionTitle>

			<div className='grid gap-6 md:grid-cols-5'>
				<div className='brutal space-y-4 bg-card p-5 leading-relaxed text-ink/85 sm:p-7 md:col-span-3'>
					<p>
						I’m a fullstack developer with a focus on building accessible,
						pixel-perfect interfaces that blend thoughtful design with clean,
						maintainable engineering. I enjoy working at the intersection of
						design and development — turning ideas into smooth, user-centered
						experiences.
					</p>
					<p>
						Most recently, I built{' '}
						<a
							className={linkClass}
							href='https://www.celpipskillboostacademy.com/'
							target='_blank'
							rel='noreferrer noopener'>
							SkillBoost Academy
						</a>
						, a CELPIP exam-prep platform with AI-graded practice and full mock
						exams, alongside work on an{' '}
						<span className='font-bold'>AI Community Manager</span>,
						collaborating with designers, backend engineers, and product leads
						to bring features from concept to deployment.
					</p>
					<p>
						Previously, I worked as a frontend developer at an HMO company, where
						I built core internal tools used daily across multiple departments,
						ranging from operations to customer support.
					</p>
					<p>
						I also take on freelance and contract work, where I partner with
						startups and small teams to design and ship fast, scalable digital
						products.
					</p>
					<p>
						Outside of work, you’ll probably find me reading, hanging out with
						friends, or exploring{' '}
						<span className='rounded border-2 border-ink bg-mint px-1.5 font-bold'>
							AI development
						</span>
						.
					</p>
				</div>

				<div className='grid gap-6 md:col-span-2'>
					<div className='brutal grid place-items-center bg-sun p-5'>
						<DeskScene className='w-full max-w-sm' />
					</div>
					<div className='brutal bg-lilac p-5'>
						<p className='font-display text-sm uppercase tracking-wide'>
							Right now
						</p>
						<ul className='mt-3 space-y-2 font-semibold'>
							<li>→ Frontend Engineer at Salariopay</li>
							<li>→ Shipping SkillBoost Academy</li>
							<li>→ Exploring AI development</li>
						</ul>
					</div>
				</div>
			</div>

			<h3 className='mb-5 mt-10 font-display text-xl'>
				Internal tools I built at the HMO
			</h3>
			<ul className='grid gap-6 sm:grid-cols-3'>
				{highlights.map((item) => (
					<li
						key={item.title}
						className={`brutal brutal-lift p-5 ${item.color}`}>
						<h4 className='font-display text-base leading-snug'>
							{item.title}
						</h4>
						<p className='mt-2 text-sm leading-relaxed'>{item.text}</p>
					</li>
				))}
			</ul>
		</section>
	);
}
