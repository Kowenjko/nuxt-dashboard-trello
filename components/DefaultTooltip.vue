<script lang="ts" setup>
defineProps<{ text: string }>()
</script>

<template>
	<TooltipProvider>
		<Tooltip>
			<TooltipTrigger as-child><slot /></TooltipTrigger>
			<TooltipContent>
				<p>{{ text }}</p>
			</TooltipContent>
		</Tooltip>
	</TooltipProvider>
</template>
