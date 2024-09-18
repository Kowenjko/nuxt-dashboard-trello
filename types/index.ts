export interface IColumn {
	id: string
	status: string
	tasks: ITask[]
}

export interface ITask {
	id: string
	title: string
	description: string
	member: string
	responsible: string
	priority: 'low' | 'medium' | 'high' | 'alert'
}
