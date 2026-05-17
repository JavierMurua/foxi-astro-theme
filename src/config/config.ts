// Config
// ------------
// Description: The configuration file for the website.

export interface Logo {
	src: string
	alt: string
}

export type Mode = 'auto' | 'light' | 'dark'

export interface Config {
	siteTitle: string
	siteDescription: string
	ogImage: string
	logo: Logo
	canonical: boolean
	noindex: boolean
	mode: Mode
	scrollAnimations: boolean
}

export const configData: Config = {
	siteTitle: 'Lic. Priscila Giménez | Psicóloga Online',
	siteDescription:
		'Espacio de terapia online para adultos y adolescentes. Acompañamiento psicológico desde un enfoque profesional y empático.',
	ogImage: '/og.jpg',
	logo: {
		src: '/favicon.webp',
		alt: 'Lic. Priscila Giménez'
	},
	canonical: true,
	noindex: false,
	mode: 'auto',
	scrollAnimations: true
}
