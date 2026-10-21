import { ImageResponse } from 'next/og';
import { seo } from './utils/utils';

export const alt = seo.title;
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

const roles = [
	{ label: 'Full Stack', color: '#ffd23f' },
	{ label: 'AI Engineer', color: '#ff8fc7' },
	{ label: 'Frontend', color: '#74c0fc' },
	{ label: 'Software Engineer', color: '#63e6be' },
];

// Neo-brutalist share card shown when the site link is posted on social media.
export default function OpengraphImage() {
	return new ImageResponse(
		(
			<div
				style={{
					width: '100%',
					height: '100%',
					display: 'flex',
					padding: 48,
					background: '#fff8e7',
				}}>
				<div
					style={{
						flex: 1,
						display: 'flex',
						flexDirection: 'column',
						justifyContent: 'space-between',
						padding: 56,
						background: '#ffffff',
						border: '8px solid #111111',
						borderRadius: 28,
						boxShadow: '16px 16px 0 0 #111111',
					}}>
					<div style={{ display: 'flex', flexDirection: 'column' }}>
						<div style={{ fontSize: 104, fontWeight: 900, color: '#111111' }}>
							Ese Gbenmo
						</div>
						<div
							style={{
								marginTop: 16,
								fontSize: 36,
								color: '#333333',
								maxWidth: 900,
							}}>
							Building fast, accessible web apps with React, Next.js, Node.js
							and AI.
						</div>
					</div>
					<div style={{ display: 'flex', gap: 18 }}>
						{roles.map((role) => (
							<div
								key={role.label}
								style={{
									display: 'flex',
									padding: '12px 24px',
									fontSize: 30,
									fontWeight: 700,
									color: '#111111',
									background: role.color,
									border: '5px solid #111111',
									borderRadius: 16,
								}}>
								{role.label}
							</div>
						))}
					</div>
				</div>
			</div>
		),
		size,
	);
}
