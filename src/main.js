import { createApp } from 'vue'
import { createPinia } from 'pinia'
import Notifications from '@kyvg/vue3-notification'
import VueTippy from 'vue-tippy'

import router from '@/router'
import App from '@/App.vue'

import '@/assets/styles/tailwind/tailwind.css'

const pinia = createPinia()

const app = createApp(App)

app.use(pinia)

app.use(router)

app.use(Notifications)

app.use(VueTippy, {
	directive: 'tippy', // => v-tippy
	component: 'tippy', // => <tippy/>
	componentSingleton: 'tippy-singleton', // => <tippy-singleton/>,
	defaultProps: {
		placement: 'auto-end',
		allowHTML: true,
		delay: 0,
		arrow: false,
		hideOnClick: false,
		touch: false,
		offset: [0, 12],
		maxWidth: 'none',
	},
})

app.mount('#app')
