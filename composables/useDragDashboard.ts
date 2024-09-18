import { useDashboardStore } from '@/store/dashboardStore'
import { useToast } from '@/components/ui/toast/use-toast'

export const useDragDashboard = () => {
	const dashboardStore = useDashboardStore()
	const nameTask = ref('')

	const { toast } = useToast()

	/**
	 *
	 * @param event
	 * @param fromColumnIndex
	 * start moving the column
	 */

	const startMoveColumn = (event: any, fromColumnIndex: number) => {
		event.dataTransfer.effectAllowed = 'move'
		event.dataTransfer.dropEffect = 'move'
		event.dataTransfer.setData('type', 'column')
		event.dataTransfer.setData('from-column-index', fromColumnIndex)
	}

	/**
	 *
	 * @param event
	 * @param param1
	 * determine where the task or column was moved to
	 */

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

	/**
	 *
	 * @param event
	 * @param param1
	 * start moving the task
	 */

	const startMoveTask = (
		event: any,
		{ fromColumnIndex, fromTaskIndex }: { fromColumnIndex: number; fromTaskIndex: number }
	) => {
		event.dataTransfer.effectAllowed = 'move'
		event.dataTransfer.dropEffect = 'move'
		event.dataTransfer.setData('type', 'task')
		event.dataTransfer.setData('from-column-index', fromColumnIndex)
		event.dataTransfer.setData('from-task-index', fromTaskIndex)
	}

	/**
	 *
	 * @param index
	 * delete column
	 */

	const deleteColumn = (index: number) => {
		toast({
			title: 'delete',
			description: `column ${dashboardStore.dashboard[index]?.status} `,
		})
		dashboardStore.deleteColumn(index)
	}

	/**
	 *
	 * @param index
	 * creating a copy of the column
	 */

	const duplicateColumn = (index: number) => {
		toast({
			title: 'duplicate',
			description: `column ${dashboardStore.dashboard[index]?.status}`,
		})
		dashboardStore.duplicateColumn(index)
	}

	/**
	 *
	 * @param index
	 * adding a task
	 */

	const addTask = (index: number) => {
		dashboardStore.addTask(nameTask.value, index)
		nameTask.value = ''
	}

	return {
		startMoveTask,
		dropItem,
		startMoveColumn,
		dashboardStore,
		deleteColumn,
		duplicateColumn,
		addTask,
		nameTask,
	}
}
