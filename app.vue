<script lang="ts" setup>
useHead({
	titleTemplate: (titleChunk) => {
		return titleChunk ? `Dashboard | ${titleChunk}` : 'Dashboard'
	},
	link: [{ rel: 'icon', type: 'image/png', href: '/images/logo.png' }],
})
</script>

<template>
	<NuxtLayout>
		<NuxtPage />
	</NuxtLayout>
	<Toaster />
</template>
