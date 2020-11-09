import {createRouter, createWebHistory} from 'vue-router';
import Login from './pages/Login';
import Letter from './pages/Letter'
import Present from './pages/Present'
const routes = [
    {path: '/', component:Login},
    {path:'/letter',component:Letter},
    {path: '/present', component:Present}
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router;