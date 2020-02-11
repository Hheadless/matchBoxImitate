const Gate = () => import('views/gate/Gate')
const Message = () => import('views/message/Message')
const Official = () => import('views/official/Official')
const Personal = () => import('views/personal/Personal')
const Talk = () => import('views/talk/Talk')

export default [
	{
		path: '/',
		component: Gate
	},
	{
		path: '/message',
		component: Message
	},
	{
		path: '/official',
		component: Official
	},
	{
		path: '/personal',
		component: Personal
	},
	{
		path: '/talk',
		component: Talk
	}
]
