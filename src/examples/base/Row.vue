<template>
  <golden-layout
    :componentTypes="componentTypes"
    :option="option"
  ></golden-layout>
</template>

<script>
import { reactive, defineComponent } from "vue";
import GoldenLayout from "@/components/GoldenLayout.vue";
import Test from "./Test.vue";
// const Test = defineComponent({ render: () => h("span", "It works!") });
const components = { Test };
export default {
  components: {
    GoldenLayout,
    Test,
  },
  data: () => {
    return {
      option: {
        settings: { hasHeaders: true },
        dimensions: { borderWidth: 4 },
        root: {
          type: "row",
          content: [
            {
              type: "component",
              componentType: "Test",
            },
            {
              type: "component",
              componentType: "Test",
            },
            {
              type: "component",
              componentType: "Test",
            },
          ],
        },
      },
    };
  },
  setup() {
    const componentTypes = reactive(components);
    return {
      componentTypes,
    };
  },
};
</script>

<style></style>
