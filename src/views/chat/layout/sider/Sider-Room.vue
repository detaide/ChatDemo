<!--
 * @Author: hyman
 * @Date: 2023-06-02 14:51:12
 * @LastEditors: Dalas
 * @LastEditTime: 2023-06-02 15:29:12
 * @Description: 请填写简介
-->


<script setup lang="ts">
import {NH2, NIcon} from "naive-ui"

interface Props{
    title: string
}

const props = defineProps<Props>()

</script>

<template>
  <div class="sider-room-container">
    <n-icon>
        <game-controller-outline />
    </n-icon>
  </div>
</template>

<style scoped lang="less">

.sider-room-container{
    height: 60px;
    width: 80%;
}

</style>