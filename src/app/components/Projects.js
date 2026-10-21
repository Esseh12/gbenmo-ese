import Image from 'next/image';
import { Icon } from '@iconify/react';
import SectionTitle from './SectionTitle';

const colors = ['bg-bubblegum', 'bg-sky', 'bg-mint', 'bg-tangerine'];

export default function Projects() {
	const projects = [
		{
			title: 'SkillBoost Academy',
			description:
				'A CELPIP exam-prep platform where candidates practise Listening, Reading, Writing, and Speaking, sit full mock exams, and get AI-graded feedback. Includes band scoring, session history, and a progress dashboard that tracks performance across every module.',
			url: 'https://www.celpipskillboostacademy.com/',
			image: '/skillboost.png',
			alt: 'SkillBoost Academy CELPIP practice dashboard',
			technologies: [
				'Next.js',
				'TypeScript',
				'Tailwind CSS',
				'Auth.js',
				'Node.js',
				'Supabase',
				'SQL',
				'Gemini API',
				'Anthropic API',
			],
		},
		{
			title: 'My Auditor',
			description:
				'A digital audio marketplace connecting music creators with buyers seeking licensed audio assets. Features a three-tier licensing model, real-time creator analytics, and a one-time purchase model with no hidden fees or subscriptions.',
			url: 'https://www.myauditor.live',
			image: '/auditor.png',
			alt: 'My Auditor digital audio marketplace homepage',
			technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Node.js'],
		},
		{
			title: 'Rezinos',
			description:
				'A modern web platform built for Udala Solutions, delivering a polished and performant user experience with smooth animations and a clean interface.',
			url: 'https://www.rezinos.com',
			image: '/rezinos.png',
			alt: 'Rezinos homepage',
			technologies: ['Next.js', 'JavaScript', 'Tailwind CSS', 'Framer Motion'],
		},
		{
			title: 'WFJ Law Firm',
			description:
				'A professional website for a law firm, built with React and Tailwind CSS, focusing on clarity, trust, and accessibility.',
			url: 'https://wfjlawfirm.vercel.app/',
			image: '/wfj-lawfirm.png',
			alt: 'WFJ Law Firm website homepage',
			technologies: ['React', 'Tailwind CSS'],
		},
	];

	return (
		<section
			id='projects'
			aria-labelledby='projects-title'>
			<SectionTitle
				index='03'
				id='projects-title'
				color='bg-bubblegum'>
				Selected projects
			</SectionTitle>

			<ul className='grid gap-6 sm:grid-cols-2'>
				{projects.map((project, index) => (
					<li key={project.title}>
						<article className='brutal brutal-lift group flex h-full flex-col overflow-hidden bg-card'>
							<div
								className={`border-b-3 border-ink p-3 ${colors[index % colors.length]}`}>
								<div className='overflow-hidden rounded-lg border-3 border-ink bg-card'>
									<Image
										src={project.image}
										alt={project.alt}
										width={800}
										height={450}
										className='aspect-video w-full object-cover object-top transition-transform duration-300 group-hover:scale-105'
									/>
								</div>
							</div>

							<div className='flex flex-1 flex-col p-5'>
								<h3 className='font-display text-xl'>{project.title}</h3>
								<p className='mt-2 flex-1 text-sm leading-relaxed text-ink/80'>
									{project.description}
								</p>

								<ul
									className='mt-4 flex flex-wrap gap-2'
									aria-label='Technologies used'>
									{project.technologies.map((tech) => (
										<li
											key={tech}
											className='tag bg-paper'>
											{tech}
										</li>
									))}
								</ul>

								<a
									href={project.url}
									target='_blank'
									rel='noreferrer noopener'
									aria-label={`Visit ${project.title} (opens in a new tab)`}
									className='brutal-btn mt-5 self-start bg-sun text-sm'>
									Visit site
									<Icon
										icon='tabler:arrow-up-right'
										className='size-4'
									/>
								</a>
							</div>
						</article>
					</li>
				))}
			</ul>

			<a
				href='/projects'
				className='brutal-btn mt-8 bg-card'>
				View full project archive
				<Icon
					icon='tabler:arrow-right'
					className='size-4'
				/>
			</a>
		</section>
	);
}
