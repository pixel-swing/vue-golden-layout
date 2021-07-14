<template>
  <golden-layout
    :componentTypes="componentTypes"
    :option="option"
  ></golden-layout>
</template>

<script>
import { reactive, defineComponent } from "vue";
import GoldenLayout from "@/components/GoldenLayout.vue";
const Test = defineComponent({ render: () => h("span", "It works!") });
const components = { Test };
export default {
  components: {
    GoldenLayout,
  },
  data: () => {
    return {
      option: {
        settings: { hasHeaders: false },
        dimensions: { borderWidth: 2 },
        root: {
          type: "row",
          content: [
            {
              type: "column",
              width: 61.803,
              content: [
                {
                  type: "component",
                  componentType: "Test",
                },
              ],
            },
            {
              type: "column",
              width: 38.197,
              content: [
                {
                  type: "component",
                  componentType: "Test",
                  height: 61.803,
                },
                {
                  type: "row",
                  content: [
                    {
                      type: "column",
                      width: 61.803,
                      content: [
                        {
                          type: "row",
                          content: [
                            {
                              type: "component",
                              componentType: "Test",
                              width: 61.803,
                            },
                            {
                              type: "column",
                              content: [
                                {
                                  type: "component",
                                  componentType: "Test",
                                  height: 61.803,
                                },
                                {
                                  type: "row",
                                  content: [
                                    {
                                      type: "component",
                                      componentType: "Test",
                                    },
                                    {
                                      type: "component",
                                      componentType: "Test",
                                      width: 61.803,
                                    },
                                  ],
                                },
                              ],
                            },
                          ],
                        },
                        {
                          type: "component",
                          componentType: "Test",
                          height: 38.197,
                        },
                      ],
                    },
                    {
                      type: "component",
                      componentType: "Test",
                      width: 61.803,
                    },
                  ],
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
