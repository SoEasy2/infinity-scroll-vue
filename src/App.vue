<template>
	<router-view />

	<notifications
		class="min-md:mr-5 min-md:mt-5 z-110 mt-3 cursor-pointer"
		:max="3"
		width="90%"
		position="top right"
	/>
</template>

<script setup>
import { watch } from 'vue'
import { useNotification } from '@kyvg/vue3-notification'

import { useDefaultStore } from '@/store/defaultStore'

const { notify } = useNotification()
const defaultStore = useDefaultStore()

watch(
	() => defaultStore.message,
	(text) => {
		if (text) {
			notify({
				type: defaultStore.type,
				text,
				duration: defaultStore.duration,
			})
			defaultStore.clearMessage()
		}
	}
)
</script>
