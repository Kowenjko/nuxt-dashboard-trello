<script setup lang="ts">
const error = useError()

const handleError = () => {
	clearError({
		redirect: '/',
	})
}
</script>

<template>
	<NuxtLayout>
		<div class="h-full w-full flex flex-col gap-4 items-center justify-center">
			<h1 class="text-3xl font-bold">Oops!!!</h1>
			<p>
				<strong>{{ error?.message }}</strong>
			</p>
			<Button @click="handleError">Go to home</Button>
		</div>
	</NuxtLayout>
</template>
