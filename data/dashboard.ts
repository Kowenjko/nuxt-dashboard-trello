import type { IColumn } from '@/types'

export const dashboardData: IColumn[] = [
	{
		id: '1',
		status: 'todo',
		tasks: [
			{
				id: '1-1',
				title: 'Create project',
				description: 'Create project',
				member: 'Mike',
				responsible: 'Karl',
				priority: 'low',
			},
			{
				id: '1-2',
				title: 'Delete object',
				description: 'Delete object',
				member: 'Mike',
				responsible: 'Karl',
				priority: 'medium',
			},
		],
	},
	{
		id: '2',
		status: 'in-progress',
		tasks: [
			{
				id: '2-1',
				title: 'Add css',
				description: 'Add css',
				member: 'Test',
				responsible: 'Karl',
				priority: 'high',
			},
		],
	},
	{
		id: '3',
		status: 'done',
		tasks: [
			{
				id: '3-1',
				title: 'Edit columns',
				description: 'Edit columns',
				member: 'Test',
				responsible: 'Karl',
				priority: 'alert',
			},
			{
				id: '3-2',
				title: 'Change data',
				description: 'Change data',
				member: 'Test',
				responsible: 'Karl',
				priority: 'low',
			},
		],
	},
]
