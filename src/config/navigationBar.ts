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
	device: string
}

export interface NavData {
	logo: Logo
	navItems: NavItem[]
	navActions: NavAction[]
}

export const navigationBarData: NavData = {
	logo: {
		src: '/logo.webp',
		alt: 'The tailwind astro theme',
		text: 'Priscila Giménez.'
	},
	navItems: [
		{ name: 'Inicio', link: '/#intro' },
		{ name: 'Servicios', link: '/#features' },
		{ name: 'Sobre mí', link: '/#highlight-0' },
		{ name: 'Preguntas frecuentes', link: '/#FAQ' },
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
		{ name: 'Contacto', link: '/#contacto' }
	],
	navActions: [
		{ 
		  name: 'Agendar', 
		  link: 'https://wa.me/543525419343?text=Hola, quiero agendar una sesión contigo. ¿Qué disponibilidad tienes?', 
		  style: 'primary', 
		  size: 'lg', 
		  device: 'mobile' 
		},
		{ 
		  name: 'Agendar', 
		  link: 'https://web.whatsapp.com/send?phone=543525419343&text=Hola 👋 Me gustaría agendar una consulta contigo. ¿Cómo podemos coordinar?', 
		  style: 'primary', 
		  size: 'lg', 
		  device: 'desktop' 
		}
	  ]
}
