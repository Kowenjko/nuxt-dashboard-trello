<script lang="ts" setup>
import { UserButton, useUser } from 'vue-clerk'
import { useDashboardStore } from '@/store/dashboardStore'

const { isSignedIn, user } = useUser()
const dashboardStore = useDashboardStore()

const goToSignIn = () => navigateTo('/sign-in')

watch(user, (value) => {
	if (value?.firstName) dashboardStore.addUser(value.firstName)
})
</script>

<template>
	<header class="border-b">
		<div class="container mx-auto flex items-center justify-between h-12">
			<nuxt-link to="/" class="flex items-center gap-2">
				<NuxtImg width="24" height="24" src="/images/logo.png" />
				<span class="font-bold">Dashboard</span>
			</nuxt-link>
			<div class="">
				<UserButton v-if="isSignedIn" after-sign-out-url="/" />
				<Button v-else @click="goToSignIn" size="xs" class="text-xs" variant="outline"
					>SignIn</Button
				>
			</div>
		</div>
	</header>
</template>
