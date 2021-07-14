<template>
  <!-- <img src="../assets/logo.png" width="36" alt="logo" /> -->
  <div class="root">
    <span class="test" @click="changeColor"> Vue GoldenLayout</span>
  </div>
</template>

<script lang="ts" setup>
import { defineComponent, reactive } from "vue";
import { style } from "../styles/vlogo";
const css = reactive({ ...style });
const changeColor = () => (css.color = "yellow");
</script>

<style>
.test {
  font-size: v-bind("css.fontSize");
}
</style>
