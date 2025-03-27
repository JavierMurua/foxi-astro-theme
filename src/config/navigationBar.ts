// Navigation Bar
// ------------
// Description: The navigation bar data for the website.
export interface Logo {
	src: string
	alt: string
	text: string
}

export interface NavSubItem {
	name: string
	link: string
}

export interface NavItem {
	name: string
	link: string
	submenu?: NavSubItem[]
}

export interface NavAction {
	name: string
	link: string
	style: string
	size: string
}

export interface NavData {
	logo: Logo
	navItems: NavItem[]
	navActions: NavAction[]
}

export const navigationBarData: NavData = {
	logo: {
		src: '/foxi-astro-theme/logo.svg',
		alt: 'The tailwind astro theme',
		text: 'Priscila Giménez.'
	},
	navItems: [
		{ name: 'Inicio', link: '/foxi-astro-theme/#intro' },
		{ name: 'Servicios', link: '/foxi-astro-theme/#features' },
		{ name: 'Sobre mí', link: '/foxi-astro-theme/#highlight-0' },
		// {
		// 	name: 'Resources',
		// 	link: '#',
		// 	submenu: [
		// 		{ name: 'Blog', link: '/blog' },
		// 		{ name: 'Changelog', link: '/changelog' },
		// 		{ name: 'FAQ', link: '/faq' },
		// 		{ name: 'Terms', link: '/terms' }
		// 	]
		// },
		{ name: 'Contacto', link: '/foxi-astro-theme/#contacto' }
	],
	navActions: [{ name: 'Try it now', link: '/foxi-astro-theme/#', style: 'primary', size: 'lg' }]
}
