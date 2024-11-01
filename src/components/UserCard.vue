<template>
	<div class="w-40 p-4 rounded-lg shadow-lg text-center bg-gray-100">
		<img
			:src="user.picture.large"
			alt="User photo"
			class="w-full rounded-full mb-2"
		/>

		<h2 class="text-lg font-semibold mb-1">
			{{ user.name.first }} {{ user.name.last }}
		</h2>

		<p
			v-tippy="getDefaultTippy(user.email)"
			class="text-gray-600 text-sm truncate cursor-pointer"
			@click="onCopy(item)"
		>
			{{ user.email }}
		</p>
	</div>
</template>

<script setup>
import { useDefaultStore } from '@/store/defaultStore'

import { getDefaultTippy } from '@/common/helpers/tippy-helper'
import { copyInStash } from '@/common/helpers/app-helper'

const props = defineProps({
	user: {
		type: Object,
		default: () => ({}),
	},
})

const defaultStore = useDefaultStore()

function onCopy() {
	copyInStash(props.user.email)

	defaultStore.setInfoMessage({ message: 'Successful copy' })
}
</script>
