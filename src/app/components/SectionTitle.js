export default function SectionTitle({ index, id, color = 'bg-sun', children }) {
	return (
		<div className='mb-8 flex items-center gap-3'>
			<span className='font-display text-sm'>{index}</span>
			<h2
				id={id}
				className={`brutal -rotate-1 px-4 py-1.5 font-display text-2xl shadow-brutal-sm sm:text-3xl ${color}`}>
				{children}
			</h2>
			<span
				aria-hidden='true'
				className='h-[3px] flex-1 rounded-full bg-ink'
			/>
		</div>
	);
}
