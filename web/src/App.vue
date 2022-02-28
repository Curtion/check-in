<script setup lang="ts">
import {
  NLayout,
  NLayoutHeader,
  NLayoutSider,
  NLayoutFooter,
  NLayoutContent,
} from "naive-ui";
</script>

<template>
  <n-layout has-sider>
    <n-layout-sider
      collapse-mode="width"
      :collapsed-width="100"
      :width="240"
      show-trigger="arrow-circle"
      bordered
    >
      海淀桥
    </n-layout-sider>
    <n-layout>
      <n-layout-header bordered>颐和园路</n-layout-header>
      <n-layout-content> 平山道 </n-layout-content>
      <n-layout-footer bordered>成府路</n-layout-footer>
    </n-layout>
  </n-layout>
</template>
<style lang="scss">
.n-layout-sider {
  height: 100vh;
}
.n-layout-header {
  height: 50px;
  background: #fff;
}
.n-layout-content {
  height: calc(100vh - 100px);
  background: #fff;
}
.n-layout-footer {
  height: 50px;
  background: #fff;
}
</style>
