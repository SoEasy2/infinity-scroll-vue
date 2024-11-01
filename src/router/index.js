import { createRouter, createWebHistory } from 'vue-router'

import { BASE_ROUTES } from '@/router/config/baseRoutes'

function setTitle({ meta = {} }) {
	const { title = 'Main' } = meta

	document.title = title
}

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: BASE_ROUTES,
})

router.beforeEach(async (to, _, next) => {
	setTitle(to)

	return next()
})

export default router
