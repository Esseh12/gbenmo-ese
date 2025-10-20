'use client';

import React, { useState } from 'react';
import { Icon } from '@iconify/react';
import Link from 'next/link';
import { projects } from '@/app/utils/utils';

export default function ProjectArchive() {
	const [activeFilter, setActiveFilter] = useState('all');

	const filteredProjects =
		activeFilter === 'all'
			? projects
			: projects.filter((p) => p.category.toLowerCase() === activeFilter);

	return (
		<div className='min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white'>
			{/* Header */}
			<div className='border-b border-slate-800/50 backdrop-blur-sm bg-slate-900/30'>
				<div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 lg:py-8'>
					<Link
						href='/'
						className='flex items-center gap-2 text-slate-200 hover:text-purple-400  transition-colors mb-4 group'>
						<Icon
							icon='mdi:arrow-left'
							className='w-5 h-5 group-hover:-translate-x-1 transition-transform'
						/>
						<span className='text-sm font-medium'>Back</span>
					</Link>
					<h1 className='text-2xl sm:text-3xl md:text-4xl   font-bold bg-gradient-to-r from-white via-cyan-100 to-cyan-400 bg-clip-text text-transparent'>
						All Projects
					</h1>
				</div>
			</div>

			{/* Filter Tabs */}
			<div className='sticky top-0 z-10 bg-slate-900/80 backdrop-blur-md border-b border-slate-800/50'>
				<div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4'>
					<div className='flex gap-2 sm:gap-4 overflow-x-auto scrollbar-hide'>
						{[
							{
								id: 'all',
								label: 'All Projects',
								icon: 'mdi:view-grid-outline',
							},
							{ id: 'design', label: 'Design', icon: 'mdi:palette-outline' },
							{
								id: 'integration',
								label: 'Integration',
								icon: 'mdi:code-tags',
							},
						].map((filter) => (
							<button
								key={filter.id}
								onClick={() => setActiveFilter(filter.id)}
								className={`text-sm flex items-center gap-2 px-4 sm:px-6 py-2.5 rounded-lg font-medium transition-all whitespace-nowrap ${
									activeFilter === filter.id
										? 'bg-cyan-500 text-white shadow-lg shadow-cyan-500/20'
										: 'bg-slate-800/50 text-slate-400 hover:bg-slate-800 hover:text-white'
								}`}>
								<Icon
									icon={filter.icon}
									className='w-4 h-4'
								/>
								<span>{filter.label}</span>
							</button>
						))}
					</div>
				</div>
			</div>

			{/* Table */}
			<div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12'>
				{/* Desktop Table */}
				<div className='hidden lg:block overflow-x-auto'>
					<table className='w-full'>
						<thead>
							<tr className='border-b border-slate-800'>
								<th className='text-left py-4 px-4 text-xs font-semibold text-slate-400 uppercase tracking-wider'>
									Year
								</th>
								<th className='text-left py-4 px-4 text-xs font-semibold text-slate-400 uppercase tracking-wider'>
									Project
								</th>
								<th className='text-left py-4 px-4 text-xs font-semibold text-slate-400 uppercase tracking-wider'>
									Category
								</th>
								<th className='text-left py-4 px-4 text-xs font-semibold text-slate-400 uppercase tracking-wider'>
									Made at
								</th>
								<th className='text-left py-4 px-4 text-xs font-semibold text-slate-400 uppercase tracking-wider'>
									Built with
								</th>
								<th className='text-left py-4 px-4 text-xs font-semibold text-slate-400 uppercase tracking-wider'>
									Link
								</th>
							</tr>
						</thead>
						<tbody>
							{filteredProjects.map((project, idx) => (
								<tr
									key={project.id}
									className='border-b border-slate-800/50 hover:bg-slate-800/30 transition-colors group'>
									<td className='py-6 px-4'>
										<span className='text-slate-300 font-medium text-sm'>
											{project.year}
										</span>
									</td>
									<td className='py-6 px-4'>
										<span className='text-white font-semibold text-sm group-hover:text-slate-200 transition-colors'>
											{project.name}
										</span>
									</td>
									<td className='py-6 px-4'>
										<span
											className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${
												project.category === 'Design'
													? 'bg-purple-500/10 text-purple-400 border border-purple-500/20'
													: 'bg-cyan-500/10 text-slate-200 border border-cyan-500/20'
											}`}>
											{project.category}
										</span>
									</td>
									<td className='py-6 px-4'>
										<span className='text-slate-400 text-sm'>
											{project.company}
										</span>
									</td>
									<td className='py-6 px-4'>
										<div className='flex flex-wrap gap-2'>
											{project.technologies.map((tech, idx) => (
												<span
													key={idx}
													className='px-2.5 py-1 bg-slate-700/50 text-cyan-300 rounded-md text-xs font-medium'>
													{tech}
												</span>
											))}
										</div>
									</td>
									<td className='py-6 px-4'>
										<a
											href={`https://${project.link}`}
											target='_blank'
											rel='noopener noreferrer'
											className='inline-flex items-center gap-2 text-slate-200 hover:text-purple-400  text-sm font-medium group/link'>
											<span>{project.link}</span>
											<Icon
												icon='mdi:arrow-top-right'
												className='w-4 h-4 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform'
											/>
										</a>
									</td>
								</tr>
							))}
						</tbody>
					</table>
				</div>

				{/* Mobile/Tablet Cards */}
				<div className='lg:hidden space-y-4'>
					{filteredProjects.map((project) => (
						<div
							key={project.id}
							className='bg-slate-800/30 backdrop-blur-sm border border-slate-700/50 rounded-xl p-5 hover:bg-slate-800/50 hover:border-cyan-500/30 transition-all'>
							{/* Year & Category */}
							<div className='flex items-center justify-between mb-3'>
								<span className='text-slate-400 font-medium text-sm'>
									{project.year}
								</span>
								<span
									className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${
										project.category === 'Design'
											? 'bg-purple-500/10 text-purple-400 border border-purple-500/20'
											: 'bg-cyan-500/10 text-slate-200 border border-cyan-500/20'
									}`}>
									{project.category}
								</span>
							</div>

							{/* Project Name */}
							<h3 className='text-xl font-bold text-white mb-2'>
								{project.name}
							</h3>

							{/* Company */}
							<p className='text-slate-400 text-sm mb-4'>{project.company}</p>

							{/* Technologies */}
							<div className='flex flex-wrap gap-2 mb-4'>
								{project.technologies.map((tech, idx) => (
									<span
										key={idx}
										className='px-2.5 py-1 bg-slate-700/50 text-cyan-300 rounded-md text-xs font-medium'>
										{tech}
									</span>
								))}
							</div>

							{/* Link */}
							<a
								href={`https://${project.link}`}
								target='_blank'
								rel='noopener noreferrer'
								className='inline-flex items-center gap-2 text-slate-200 hover:text-purple-400  text-xs font-medium group'>
								<span>{project.link}</span>
								<Icon
									icon='mdi:arrow-top-right'
									className='w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform'
								/>
							</a>
						</div>
					))}
				</div>

				{/* Empty State */}
				{filteredProjects.length === 0 && (
					<div className='py-20 text-center'>
						<Icon
							icon='mdi:folder-open-outline'
							className='w-20 h-20 mx-auto text-slate-700 mb-4'
						/>
						<p className='text-slate-400 text-lg'>
							No projects found in this category.
						</p>
					</div>
				)}
			</div>
		</div>
	);
}
