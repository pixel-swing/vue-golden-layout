<template>
  <global-layout>
    <v-sider></v-sider>
  </global-layout>
  <!-- <golden-layout /> -->
</template>

<script lang="ts">
import { defineComponent } from "vue";
import GlobalLayout from "./components/GlobalLayout.vue";
import GoldenLayout from "./components/GoldenLayout.vue";
import VSider from "./views/sider/VSider.vue";
export default defineComponent({
  name: "App",
  components: {
    GlobalLayout,
    GoldenLayout,
    VSider,
  },
});
</script>

<style></style>
