// Footer Navigation
// ------------
// Description: The footer navigation data for the website.
export interface Logo {
	src: string
	alt: string
	text: string
}

export interface FooterAbout {
	title: string
	aboutText: string
	logo: Logo
}

export interface SubCategory {
	subCategory: string
	subCategoryLink: string
}

export interface FooterColumn {
	category: string
	subCategories: SubCategory[]
}

export interface SubFooter {
	copywriteText: string
}

export interface FooterData {
	footerAbout: FooterAbout
	footerColumns: FooterColumn[]
	subFooter: SubFooter
}

export const footerNavigationData: FooterData = {
	footerAbout: {
		title: 'Priscila Giménez',
		aboutText:
			'Expertly made, responsive, accessible components in React and HTML ready to be used on your website or app. Just copy and paste them on your Tailwind CSS project.',
		logo: {
			src: '/logo.svg',
			alt: 'The tailwind astro theme',
			text: 'Priscila Giménez'
		}
	},
	footerColumns: [
		{
			category: 'Enlaces',
			subCategories: [
				{
					subCategory: 'Inicio',
					subCategoryLink: '/foxi-astro-theme/#intro'
				},
				{
					subCategory: 'Servicios',
					subCategoryLink: '/foxi-astro-theme/#features'
				},
				{
					subCategory: 'Sobre mí',
					subCategoryLink: '/foxi-astro-theme/#highlight-0'
				},
				// {
				// 	subCategory: 'Changelog',
				// 	subCategoryLink: '/changelog'
				// },
				{
					subCategory: 'Contacto',
					subCategoryLink: '/foxi-astro-theme/#contacto'
				}
			]
		},
		// {
		// 	category: 'About us',
		// 	subCategories: [
		// 		{
		// 			subCategory: 'About us',
		// 			subCategoryLink: '/'
		// 		},
		// 		{
		// 			subCategory: 'News',
		// 			subCategoryLink: '/blog'
		// 		},
		// 		{
		// 			subCategory: 'Careers',
		// 			subCategoryLink: '/blog'
		// 		}
		// 	]
		// },
		// {
		// 	category: 'Get in touch',
		// 	subCategories: [
		// 		{
		// 			subCategory: 'Contact',
		// 			subCategoryLink: '/contact'
		// 		},
		// 		{
		// 			subCategory: 'Support',
		// 			subCategoryLink: '/contact'
		// 		},
		// 		{
		// 			subCategory: 'Join us',
		// 			subCategoryLink: '/contact'
		// 		}
		// 	]
		// }
	],
	subFooter: {
		copywriteText: 'Potenciado por Murúa Dev'
	}
}
