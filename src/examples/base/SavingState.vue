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
        root: {
          type: "row",
          content: [
            {
              type: "component",
              componentType: "Example",
              componentState: { label: "A" },
            },
            {
              type: "column",
              content: [
                {
                  type: "component",
                  componentType: "Example",
                  componentState: { label: "B" },
                },
                {
                  type: "component",
                  componentType: "Example",
                  componentState: { label: "C" },
                },
              ],
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
