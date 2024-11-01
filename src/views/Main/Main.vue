<template>
	<DefaultLayout>
		<h1 class="text-center text-2xl font-bold mb-5">
			Infinity users scroll
		</h1>

		<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
			<UserCard
				v-for="user in items"
				:key="user.login.uuid"
				:user="user"
			/>
		</div>

		<div v-if="loading" class="flex justify-center items-center mt-5">
			<div class="loader"></div>
		</div>
	</DefaultLayout>
</template>
<script setup>
import { computed, onMounted, onUnmounted } from 'vue'

import DefaultLayout from '@/layouts/DefaultLayout.vue'
import UserCard from '@/components/UserCard.vue'

import { useUsersStore } from '@/store/usersStore'

import { useInfinityScrollHook } from '@/common/hooks/infinityScrollHook'

const usersStore = useUsersStore()

const loading = computed(() => usersStore.loading)
const items = computed(() => usersStore.items)

useInfinityScrollHook(usersStore.goToLoadUsers)

onMounted(() => {
	usersStore.goToLoadUsers()
})

onUnmounted(() => {
	usersStore.$reset()
})
</script>
