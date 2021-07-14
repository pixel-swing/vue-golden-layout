<template>
  <div ref="element" style="width: 100%; height: 100vh">
    <teleport
      v-for="{ id, type, element } in componentInstances"
      :key="id"
      :to="element"
    >
      <component :is="type">
        <slot></slot>
      </component>
    </teleport>
  </div>
</template>

<script lang="ts">
import { useGoldenLayout } from "../use-golden-layout";
import {
  defineComponent,
  h,
  nextTick,
  shallowRef,
  computed,
  ref,
  onMounted,
} from "vue";
import "golden-layout/dist/css/goldenlayout-base.css";
import "golden-layout/dist/css/themes/goldenlayout-light-theme.css";
import { LayoutConfig, ResolvedComponentItemConfig } from "golden-layout";

const Test = defineComponent({ render: () => h("span", "works!") });

const components = { Test };
export default defineComponent({
  // components,
  emits: ["send-golden"],
  props: {
    componentTypes: {
      type: Object,
      required: true,
      default: () => components,
    },
    option: {
      type: Object,
      default: () => {
        return {
          settings: { hasHeaders: true },
          dimensions: { borderWidth: 4 },
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
        };
      },
    },
  },
  setup(props, context) {
    interface ComponentInstance {
      id: number;
      type: string;
      element: HTMLElement;
      state?: Object;
    }

    let instanceId = 0;
    const componentTypes = new Set(
      Object.keys(props.componentTypes as Record<string, undefined>)
    );

    const loadView = computed(() => {
      for (const key in props.componentTypes) {
        return import("../examples/base/Test.vue");
      }
    });

    const componentInstances = shallowRef<ComponentInstance[]>([]);
    const createComponent = (config: any, element: HTMLElement) => {
      if (!componentTypes.has(config.componentType)) {
        throw new Error(`Component not found: '${config.componentType}'`);
      }
      ++instanceId;
      componentInstances.value = componentInstances.value.concat({
        id: instanceId,
        type: config.componentType,
        element,
        state: config.componentState,
      });
    };
    const destroyComponent = (toBeRemoved: HTMLElement) => {
      componentInstances.value = componentInstances.value.filter(
        ({ element }) => element !== toBeRemoved
      );
    };

    const { element, goldenLayout } = useGoldenLayout(
      createComponent,
      destroyComponent,
      props.option as LayoutConfig
    );
    nextTick(() => {
      context.emit("send-golden", goldenLayout);
    });

    return { element, componentInstances, goldenLayout, loadView };
  },
});
</script>

<style></style>
