'use client';

import React, { useState, useEffect } from 'react';
import { Clock, Calendar, Star, Sparkles } from 'lucide-react';

export default function MaintenancePage() {
	const [timeLeft, setTimeLeft] = useState({
		days: 0,
		hours: 0,
		minutes: 0,
		seconds: 0,
	});

	const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
	const [isHovered, setIsHovered] = useState(false);

	useEffect(() => {
		const targetDate = new Date('2025-10-01T00:00:00');

		const updateCountdown = () => {
			const now = new Date();
			const difference = targetDate.getTime() - now.getTime();

			if (difference > 0) {
				const days = Math.floor(difference / (1000 * 60 * 60 * 24));
				const hours = Math.floor(
					(difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
				);
				const minutes = Math.floor(
					(difference % (1000 * 60 * 60)) / (1000 * 60)
				);
				const seconds = Math.floor((difference % (1000 * 60)) / 1000);

				setTimeLeft({ days, hours, minutes, seconds });
			}
		};

		updateCountdown();
		const interval = setInterval(updateCountdown, 1000);

		return () => clearInterval(interval);
	}, []);

	useEffect(() => {
		const handleMouseMove = (e) => {
			setMousePosition({ x: e.clientX, y: e.clientY });
		};

		window.addEventListener('mousemove', handleMouseMove);
		return () => window.removeEventListener('mousemove', handleMouseMove);
	}, []);

	const FloatingElement = ({ delay, size, left, top }) => (
		<div
			className={`absolute animate-bounce opacity-20 text-purple-300`}
			style={{
				left: `${left}%`,
				top: `${top}%`,
				animationDelay: `${delay}s`,
				animationDuration: '3s',
			}}>
			<Star size={size} />
		</div>
	);

	return (
		<div className='min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-violet-900 relative overflow-hidden'>
			{/* Animated background elements */}
			<div className='absolute inset-0'>
				<FloatingElement
					delay={0}
					size={16}
					left={10}
					top={20}
				/>
				<FloatingElement
					delay={1}
					size={12}
					left={80}
					top={30}
				/>
				<FloatingElement
					delay={2}
					size={20}
					left={15}
					top={70}
				/>
				<FloatingElement
					delay={0.5}
					size={14}
					left={75}
					top={60}
				/>
				<FloatingElement
					delay={1.5}
					size={18}
					left={45}
					top={15}
				/>
				<FloatingElement
					delay={2.5}
					size={10}
					left={90}
					top={80}
				/>
			</div>

			{/* Mouse follower gradient */}
			<div
				className='absolute w-96 h-96 rounded-full bg-gradient-radial from-purple-400/10 to-transparent pointer-events-none transition-all duration-300 ease-out'
				style={{
					left: mousePosition.x - 192,
					top: mousePosition.y - 192,
					transform: `scale(${isHovered ? 1.5 : 1})`,
				}}
			/>

			<div className='relative z-10 flex flex-col items-center justify-center min-h-screen p-8'>
				{/* Main content */}
				<div
					className='text-center space-y-8 transform transition-all duration-300 hover:scale-105'
					onMouseEnter={() => setIsHovered(true)}
					onMouseLeave={() => setIsHovered(false)}>
					{/* Icon with animation */}
					<div className='relative'>
						<Sparkles className='w-8 h-8 absolute -top-2 -right-2 text-yellow-400 animate-pulse' />
					</div>

					{/* Main heading with gradient text */}
					<div className='space-y-4'>
						<h1 className='text-3xl sm:text-6xl md:text-8xl font-bold bg-gradient-to-r from-purple-400 via-white to-purple-600 bg-clip-text text-transparent animate-pulse'>
							Under Construction
						</h1>
						<div className='h-1 w-32 mx-auto bg-gradient-to-r from-purple-400 to-pink-400 rounded-full animate-pulse'></div>
					</div>

					{/* Subtitle */}
					<p className='text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto leading-relaxed'>
						This portfolio is currently being maintained and improved.
						<br />
						<span className='text-purple-300 font-semibold'>
							Please come back on October 1st!
						</span>
					</p>

					{/* Countdown */}
					<div className='mt-12'>
						<div className='flex items-center justify-center gap-2 mb-6'>
							<Clock className='w-6 h-6 text-purple-400' />
							<span className='text-purple-300 text-lg font-medium'>
								Countdown to Launch
							</span>
						</div>

						<div className='grid grid-cols-4 gap-4 md:gap-8 max-w-2xl mx-auto'>
							{[
								{ value: timeLeft.days, label: 'Days' },
								{ value: timeLeft.hours, label: 'Hours' },
								{ value: timeLeft.minutes, label: 'Minutes' },
								{ value: timeLeft.seconds, label: 'Seconds' },
							].map((item, index) => (
								<div
									key={item.label}
									className='bg-black/30 backdrop-blur-sm rounded-2xl p-4 md:p-6 border border-purple-500/30 hover:border-purple-400/50 transition-all duration-300 hover:transform hover:-translate-y-1'
									style={{
										animationDelay: `${index * 0.1}s`,
									}}>
									<div className='text-xl sm:text-3xl md:text-5xl font-bold text-white mb-2 animate-pulse'>
										{String(item.value).padStart(2, '0')}
									</div>
									<div className='text-sm md:text-base text-purple-300 uppercase tracking-wide'>
										{item.label}
									</div>
								</div>
							))}
						</div>
					</div>

					{/* Launch date */}
					<div className='mt-8 flex items-center justify-center gap-2 text-gray-400'>
						<Calendar className='w-5 h-5' />
						<span className='text-lg'>Launching October 1st, 2025</span>
					</div>
				</div>
			</div>
		</div>
	);
}
