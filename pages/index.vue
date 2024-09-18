<script lang="ts" setup>
const goToDashboard = () => navigateTo('/dashboard')
</script>

<template>
	<section class="w-full h-full flex flex-col gap-4 items-center justify-center">
		<h1 class="text-4xl font-bold">Welcome to Dashboard</h1>
		<Button @click="goToDashboard">Get Started</Button>
	</section>
</template>
