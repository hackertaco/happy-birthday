import {createRouter, createWebHistory} from 'vue-router';
import Login from './pages/Login';
import Letter from './pages/Letter'
import Present from './pages/Present'
import Last from './pages/Last'
const routes = [
    {path: '/', component:Login},
    {path:'/letter',component:Letter},
    {path: '/present', component:Present},
    {path: '/last', component:Last}
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router;