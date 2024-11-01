import { defineStore } from 'pinia'

import { getAllUsers } from '@/api/users-routes'

export const useUsersStore = defineStore('usersStore', {
	state: () => ({
		loading: false,

		items: [],

		page: 1,
		perPage: 20,
	}),

	actions: {
		/**
		 * Loads users from the API.
		 *
		 * @async
		 * @returns {Promise<void>} A promise that resolves when the users are loaded.
		 * @throws {Error} If the loading process fails.
		 */
		async goToLoadUsers() {
			if (this.loading) {
				return
			}

			this.loading = true

			const params = {
				results: this.perPage,
				page: this.page,
			}

			const { info, results } = await getAllUsers(params)

			this.page = info.page + 1
			this.perPage = info.results

			this.items.push(...results)

			this.loading = false
		},
	},
})
