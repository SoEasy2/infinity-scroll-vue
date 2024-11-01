import { ROUTES } from '@/common/constants/routes'

const BASE_ROUTES = [
	{
		path: '/',
		name: ROUTES.main,
		meta: { title: 'Users' },
		component: () => import('@/views/Main/Main.vue'),
	},
]

export { BASE_ROUTES }
