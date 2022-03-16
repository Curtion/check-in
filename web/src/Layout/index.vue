<template>
  <n-layout has-sider>
    <n-layout-sider
      collapse-mode="width"
      :collapsed-width="50"
      :width="240"
      show-trigger="arrow-circle"
      bordered
    >
      <n-menu
        v-model:value="activeKey"
        mode="vertical"
        default-expand-all
        :options="menuOptions"
        @update:value="handleUpdateValue"
      />
    </n-layout-sider>
    <n-layout>
      <n-layout-content>
        <router-view />
      </n-layout-content>
      <n-layout-footer bordered>
        本工具由
        <a href="https://github.com/Curtion/check-in" target="__blank">
          checkin
        </a>
        驱动支持
      </n-layout-footer>
    </n-layout>
  </n-layout>
</template>
<script setup lang="ts">
import type { Component } from 'vue'
import { h, ref } from 'vue'
import {
  NIcon,
  NLayout,
  NLayoutContent,
  NLayoutFooter,
  NLayoutSider,
  NMenu,
} from 'naive-ui'
import type { MenuOption } from 'naive-ui'
import {
  AddCircleOutline,
  CodeWorkingOutline,
  ColorPaletteOutline,
  DocumentTextOutline,
  InformationOutline,
  ListOutline,
  StorefrontOutline,
} from '@vicons/ionicons5'
import { useRoute, useRouter } from 'vue-router'
const router = useRouter()
const route = useRoute()
const activeKey = ref<string | null>(route.name as string)

function renderIcon(icon: Component) {
  return () => h(NIcon, null, { default: () => h(icon) })
}

const menuOptions: MenuOption[] = [
  {
    label: '平台概览',
    key: 'overview',
    icon: renderIcon(ColorPaletteOutline),
  },
  {
    label: '任务管理',
    key: 'task',
    icon: renderIcon(CodeWorkingOutline),
    children: [
      {
        label: '添加任务',
        key: 'taskAdd',
        icon: renderIcon(AddCircleOutline),
      },
      {
        label: '任务列表',
        key: 'taskList',
        icon: renderIcon(ListOutline),
      },
      {
        label: '任务日志',
        key: 'taskLog',
        icon: renderIcon(DocumentTextOutline),
      },
    ],
  },
  {
    label: '关于',
    key: 'about',
    icon: renderIcon(InformationOutline),
  },
]

function handleUpdateValue(key: string) {
  router.push(key)
}
</script>
<style lang="scss">
.n-layout-sider {
  height: 100vh;
}
.n-layout-content {
  height: calc(100vh - 50px);
  background: #fff;
  padding: 5px;
  box-sizing: border-box;
}
.n-layout-footer {
  height: 50px;
  background: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
