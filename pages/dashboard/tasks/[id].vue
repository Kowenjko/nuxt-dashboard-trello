<script lang="ts" setup>
import { Trash2 } from 'lucide-vue-next'
import { useDashboardStore } from '@/store/dashboardStore'
import { useToast } from '@/components/ui/toast/use-toast'
import type { ITask } from '@/types'

const route = useRoute()

const { toast } = useToast()
const dashboardStore = useDashboardStore()
// @ts-ignore
const task = computed<ITask>(() => dashboardStore.getTask(route.params.id))

const deleteTask = () => {
	toast({
		title: 'delete',
		description: `task ${task.value.title}`,
	})
	// @ts-ignore
	dashboardStore.deleteTask(route.params.id!)
	navigateTo('/dashboard')
}
</script>

<template>
	<div class="max-w-xl bg-gray-200 m-32 mx-auto py-4 rounded-lg px-4">
		<form v-if="task" class="flex flex-col flex-grow items-start justify-between gap-2">
			<div class="flex justify-between w-full">
				<h3 class="pb-4">
					Edit task <span class="font-bold">{{ task.title }}</span>
				</h3>
				<Button @click="deleteTask" type="button" variant="outline" size="icon">
					<Trash2 color="red" :size="12" />
				</Button>
			</div>
			<div class="grid w-full items-center gap-1.5">
				<Label class="text-gray-600" for="title">Title</Label>
				<Input id="title" v-model="task.title" />
			</div>
			<div class="grid w-full items-center gap-1.5">
				<Label class="text-gray-600" for="description">Description</Label>
				<Textarea class="rounded" id="description" v-model="task.description" />
			</div>
			<div class="w-full flex gap-2">
				<div class="flex-1">
					<Label class="text-gray-600 block pb-2">Responsible</Label>
					<Select v-model="task.responsible">
						<SelectTrigger class="w-full">
							<SelectValue placeholder="Select a responsible" />
						</SelectTrigger>
						<SelectContent>
							<SelectGroup>
								<SelectItem :value="user" v-for="user in dashboardStore.users" :key="user">
									{{ user }}
								</SelectItem>
							</SelectGroup>
						</SelectContent>
					</Select>
				</div>
				<div class="flex-1">
					<Label class="text-gray-600 block pb-2">Member</Label>
					<Select v-model="task.member">
						<SelectTrigger class="w-full">
							<SelectValue placeholder="Select a responsible" />
						</SelectTrigger>
						<SelectContent>
							<SelectGroup>
								<SelectItem :value="user" v-for="user in dashboardStore.users" :key="user">
									{{ user }}
								</SelectItem>
							</SelectGroup>
						</SelectContent>
					</Select>
				</div>
			</div>
			<div>
				<Label class="text-gray-600 block pb-2">Priority</Label>
				<RadioGroup :default-value="task.priority" v-model="task.priority" class="flex">
					<div
						class="flex items-center space-x-2"
						v-for="item in dashboardStore.priority"
						:key="item"
					>
						<RadioGroupItem :id="item" :value="item" />
						<Label :for="item">{{ item }}</Label>
					</div>
				</RadioGroup>
			</div>
		</form>
		<div v-else>
			<p>Task not found.</p>
		</div>
	</div>
</template>
