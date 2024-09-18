<script lang="ts" setup>
import type { IColumn } from '@/types'

interface IProps {
	column: IColumn
	columnIndex: number
}

defineProps<IProps>()

const isEditStatus = ref(false)
const router = useRouter()

const {
	startMoveColumn,
	dropItem,
	startMoveTask,
	deleteColumn,
	duplicateColumn,
	addTask,
	nameTask,
} = useDragDashboard()

const goToTask = (id: string) => router.push(`/dashboard/tasks/${id}`)
</script>

<template>
	<div
		class="flex flex-col p-3 rounded w-[280px] border bg-white"
		draggable="true"
		@dragstart.self="startMoveColumn($event, columnIndex)"
		@dragenter.prevent
		@dragover.prevent
		@drop.stop="dropItem($event, { toColumnIndex: columnIndex })"
	>
		<div class="flex items-center justify-between gap-2 font-bold mb-4">
			<HeaderColumn v-model:title="column.status" v-model="isEditStatus" />
			<MenuColumn
				:title="column.status"
				@editTitle="isEditStatus = !isEditStatus"
				@deleteColumn="deleteColumn(columnIndex)"
			/>
		</div>
		<ul class="flex flex-col gap-2">
			<TaskItem
				v-for="(task, taskIndex) in column.tasks"
				:key="task.id"
				:task="task"
				@click="goToTask(task.id)"
				:columnIndex="columnIndex"
				:taskIndex="taskIndex"
				draggable="true"
				@dragstart="
					startMoveTask($event, {
						fromColumnIndex: columnIndex,
						fromTaskIndex: taskIndex,
					})
				"
				@drop.stop="
					dropItem($event, {
						toColumnIndex: columnIndex,
						toTaskIndex: taskIndex,
					})
				"
			/>
		</ul>

		<FooterColumn
			v-model="nameTask"
			@duplicate="duplicateColumn(columnIndex)"
			@addTask="addTask(columnIndex)"
		/>
	</div>
</template>
