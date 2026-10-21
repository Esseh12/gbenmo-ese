import { Icon } from '@iconify/react';
import SectionTitle from './SectionTitle';
import { experiences } from '@/app/utils/utils';

const colors = ['bg-sun', 'bg-sky', 'bg-mint'];

export default function Experience() {
	return (
		<section
			id='experience'
			aria-labelledby='experience-title'>
			<SectionTitle
				index='02'
				id='experience-title'
				color='bg-sky'>
				Experience
			</SectionTitle>

			<ol className='space-y-6'>
				{experiences.map((exp, index) => (
					<li
						key={exp.company}
						className='brutal overflow-hidden bg-card'>
						<div
							className={`flex flex-wrap items-center justify-between gap-2 border-b-3 border-ink px-5 py-3 ${colors[index % colors.length]}`}>
							<h3 className='font-display text-lg sm:text-xl'>{exp.title}</h3>
							<span className='tag bg-card'>{exp.period}</span>
						</div>

						<div className='p-5 sm:p-6'>
							<a
								href={exp.companyUrl}
								target='_blank'
								rel='noreferrer noopener'
								aria-label={`${exp.company} (opens in a new tab)`}
								className='group inline-flex items-center gap-1 font-bold underline decoration-ink/30 decoration-3 underline-offset-4 hover:decoration-ink'>
								@ {exp.company}
								<Icon
									icon='tabler:arrow-up-right'
									className='size-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5'
								/>
							</a>

							<p className='mt-3 leading-relaxed text-ink/80'>
								{exp.description}
							</p>

							<ul
								className='mt-4 flex flex-wrap gap-2'
								aria-label='Technologies used'>
								{exp.technologies.map((tech) => (
									<li
										key={tech}
										className='tag bg-paper'>
										{tech}
									</li>
								))}
							</ul>
						</div>
					</li>
				))}
			</ol>

			<a
				href='/Ese_Gbenmo_Fullstack_Resume.pdf'
				target='_blank'
				rel='noreferrer noopener'
				aria-label='View Full Résumé (opens in a new tab)'
				className='brutal-btn mt-8 bg-bubblegum'>
				View full résumé
				<Icon
					icon='tabler:arrow-up-right'
					className='size-4'
				/>
			</a>
		</section>
	);
}
