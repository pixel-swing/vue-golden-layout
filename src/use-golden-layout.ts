import { GoldenLayout, LayoutConfig, ResolvedComponentItemConfig, ComponentContainer } from "golden-layout";
import { onMounted, ref, shallowRef } from "vue";

export const isClient = typeof window !== 'undefined'
export const isDocumentReady = () => isClient && document.readyState === 'complete' && document.body != null;

export function useDocumentReady(func: () => void) {
  onMounted(() => {
    console.log(isDocumentReady())
    if (isDocumentReady()) {
      func()
    } else {
      document.addEventListener('readystatechange', () => isDocumentReady() && func(), {
        passive: true
      })
    }
  })
}

export function useGoldenLayout(
  createComponent: (config: ResolvedComponentItemConfig, container: HTMLElement) => void,
  destroyComponent: (container: HTMLElement) => void,
  config?: (LayoutConfig)
) {
  const element = shallowRef<HTMLElement | null>(null)
  const layout = shallowRef<HTMLElement | null>(null)
  const goldenLayout = ref<GoldenLayout | null>()
  const initialized = ref(false)
  useDocumentReady(() => {
    if (element.value == null) throw new Error('Element must be set.')
    // 初始化
    goldenLayout.value = new GoldenLayout(element.value)

    // 每当创建容器并需要组件时，触发该事件
    goldenLayout.value.getComponentEvent = (container: ComponentContainer, itemConfig: ResolvedComponentItemConfig) => {
      const { componentType }  = itemConfig;
      if (typeof componentType !== 'string') throw new Error('Invalid component type.')
      createComponent(itemConfig, container.element)
    }
    // 销毁组件时触发该事件
    goldenLayout.value.releaseComponentEvent = container => {
      destroyComponent(container.element)
    }
    
    if(config != null) goldenLayout.value.loadLayout(config)
    layout.value = goldenLayout as any
    initialized.value = true
  })
  return { element, layout, initialized, goldenLayout }
}