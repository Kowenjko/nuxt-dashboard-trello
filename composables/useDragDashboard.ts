import { useDashboardStore } from '@/store/dashboardStore'
import { useToast } from '@/components/ui/toast/use-toast'

export const useDragDashboard = () => {
	const dashboardStore = useDashboardStore()
	const nameTask = ref('')

	const { toast } = useToast()

	const pickupColumn = (event: any, fromColumnIndex: number) => {
		event.dataTransfer.effectAllowed = 'move'
		event.dataTransfer.dropEffect = 'move'
		event.dataTransfer.setData('type', 'column')
		event.dataTransfer.setData('from-column-index', fromColumnIndex)
	}

	const dropItem = (
		event: any,
		{ toColumnIndex, toTaskIndex = 0 }: { toColumnIndex: number; toTaskIndex?: number }
	) => {
		const type = event.dataTransfer.getData('type')
		const fromColumnIndex = event.dataTransfer.getData('from-column-index')

		if (type === 'task') {
			const fromTaskIndex = event.dataTransfer.getData('from-task-index')

			dashboardStore.moveTask({
				fromTaskIndex,
				toTaskIndex,
				fromColumnIndex,
				toColumnIndex,
			})
		} else if (type === 'column') {
			const fromColumnIndex = event.dataTransfer.getData('from-column-index')

			dashboardStore.moveColumn({
				fromColumnIndex,
				toColumnIndex,
			})
		}
	}

	const pickupTask = (
		event: any,
		{ fromColumnIndex, fromTaskIndex }: { fromColumnIndex: number; fromTaskIndex: number }
	) => {
		event.dataTransfer.effectAllowed = 'move'
		event.dataTransfer.dropEffect = 'move'
		event.dataTransfer.setData('type', 'task')
		event.dataTransfer.setData('from-column-index', fromColumnIndex)
		event.dataTransfer.setData('from-task-index', fromTaskIndex)
	}

	const deleteColumn = (index: number) => {
		toast({
			title: 'delete',
			description: `column ${dashboardStore.dashboard[index]?.status} `,
		})
		dashboardStore.deleteColumn(index)
	}

	const duplicateColumn = (index: number) => {
		toast({
			title: 'duplicate',
			description: `column ${dashboardStore.dashboard[index]?.status}`,
		})
		dashboardStore.duplicateColumn(index)
	}

	const addTask = (index: number) => {
		dashboardStore.addTask(nameTask.value, index)

		nameTask.value = ''
	}

	return {
		pickupTask,
		dropItem,
		pickupColumn,
		dashboardStore,
		deleteColumn,
		duplicateColumn,
		addTask,
		nameTask,
	}
}
