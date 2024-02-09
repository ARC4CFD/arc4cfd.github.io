import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

import remarkMath from 'remark-math';
import rehypeMathJax from 'rehype-mathjax';

// https://astro.build/config
export default defineConfig({
	site: 'https://shillcoat.github.io',
	base: '/arc4cfd_wip',
	markdown: {
		remarkPlugins: [remarkMath],
		rehypePlugins: [rehypeMathJax],
	},
	integrations: [
		starlight({
			title: 'ARC4CFD',
			customCss: ['./src/mathjax.css'],
			// logo: {
			// 	src: './src/assets/mpilab.png',
			//  // OR, to have light and dark logo variants:
			//  light: '...',
			//  dark: '...',
			//  replacesTitle: true,
			// },
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
					label: 'Contact Us',
					link: '/contact'
				},
			],
		}),
	],
});
