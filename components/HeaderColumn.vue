<script lang="ts" setup>
import { onClickOutside } from '@vueuse/core'

const title = defineModel('title')
const isEditStatus = defineModel()

const inputEdit = useTemplateRef<HTMLInputElement>('inputEditRef')

onClickOutside(inputEdit, () => (isEditStatus.value = false))
</script>

<template>
	<div class="text-sm">
		<Input
			ref="inputEditRef"
			v-if="isEditStatus"
			class="w-full text-md border rounded-md font-normal"
			v-model="title"
			@keyup.enter="isEditStatus = false"
		/>
		<button @click="isEditStatus = true" v-else>{{ title }}</button>
	</div>
</template>
