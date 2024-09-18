import { defineStore } from 'pinia'
import { dashboardData, usersData, priorityData } from '@/data'
import { useStorage } from '@vueuse/core'
import { deepCopyObj } from '@/helpers'

import type { IColumn } from '@/types'

// @ts-ignore
import { v4 as uuidv4 } from 'uuid'

export const useDashboardStore = defineStore('dashboard', () => {
	const dashboard = useStorage<IColumn[]>('dashboard', dashboardData)
	const users = useStorage<string[]>('users', usersData)
	const priority = useStorage<string[]>('priority', priorityData)

	// functionality for working with columns

	const getTask = computed(() => {
		return (id: string) => {
			let tempTask = null
			dashboard.value.forEach((column) => {
				const task = column.tasks.find((task) => task.id === id)

				if (task) tempTask = task
			})
			return tempTask
		}
	})

	const addColumn = (status: string) => {
		dashboard.value.push({ status, tasks: [], id: uuidv4() })
	}

	const deleteColumn = (index: number) => dashboard.value.splice(index, 1)

	const duplicateColumn = (index: number) => {
		const cloneArr = deepCopyObj(dashboard.value[index])
		dashboard.value.splice(index, 0, cloneArr)
	}

	const moveColumn = ({
		fromColumnIndex,
		toColumnIndex,
	}: {
		fromColumnIndex: number
		toColumnIndex: number
	}) => {
		const column = dashboard.value.splice(fromColumnIndex, 1)[0]

		dashboard.value.splice(toColumnIndex, 0, column)
	}

	// functionality for working with tasks

	const addTask = (title: string, index: number) => {
		dashboard.value[index].tasks.push({
			id: uuidv4(),
			title: title,
			description: '',
			member: '',
			responsible: '',
			priority: 'low',
		})
	}

	const deleteTask = (id: string) => {
		dashboard.value.map((column) => {
			const taskIndex = column.tasks.findIndex((task) => task.id === id)

			if (taskIndex !== -1) {
				column.tasks.splice(taskIndex, 1)
				return
			}
		})
	}

	const moveTask = ({
		fromTaskIndex,
		toTaskIndex,
		fromColumnIndex,
		toColumnIndex,
	}: {
		fromTaskIndex: number
		toTaskIndex: number
		fromColumnIndex: number
		toColumnIndex: number
	}) => {
		const task = dashboard.value[fromColumnIndex].tasks.splice(fromTaskIndex, 1)[0]

		dashboard.value[toColumnIndex].tasks.splice(toTaskIndex, 0, task)
	}

	// functionality for working with users

	const addUser = (name: string) => {
		const isUser = users.value.includes(name)
		if (!isUser) users.value.push(name)
	}

	return {
		dashboard,
		getTask,
		addColumn,
		deleteColumn,
		duplicateColumn,
		moveColumn,
		addTask,
		deleteTask,
		moveTask,
		users,
		priority,
		addUser,
	}
})
