<script lang="ts" setup>
import { useDashboardStore } from '@/store/dashboardStore'

const dashboardStore = useDashboardStore()
const newColumnTitle = ref('')

const route = useRoute()
const router = useRouter()

const isModalOpen = computed(() => route.name === 'dashboard-tasks-id')
const closeModal = () => router.push('/dashboard/')

const addColumn = () => {
	dashboardStore.addColumn(newColumnTitle.value)
	newColumnTitle.value = ''
}

definePageMeta({
	middleware: 'auth',
	auth: {
		guestRedirectUrl: '/sign-in',
	},
})
</script>

<template>
	<section class="flex items-start gap-4">
		<DashboardItem
			v-for="(column, columnIndex) in dashboardStore.dashboard"
			:key="column.id"
			:column="column"
			:columnIndex="columnIndex"
		/>
		<CreateInput placeholder="Add a column" v-model="newColumnTitle" @create="addColumn" />
		<div v-show="isModalOpen" class="absolute inset-0 bg-slate-950/75" @click.self="closeModal">
			<NuxtPage :key="route.fullPath" />
		</div>
	</section>
</template>
