<script lang="ts" setup>
import { Plus } from 'lucide-vue-next'

defineProps<{ placeholder?: string }>()
const emit = defineEmits<{ create: [] }>()

const model = defineModel()
</script>

<template>
	<div class="bg-white relative max-w-sm items-center text-sm">
		<Input
			class="pl-7 w-full text-md border rounded-md"
			:placeholder="placeholder"
			v-model="model"
			@keyup.enter="emit('create')"
		/>
		<span class="absolute start-0 inset-y-0 flex items-center justify-center px-2">
			<Plus class="text-muted-foreground" :size="16" />
		</span>
	</div>
</template>
