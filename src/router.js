import Vue from 'vue'
import Router from 'vue-router'
import teste from './components/router/teste.vue'
Vue.use(Router)

export default new Router({
    routes: [
        {
            path:'/teste',
            name: 'teste',
            component: teste

        }
    ]
})