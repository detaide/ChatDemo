<!--
 * @Author: hyman
 * @Date: 2023-06-02 13:19:34
 * @LastEditors: Dalas
 * @LastEditTime: 2023-06-02 15:20:13
 * @Description: 请填写简介
-->
<script setup lang="ts">
import { NLayoutSider, NH2, NScrollbar, NButton } from "naive-ui";
import layoutHeader from "./Layout-Header.vue";
import List from "./List.vue";


</script>

<template>
    <NLayoutSider
        :collapsed-width="0"
        :width="300"
        collapse-mode="transform"
        position="absolute"
        bordered
    >
        <div class="sider">
            <div class="sider-header">
                <NButton class="sider-button">
                    NButton
                </NButton>
            </div>
            <List style="height:80%;padding: 20px 0 0 30px;"/>
        </div>
    
    </NLayoutSider>
    
</template>

<style scoped lang="less">

@import url("@CSS/global.less");

.sider{
    height: 100%;
}


</style>