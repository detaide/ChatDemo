<!--
 * @Author: hyman
 * @Date: 2023-05-29 20:54:03
 * @LastEditors: Dalas
 * @LastEditTime: 2023-05-29 22:56:03
 * @Description: 请填写简介
-->
<template>
  <div>
    <button @click="show">123321</button>
  </div>
</template>

<script setup lang="ts">

const show = () =>{
  window.$dialog?.warning(
    {
      content: '你确定？',
      title: '警告',
      positiveText: '确定',
      negativeText: '不确定',
          
    }

  )
}


</script>

<style>

</style>
