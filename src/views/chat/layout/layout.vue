<!--
 * @Author: hyman
 * @Date: 2023-06-02 12:38:06
 * @LastEditors: Dalas
 * @LastEditTime: 2023-06-02 14:09:41
 * @Description: 请填写简介
-->


<script setup lang="ts">
import {NLayout, NLayoutSider, NLayoutContent, NH2 }  from 'naive-ui'
import Sider from "./sider/index.vue";

const collapsedContent = false

</script>

<template>
    <div class="main-layout">
        <n-layout has-sider class="sub-layout">
            <n-layout-sider
                collapse-mode="transform"
                :collapsed-width="20"
                :width="300"
                show-trigger="arrow-circle"
                content-style="padding: 24px;"
                :show-collapsed-content= collapsedContent
                bordered
            >
                <Sider/>
            </n-layout-sider>
            <n-layout-content content-style="padding: 24px;">
                平山道
            </n-layout-content>
        </n-layout>

        
    </div>
    
</template>

<style scoped>

.main-layout{
    height: 100%;
    width: 100%;
    padding: 20px;
    overflow: hidden;
    border: 2px solid black;
    background-color: #fff;
}

.sub-layout{
    height: 100%;
}

</style>