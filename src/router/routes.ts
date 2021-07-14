
export const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    component: () => import('../components/GoldenLayout.vue')
  },
  {
    path: '/row',
    component: () => import('../examples/base/Row.vue')
  },
  {
    path: '/column',
    component: () => import('../examples/base/Column.vue')
  },
  {
    path: '/stack',
    component: () => import('../examples/base/stack.vue')
  },
  {
    path: '/saving-state',
    component: () => import('../examples/base/SavingState.vue')
  },
  {
    path: '/golden-spiral',
    component: () => import('../examples/configuration/GoldenSpiral.vue')
  },
  {
    path: '/synced-layouts',
    component: () => import('../examples/configuration/SyncedLayouts.vue')
  },
  {
    path: '/nested-stacks',
    component: () => import('../examples/configuration/NestedStacks.vue')
  },
  {
    path: '/by-drag',
    component: () => import('../examples/adding-items/ByDrag.vue')
  },
  {
    path: '/extending-header',
    component: () => import('../examples/custom-functionality/ExtendingHeader.vue')
  },
  {
    path: '/extending-header',
    component: () => import('../examples/custom-functionality/ExtendingTabs.vue')
  }
]