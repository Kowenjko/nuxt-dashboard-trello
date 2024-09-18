// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	compatibilityDate: '2024-04-03',
	devtools: { enabled: false },
	ssr: false,
	modules: [
		'@nuxtjs/tailwindcss',
		'shadcn-nuxt',
		'@pinia/nuxt',
		'nuxt-typed-router',
		'@nuxt/image',
		'@vueuse/nuxt',
	],
	shadcn: {
		prefix: '',
		componentDir: './components/ui',
	},
})
