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
			customCss: ['./src/mathjax.css', './src/components/CustomAside.css', './src/components/DetailsStyle.css'],
			// logo: {
			// 	src: './src/assets/mpilab.png',
			//  // OR, to have light and dark logo variants:
			//  light: '...',
			//  dark: '...',
			//  replacesTitle: true,
			// },
			favicon: './src/assets/favicon.png',
			social: {
				github: 'https://github.com/withastro/starlight',
			},
			tableOfContents: {
				minHeadingLevel: 2,
				maxHeadingLevel: 3,
			},
			sidebar: [
				{
					label: 'Section 1',
					items: [
						{ label: '1.0 Introduction', link: '/section1/outline/' },
						{ label: '1.1 Sneak Peak', link: '/section1/part1/' },
						{ label: '1.2 HPC Navigation', link: '/section1/part2/' },
						{ label: '1.3 Allocating Resources', link: '/section1/part3/' },
						{ label: '1.4 Parallel Computing', link: '/section1/part4/' },
						{ label: '1.5 Real-Life Example', link: '/section1/part5/' },
					],
					//autogenerate: { directory: 'section1' },
				},
				{
					label: 'Section 2',
					items: [
						{ label: '2.0 Introduction', link: '/section2/outline/' },
						{ label: '2.1 Define CFD workflow', link: '/section2/part1/' },
						{ label: '2.2 Plan the simulations', link: '/section2/part2/' },
						{ label: '2.3 Estimate HPC requirements', link: '/section2/part3/' },
						{ label: '2.4 Pre-processing', link: '/section2/part4/' },
						{ label: '2.5 Optimizing HPC', link: '/section2/part5/' },
						{ label: '2.6 Running simulations on HPC', link: '/section2/part6/' },
						{ label: '2.7 A posteriori analysis', link: '/section2/part7/' },
						{ label: '2.8 Visualization', link: '/section2/part8/' },
					],
					//autogenerate: { directory: 'section2' },
				},
				{
					label: 'Section 3',
					items: [
						{ label: '3.0 Introduction', link: '/section3/outline/' },
					],
					//autogenerate: { directory: 'section3' },
				},
				{
					label: 'HPC Cheat Sheet',
					link: '/hpc_cheatsheet'
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
