<script setup lang="ts">
// import HelloWorld from './components/HelloWorld.vue'
import zhCn from 'element-plus/es/locale/lang/zh-cn';
import en from 'element-plus/lib/locale/lang/en'
import { useI18n } from 'vue-i18n'

import {ref} from 'vue' 
import { useRouter } from 'vue-router'

const router = useRouter();
const locale = ref(zhCn);
const { locale: localeLanguage } = useI18n();
const changeLang = (language:any) => {
  locale.value = language;
  localeLanguage.value = language.name;
  console.log(localeLanguage.value);
}
</script>

<template>
  <el-config-provider :locale="locale">
    <div class="app-container">
      <el-button @click="changeLang(zhCn)">中文</el-button>
      <el-button @click="changeLang(en)">英文</el-button>

      <!-- <HelloWorld msg="Vite + Vue" /> -->
      <router-view />
      <el-date-picker/>
    </div>
  </el-config-provider>
</template>

<style lang="scss">
body,html{
  width: 100%;
  height: 100%;
}

body{
  display: flex;
}

#app{
  margin: auto;
}

</style>
