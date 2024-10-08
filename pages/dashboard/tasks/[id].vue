<script lang="ts" setup>
import { Trash2, UserCog, CircleUserRound, X } from 'lucide-vue-next'
import { useDashboardStore } from '@/store/dashboardStore'
import { useToast } from '@/components/ui/toast/use-toast'
import type { ITask } from '@/types'

const route = useRoute()
const router = useRouter()

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

const close = () => router.push('/dashboard/')

useHead({
	title: task.value.title,
	meta: [{ name: 'description', content: task.value.description }],
})
</script>

<template>
	<div class="max-w-xl bg-gray-200 m-32 mx-auto py-4 rounded-lg px-4 relative">
		<Button @click="close" class="absolute right-4" size="icon" variant="outline"
			><X :size="16"
		/></Button>
		<form v-if="task" class="flex flex-col flex-grow items-start justify-between gap-2">
			<div class="flex justify-between w-full">
				<h3 class="pb-4">
					Edit task <span class="font-bold">{{ task.title }}</span>
				</h3>
			</div>
			<div class="grid w-full items-center gap-1.5">
				<Label class="text-gray-600" for="title">Title</Label>
				<Input id="title" v-model="task.title" />
			</div>
			<div class="grid w-full items-center gap-1.5">
				<Label class="text-gray-600" for="description">Description</Label>
				<!-- <Textarea class="rounded" id="description" v-model="task.description" /> -->
				<ClientOnly>
					<QuillEditor
						v-model:content="task.description"
						theme="snow"
						toolbar="minimal"
						content-type="text"
					/>
				</ClientOnly>
			</div>
			<div class="w-full flex gap-2">
				<div class="flex-1">
					<Label class="text-gray-600 flex items-center gap-1 pb-2">
						<UserCog :size="16" /> Responsible</Label
					>

					<DefaultSelect
						:options="dashboardStore.users"
						v-model="task.responsible"
						placeholder="Select a responsible"
					/>
				</div>
				<div class="flex-1">
					<Label class="text-gray-600 flex items-center gap-1 pb-2"
						><CircleUserRound :size="16" /> Member</Label
					>

					<DefaultSelect
						:options="dashboardStore.users"
						v-model="task.member"
						placeholder="Select a member"
					/>
				</div>
			</div>
			<div class="flex justify-between w-full items-end">
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
				<Button @click="deleteTask" type="button" variant="outline" size="icon">
					<Trash2 color="red" :size="14" />
				</Button>
			</div>
		</form>
		<div v-else>
			<p>Task not found.</p>
		</div>
	</div>
</template>
<style>
.ql-container {
	@apply h-32 rounded-b-lg shadow bg-white;
}
.ql-toolbar {
	@apply rounded-t-lg bg-white;
}
</style>
