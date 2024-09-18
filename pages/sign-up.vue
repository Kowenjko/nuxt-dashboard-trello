<script setup lang="ts">
import { SignUp } from 'vue-clerk'

definePageMeta({
	layout: 'auth',
})
</script>

<template>
	<SignUp path="/sign-up" forceRedirectUrl="/dashboard" sign-in-url="/sign-in" />
</template>
