<template>
  <n-menu default-value="home" :options="menuOptions" />
</template>

<script>
import { h } from "vue";
import { NIcon, NMenu } from "naive-ui";
import { RouterLink } from "vue-router";

import {
  BookOutline as BookIcon,
  PersonOutline as PersonIcon,
  WineOutline as WineIcon,
} from "@vicons/ionicons5";

function renderIcon(icon) {
  return () => h(NIcon, null, { default: () => h(icon) });
}

const menuOptions = [
  {
    label: () =>
      h(
        RouterLink,
        {
          to: "/home",
          tag: "span",
        },
        "home"
      ),
    key: "home",
  },
  {
    label: "bases",
    key: "base",
    type: "group",
    children: [
      {
        label: () =>
          h(
            RouterLink,
            {
              to: "/row",
            },
            "row"
          ),
        key: "row",
        // // icon: renderIcon(BookIcon),
      },
      {
        label: () =>
          h(
            RouterLink,
            {
              to: "/column",
            },
            "cloumn"
          ),
        key: "column",
        // // icon: renderIcon(BookIcon),
      },
      {
        label: () =>
          h(
            RouterLink,
            {
              to: "/stack",
            },
            "stack"
          ),
        key: "stack",
        // icon: renderIcon(BookIcon),
      },
      {
        label: () =>
          h(
            RouterLink,
            {
              to: "/saving-state",
            },
            "saving-state"
          ),
        key: "saving-state",
        // icon: renderIcon(BookIcon),
      },
    ],
  },
  {
    label: "themes",
    key: "themes",
    type: "group",
    children: [
      {
        label: "dark-theme",
        key: "dark-theme",
        // icon: renderIcon(BookIcon),
      },
      {
        label: "light-theme",
        key: "light-theme",
        // icon: renderIcon(BookIcon),
      },
    ],
  },
  {
    label: "configuration",
    key: "configuration",
    type: "group",
    children: [
      {
        label: () =>
          h(
            RouterLink,
            {
              to: "/golden-spiral",
              tag: "span",
              rel: "noopenner noreferrer",
            },
            "golden-spiral"
          ),
        key: "golden-spiral",
        // icon: renderIcon(BookIcon),
      },
      {
        label: () =>
          h(
            RouterLink,
            {
              to: "/synced-layouts",
              tag: "span",
              rel: "noopenner noreferrer",
            },
            "synced-layouts"
          ),
        key: "synced-layouts",
        // icon: renderIcon(BookIcon),
      },
      {
        label: () =>
          h(
            RouterLink,
            {
              to: "/nested-stacks",
              tag: "span",
              rel: "noopenner noreferrer",
            },
            "nested-stacks"
          ),
        key: "nested-stacks",
        // icon: renderIcon(BookIcon),
      },
    ],
  },
  {
    label: "adding items",
    key: "adding-items",
    type: "group",
    children: [
      {
        label: () => {
          return h(
            RouterLink,
            {
              to: "/by-drag",
            },
            "by-drag"
          );
        },
        key: "by-drag",
        // icon: renderIcon(BookIcon),
      },
    ],
  },
  {
    label: "custom-functionality",
    key: "custom-functionality",
    type: "group",
    children: [
      {
        label: () => {
          return h(
            RouterLink,
            {
              to: "/extending-header",
            },
            "extending-header"
          );
        },
        key: "extending-header",
        // icon: renderIcon(BookIcon),
      },
      {
        label: () => {
          return h(
            RouterLink,
            {
              to: "/extending-tabs",
            },
            "extending-tabs"
          );
        },
        key: "extending-tabs",
        // icon: renderIcon(BookIcon),
      },
    ],
  },
];

export default {
  components: {
    NMenu,
  },
  setup() {
    return {
      menuOptions,
      handleUpdateValue(key, item) {
        // message.info("[onUpdate:value]: " + JSON.stringify(key));
        // message.info("[onUpdate:value]: " + JSON.stringify(item));
      },
    };
  },
};
</script>
