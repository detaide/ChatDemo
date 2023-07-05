/*
 * @Author: hyman
 * @Date: 2023-05-29 20:19:07
 * @LastEditors: Dalas
 * @LastEditTime: 2023-05-29 21:25:56
 * @Description: 请填写简介
 */
import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import {setupRouter} from './router'

async function bootstrap(){
    const app = createApp(App)

    await setupRouter(app)

    app.mount('#app')
}

bootstrap()

