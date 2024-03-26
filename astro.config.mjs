import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

import remarkMath from 'remark-math';
import rehypeMathJax from 'rehype-mathjax';

// https://astro.build/config
export default defineConfig({
	site: 'https://arc4cfd.github.io',
	base: '',
	markdown: {
		remarkPlugins: [remarkMath],
		rehypePlugins: [rehypeMathJax],
	},
	integrations: [
		starlight({
			title: 'ARC4CFD',
			customCss: ['./src/custom.css'],
			components: {
				PageSidebar: './src/components/PageSidebar.astro',
				Footer: './src/components/Footer.astro',
				ThemeSelect: './src/components/ThemeSelect.astro'
			},
			// logo: {
			// 	// src: './src/assets/mpilab.png',
			//  	// OR, to have light and dark logo variants:
			// 	light: './src/assets/favicon.svg',
			// 	dark: './src/assets/favicon.svg',
			// 	replacesTitle: false,
			// },
			social: {
				github: 'https://github.com/ARC4CFD/arc4cfd',
			},
			tableOfContents: {
				minHeadingLevel: 2,
				maxHeadingLevel: 3,
			},
			sidebar: [
				{
					label: 'Overview',
					link: '/overview'
				},
				{
					label: 'Prerequisites',
					link: '/prereqs'
				},
				{
					label: 'Section 1',
					items: [
						{ label: 'Outline', link: '/section1/outline/' },
						{ label: '1.1 ARC concepts', link: '/section1/part1/' },
						{ label: '1.2 HPC Navigation', link: '/section1/part2/' },
						{ label: '1.3 Allocating Resources', link: '/section1/part3/' },
						{ label: '1.4 Parallel Computing', link: '/section1/part4/' },
						{ label: '1.5 Real-Life Example', link: '/section1/part5/' },
					],
					//autogenerate: { directory: 'section1' },
				},
				{
					label: 'Section 2',
					collapsed: true,
					items: [
						{ label: 'Outline', link: '/section2/outline/' },
						{ label: '2.1 Define CFD workflow', link: '/section2/part1/' },
						{ label: '2.2 Plan the simulations', link: '/section2/part2/' },
						{ label: '2.3 Estimate HPC requirements', link: '/section2/part3/' },
						{ label: '2.4 Pre-processing', link: '/section2/part4/' },
						{ label: '2.5 Optimizing HPC', link: '/section2/part5/' },
						{ label: '2.6 Running simulations on HPC', link: '/section2/part6/' },
						{ label: '2.7 A posteriori analysis', link: '/section2/part7/' },
					],
					//autogenerate: { directory: 'section2' },
				},
				{
					label: 'Section 3',
					collapsed: true,
					items: [
						{ label: 'Outline', link: '/section3/outline/' },
						{ label: '3.1 Introduction to RDM', link: '/section3/part1/' },
						{ label: '3.2 CFD meets RDM', link: '/section3/part2/' },
						{ label: '3.3 Developing DPM for CFD', link: '/section3/part3/' },

					],
					//autogenerate: { directory: 'section3' },
				},
				{
					label: 'Glossary',
					link: '/glossary'
				},
				{
					label: 'HPC Cheat Sheet',
					link: '/hpc_cheatsheet'
				},
				{
					label: 'CFD Codes',
					link: '/cfd_codes'
				},
				{
					label: 'Style Outline',
					link: '/styleoutline'
				},
				{
					label: 'Contact Us',
					link: '/contact'
				},
			],
		}),
	],
});
