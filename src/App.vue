<template>
  <div class="page">
    <div class="main_content">
      <div class="top"></div>
      <div class="main">
        <div class="main__left"></div>
        <div class="main__center">
          <editor />
        </div>
        <div class="main__right"></div>
      </div>
    </div>
    <div class="bottom_conent"></div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

import editor from './components/editor.vue'
</script>

<style scoped>
.page {
  height: calc(100vh);
  min-height: 500px;
  width: 100%;
  min-width: 800px;
  /* background-color: beige; */

  > .main_content {
    width: 100%;
    height: calc(100% - 50px);
    border-bottom: 2px solid #ced4d6;

    > .top {
      width: 100%;
      height: 100px;
      border-bottom: 2px solid #ced4d6;
    }

    > .main {
      display: flex;
      height: calc(100% - 100px);
      width: 100%;

      > .main__left {
        width: 300px;
        height: 100%;
        border-right: 2px solid #ced4d6;
      }

      > .main__center {
        width: calc(100% - 400px);
        height: 100%;
      }

      > .main__right {
        width: 100px;
        height: 100%;
      }
    }
  }

  > .bottom_conent {
    width: 100%;
    height: 50px;
  }
}
</style>
