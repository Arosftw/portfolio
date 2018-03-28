import Vue from 'vue'
import Router from 'vue-router'
import AboutMe from '@/components/AboutMe'
import Portfolio from '@/components/Portfolio'

Vue.use(Router)

export default new Router({
	mode: 'history',
	routes: [{
			path: '/AboutMe',
			name: 'AboutMe',
			component: AboutMe
		},
		{
			path: '/portfolio',
			name: 'Portfolio',
			component: Portfolio
		}
	]
})
