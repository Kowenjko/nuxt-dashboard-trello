<script setup lang="ts">
import { SignIn } from 'vue-clerk'

useHead({
	title: 'sign-in',
	meta: [{ name: 'description', content: 'Test dashboard' }],
})

definePageMeta({ layout: 'auth' })
</script>

<template>
	<SignIn path="/sign-in" forceRedirectUrl="/dashboard" signUpUrl="/sign-up" />
</template>
