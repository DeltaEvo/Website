import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import About from './views/About.vue'
import store from './store.js'

Vue.use(Router)

export const routes = [
	{
		path: '/'
	},
	{
		path: '/home',
		name: 'Home',
		component: Home
    },
    {
		path: '/about',
		name: 'About',
		component: About
	}
];

const router = new Router({
	routes
})

router.beforeEach((to, from, next) => {
	if (from.path != to.path) {
		store.commit('NEXT_PAGE', to.name)
		setTimeout(() => {
			store.commit('NEXT_PAGE', undefined)
			next();
		}, 1000);
	}
});

export default router
