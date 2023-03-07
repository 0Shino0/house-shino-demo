<script setup lang="ts">

import { h, getCurrentInstance } from 'vue'
import { useI18n } from 'vue-i18n';
import indexedDB from '@/utils/indexedDB'

const { t } = useI18n();

const { proxy }:any = getCurrentInstance(); // 获取上下文
proxy.$message({
    message: h('p', null, [
      h('span', null, 'Message can be '),
      h('i', { style: 'color: teal' }, 'VNode'),
    ]),
  })
const airbnbDB = new indexedDB('airbnb')
</script>

<template>
  <div>
    <button >{{t('message.home')}}</button> 
    <el-button to="/mine">{{t('message.mine')}}</el-button>
  </div>
</template>

<style lang="scss">
@import '@/assets/scss/home/index.scss';

  button{
    font-size: 16px;
  }
</style>
