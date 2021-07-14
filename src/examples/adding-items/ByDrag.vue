<template>
  <div class="wrapper">
    <div class="menu-container">
      <div ref="element">You've added me!</div>
      <div>You've added me too!</div>
    </div>
    <golden-layout
      :componentTypes="componentTypes"
      :option="option"
      @sendGolden="getGolden"
    ></golden-layout>
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
        settings: { hasHeaders: true },
        dimensions: { borderWidth: 2 },
        root: {
          type: "row",
          content: [
            {
              type: "component",
              componentName: "Test",
              componentState: { text: "Component 1" },
            },
            {
              type: "component",
              componentName: "Test",
              componentState: { text: "Component 2" },
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

<style scoped>
.wrapper {
  display: flex;
}
.menu-container {
  width: 20%;
}
</style>
