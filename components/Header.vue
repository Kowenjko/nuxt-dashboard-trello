<script lang="ts" setup></script>

<template>
	<header class="border-b">
		<div class="container mx-auto flex items-center justify-between h-12">
			<nuxt-link to="/dashboard" class="flex items-center gap-2">
				<NuxtImg width="24" height="24" src="/images/logo.png" />
				<span class="font-bold">Dashboard</span>
			</nuxt-link>
			<div class="">
				<Button size="xs" variant="outline">LogIn</Button>
			</div>
		</div>
	</header>
</template>
