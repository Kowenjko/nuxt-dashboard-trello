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
		'vue-clerk/nuxt',
	],
	runtimeConfig: {
		public: {
			clerkPublishableKey: process.env.NUXT_PUBLIC_CLERK_PUBLISHABLE_KEY,
		},
		clerkSecretKey: process.env.NUXT_CLERK_SECRET_KEY,
	},
	shadcn: {
		prefix: '',
		componentDir: './components/ui',
	},
	clerk: {
		appearance: { variables: { colorPrimary: '#570DF8' } },
	},
})
