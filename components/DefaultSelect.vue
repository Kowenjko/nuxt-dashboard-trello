<script lang="ts" setup>
defineProps<{ options: string[]; placeholder: string }>()

const model = defineModel()
</script>

<template>
	<Select v-model="model">
		<SelectTrigger class="w-full">
			<SelectValue :placeholder="placeholder" />
		</SelectTrigger>
		<SelectContent>
			<SelectGroup>
				<SelectItem :value="option" v-for="option in options" :key="option">
					{{ option }}
				</SelectItem>
			</SelectGroup>
		</SelectContent>
	</Select>
</template>
