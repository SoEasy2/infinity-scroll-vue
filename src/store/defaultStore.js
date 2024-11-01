import { defineStore } from 'pinia'

export const useDefaultStore = defineStore('default', {
	state: () => ({
		message: null,
		type: null,
		duration: null,
	}),

	actions: {

		/**
		 * Sets an informational message to be displayed.
		 *
		 * @param {Object} payload - The payload containing message information.
		 * @param {string} payload.message - The message to be displayed. If not provided, the function exits early.
		 * @returns {void}
		 */
		setInfoMessage(payload) {
			if (!payload.message) {
				return
			}

			this.message = payload.message
			this.type = 'info-bg'
			this.duration = 6000
		},

		/**
		 * Clears the informational message and resets related properties.
		 *
		 * @returns {void}
		 */
		clearMessage() {
			this.message = null
			this.type = null
			this.duration = null
		},
	},
})
