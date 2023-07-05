<!--
 * @Author: hyman
 * @Date: 2023-06-02 13:19:53
 * @LastEditors: Dalas
 * @LastEditTime: 2023-06-02 15:21:40
 * @Description: 请填写简介
-->

<script setup lang="ts">
import { NH2, NScrollbar, NSpace } from "naive-ui";
import SiderRoom from "./Sider-Room.vue";

const data1 : Array<string> = []

const data2 : Array<string> = [
    '123',
    '123',
    '123',
    '123',
    '123',
    '123',
    '123',
    '123',
    '123',
    '123',
    '123',
    '123',
    '123',
    '123',
]

var data : Array<string> = data2

</script>

<template>
    <n-scrollbar style="max-height:100%;">
        <div class="main-list">
            <template v-if="!data.length">
                <div>
                    null
                </div>
            </template>
            <template v-else>
                <n-space vertical>
                    <div v-for="(item,index) in data" :key="index">
                        <siderRoom :title="item" class="room-item"/>
                    </div>
                </n-space>
            </template>
        </div>
    </n-scrollbar>
</template>

<style scoped lang="less">

@import url("@CSS/global.less");

.room-item{
    border: 1px solid @gray-4;
    border-radius: 11px;

    &:hover{
        background-color: @gray-2;
    }

    &.active{
        border-color: green;
    }
}



</style>
