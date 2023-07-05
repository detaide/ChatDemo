/*
 * @Author: hyman
 * @Date: 2023-05-29 20:52:00
 * @LastEditors: Dalas
 * @LastEditTime: 2023-05-29 21:31:29
 * @Description: 请填写简介
 */

import type {App} from 'vue';
import {RouteRecordRaw, createRouter,  createWebHistory} from 'vue-router'


const routes: RouteRecordRaw[] = [
    {
        path:'/',
        name:'Root',
        component: () => import('@/components/AppRoot.vue')
    },
    {
        path:'/demo',
        name:'demo',
        component: () => import('@/demo/AppDemo.vue')
    }
]

//导出router
export const router = createRouter({
    history: createWebHistory(),
    routes,
    scrollBehavior: () => ({left: 0, top: 0}),
})

export async function setupRouter(app : App) {
    app.use(router)
    await router.isReady()
}