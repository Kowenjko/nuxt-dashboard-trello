<script setup lang="ts">
import { SignIn } from 'vue-clerk'

definePageMeta({ layout: 'auth' })
</script>

<template>
	<SignIn path="/sign-in" forceRedirectUrl="/dashboard" signUpUrl="/sign-up" />
</template>
