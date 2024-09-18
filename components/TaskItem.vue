<script lang="ts" setup>
import { TriangleAlert, ChartNoAxesColumnDecreasing, CircleUserRound } from 'lucide-vue-next'
import { useDashboardStore } from '@/store/dashboardStore'
import type { ITask } from '@/types'

interface IProps {
	task: ITask
	columnIndex: number
	taskIndex: number
}

defineProps<IProps>()
</script>

<template>
	<li class="flex flex-col gap-2">
		<Card class="bg-slate-50 cursor-pointer border hover:border-black">
			<CardContent class="p-2 text-sm flex flex-col gap-2">
				<div class="flex justify-between">
					<h4 class="font-bold">{{ task.title }}</h4>
					<p v-if="task.member" class="text-xs flex gap-1">
						<CircleUserRound :size="16" /> {{ task.member }}
					</p>
				</div>
				<p class="text-xs pt-1">{{ task.description }}</p>

				<TriangleAlert v-if="task.priority === 'alert'" color="orange" :size="16" />
				<div class="flex items-center gap-3 text-xs" v-else>
					<ChartNoAxesColumnDecreasing :size="16" />
					<span class="text-gray-400">{{ task.priority }}</span>
				</div>
			</CardContent>
		</Card>
	</li>
</template>
