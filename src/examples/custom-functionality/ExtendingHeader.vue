<template>
  <div class="wrapper">
    <vue-golden-layout
      :componentTypes="componentTypes"
      :option="option"
      @sendGolden="getGolden"
    ></vue-golden-layout>
  </div>
</template>

<script>
import {
  reactive,
  defineComponent,
  onMounted,
  shallowRef,
  ref,
  nextTick,
} from "vue";
import VueGoldenLayout from "@/components/GoldenLayout.vue";

const Test = defineComponent({ render: () => h("span", "It works!") });
const components = { Test };
export default {
  components: {
    VueGoldenLayout,
  },
  data: () => {
    return {
      option: {
        settings: { hasHeaders: true },
        dimensions: { borderWidth: 2 },
        root: {
          type: "row",
          content: [
            {
              type: "component",
              componentType: "Test",
              componentState: { color: "#1D84BD", text: "adsasdad" },
            },
            {
              type: "component",
              componentType: "Test",
              componentState: { color: "#1D84BD" },
            },
          ],
        },
      },
    };
  },
  setup() {
    const element = shallowRef < HTMLElement > null;
    const componentTypes = reactive(components);

    const getGolden = (instance) => {
      const newItemConfig = {
        type: "component",
        componentType: "Test",
        componentState: { text: "test" },
      };
      console.log(instance);
      //instance.value.newDragSource(element.value, newItemConfig);
    };
    const addNewItem = () => {
      const newItemConfig = {
        type: "component",
        componentType: "Test",
        componentState: { text: "test" },
      };
      // goldenLayout.createDragSource(element, newItemConfig);
    };

    onMounted(() => {});
    return {
      componentTypes,
      element,
      getGolden,
    };
  },
};
</script>

<style scoped></style>
