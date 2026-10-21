import { siteUrl } from './utils/utils';

export default function sitemap() {
	const lastModified = new Date();
	return [
		{ url: siteUrl, lastModified, changeFrequency: 'monthly', priority: 1 },
		{
			url: `${siteUrl}/projects`,
			lastModified,
			changeFrequency: 'monthly',
			priority: 0.8,
		},
	];
}
