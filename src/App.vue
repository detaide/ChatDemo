<!--
 * @Author: hyman
 * @Date: 2023-05-29 20:19:07
 * @LastEditors: Dalas
 * @LastEditTime: 2023-05-29 23:07:30
 * @Description: 请填写简介
-->
<script setup lang="ts">
import {NConfigProvider} from 'naive-ui'
import { NaiveProvier } from '@components/common'


</script>

<template>
  <div>
    <NConfigProvider
    >
      <NaiveProvier>
        <RouterView/>
      </NaiveProvier>
    </NConfigProvider>
  </div>
</template>

<style scoped>



</style>
