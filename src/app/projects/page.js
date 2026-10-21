'use client';

import React from 'react';
import { Icon } from '@iconify/react';
import Link from 'next/link';
import { projects } from '@/app/utils/utils';
import { Star } from '@/app/components/Doodles';

const colors = ['bg-sun', 'bg-sky', 'bg-mint', 'bg-bubblegum', 'bg-lilac'];

export default function ProjectArchive() {
	// TODO: Add category filter tabs back when there are more integration projects
	const filteredProjects = projects;

	return (
		<div className='mx-auto min-h-screen max-w-screen-2xl px-4 py-8 sm:px-6 lg:px-8 sm:py-12'>
			<header className='brutal relative overflow-hidden bg-card p-6 sm:p-8'>
				<Star className='pointer-events-none absolute right-5 top-5 size-10 animate-wiggle text-bubblegum sm:size-12' />
				<Link
					href='/'
					className='brutal-btn bg-card px-3 py-1.5 text-sm'>
					<Icon
						icon='tabler:arrow-left'
						className='size-4'
					/>
					Back
				</Link>
				<h1 className='mt-5 font-display text-4xl sm:text-5xl'>All projects</h1>
				<p className='mt-2 text-ink/80'>
					Everything I’ve built, from client work to side projects.
				</p>
			</header>

			{/* Desktop table */}
			<div className='brutal mt-8 hidden overflow-hidden bg-card lg:block'>
				<table className='w-full text-left'>
					<thead className='border-b-3 border-ink bg-sun'>
						<tr>
							<th className='px-5 py-4 font-display text-sm'>Project</th>
							<th className='px-5 py-4 font-display text-sm'>Built with</th>
							<th className='px-5 py-4 font-display text-sm'>Link</th>
						</tr>
					</thead>
					<tbody>
						{filteredProjects.map((project) => (
							<tr
								key={project.id}
								className='border-b-2 border-ink/15 transition-colors last:border-0 hover:bg-paper'>
								<td className='px-5 py-5 font-bold'>{project.name}</td>
								<td className='px-5 py-5'>
									<div className='flex flex-wrap gap-2'>
										{project.technologies.map((tech) => (
											<span
												key={tech}
												className='tag bg-card'>
												{tech}
											</span>
										))}
									</div>
								</td>
								<td className='px-5 py-5'>
									<a
										href={`https://${project.link}`}
										target='_blank'
										rel='noopener noreferrer'
										className='group inline-flex items-center gap-1 text-sm font-semibold underline decoration-ink/30 decoration-2 underline-offset-4 hover:decoration-ink'>
										{project.link}
										<Icon
											icon='tabler:arrow-up-right'
											className='size-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5'
										/>
									</a>
								</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>

			{/* Mobile/Tablet cards */}
			<ul className='mt-8 grid gap-5 sm:grid-cols-2 lg:hidden'>
				{filteredProjects.map((project, index) => (
					<li
						key={project.id}
						className='brutal overflow-hidden bg-card'>
						<h2
							className={`border-b-3 border-ink px-5 py-3 font-display text-lg ${colors[index % colors.length]}`}>
							{project.name}
						</h2>
						<div className='p-5'>
							<div className='flex flex-wrap gap-2'>
								{project.technologies.map((tech) => (
									<span
										key={tech}
										className='tag bg-paper'>
										{tech}
									</span>
								))}
							</div>
							<a
								href={`https://${project.link}`}
								target='_blank'
								rel='noopener noreferrer'
								className='brutal-btn mt-4 max-w-full bg-sun px-3 py-1.5 text-xs break-all'>
								{project.link}
								<Icon
									icon='tabler:arrow-up-right'
									className='size-4 shrink-0'
								/>
							</a>
						</div>
					</li>
				))}
			</ul>

			{filteredProjects.length === 0 && (
				<div className='brutal mt-8 bg-card py-20 text-center'>
					<Icon
						icon='tabler:folder-open'
						className='mx-auto mb-4 size-16'
					/>
					<p className='text-lg font-semibold'>No projects found.</p>
				</div>
			)}
		</div>
	);
}
