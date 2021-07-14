<template>
  <n-layout style="height: calc(100vh)">
    <n-layout-header style="height: 64px; padding: 12px 24px" bordered>
      <div class="v-header"><v-logo /></div>
    </n-layout-header>
    <n-layout position="absolute" style="top: 64px" has-sider>
      <n-layout-sider
        content-style="padding: 12px;"
        :native-scrollbar="false"
        bordered
      >
        <slot></slot>
      </n-layout-sider>
      <n-layout content-style="padding: 24px;" :native-scrollbar="false">
        <router-view></router-view>
      </n-layout>
    </n-layout>
  </n-layout>
</template>

<script>
import { defineComponent } from "vue";
import VLogo from "./VLogo.vue";
import {
  NButton,
  NLayout,
  NLayoutHeader,
  NLayoutSider,
  NLayoutFooter,
  NH2,
} from "naive-ui";

export default defineComponent({
  components: {
    VLogo,
    NButton,
    NLayout,
    NLayoutHeader,
    NLayoutSider,
    NLayoutFooter,
    NH2,
  },
  setup() {},
});
</script>
