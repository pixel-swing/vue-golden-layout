<template>
  <golden-layout
    :componentTypes="componentTypes"
    :option="option"
  ></golden-layout>
</template>

<script>
import { reactive, defineComponent } from "vue";
import GoldenLayout from "@/components/GoldenLayout.vue";
const Example = defineComponent({ render: () => h("span", "It works!") });
const components = { Example };
export default {
  components: {
    GoldenLayout,
  },
  data: () => {
    return {
      option: {
        settings: { hasHeaders: true },
        dimensions: { borderWidth: 4 },
        root: {
          type: "stack",
          content: [
            {
              type: "component",
              componentType: "Example",
            },
            {
              type: "component",
              componentType: "Example",
            },
            {
              type: "component",
              componentType: "Example",
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
