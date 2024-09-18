<script lang="ts" setup>
import { PencilLine, Trash2, Ellipsis } from 'lucide-vue-next'

defineProps<{ title: string }>()

const emit = defineEmits(['editTitle', 'deleteColumn'])

const editTitle = () => emit('editTitle')
const deleteColumn = () => emit('deleteColumn')
</script>

<template>
	<div class="flex gap-1 text-sm">
		<DropdownMenu>
			<DropdownMenuTrigger as-child>
				<Button size="icon" variant="outline">
					<Ellipsis :size="16" />
				</Button>
			</DropdownMenuTrigger>
			<DropdownMenuContent class="max-w-56 flex flex-col gap-2 py-2 text-sm">
				<DropdownMenuItem
					class="flex items-center px-2 py-1 gap-2 bg-white hover:bg-gray-100 transition-all rounded"
				>
					<PencilLine color="green" :size="12" />
					<button @click="editTitle">Edit {{ title }}</button>
				</DropdownMenuItem>
				<DropdownMenuItem
					class="flex items-center px-2 py-1 gap-2 bg-white hover:bg-gray-100 transition-all rounded"
				>
					<Trash2 color="red" :size="12" />
					<button @click="deleteColumn">Delete {{ title }}</button>
				</DropdownMenuItem>
			</DropdownMenuContent>
		</DropdownMenu>
	</div>
</template>
