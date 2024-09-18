<script lang="ts" setup>
import { CopyPlus } from 'lucide-vue-next'

const emit = defineEmits<{ duplicate: []; addTask: [] }>()

const model = defineModel()

const duplicate = () => emit('duplicate')
const addTask = () => emit('addTask')
</script>

<template>
	<div class="flex items-center mt-2 gap-2">
		<CreateInput placeholder="Add a card" v-model="model" @create="addTask" />
		<DefaultTooltip text="Create template">
			<Button @click="duplicate" class="w-8" size="icon" variant="outline"
				><CopyPlus :size="12"
			/></Button>
		</DefaultTooltip>
	</div>
</template>
