<script setup lang="ts">
import { ref, defineProps } from "vue";
import { NSpace } from "naive-ui";
const data = defineProps({
  data: {
    type: Array,
    default: () => [],
  },
});
const url = ref("");
</script>

<template>
  <n-grid class="mtb" :x-gap="12" :cols="12">
    <n-gi :span="5">
      <n-input v-model:value="url" placeholder="请输入Key" />
    </n-gi>
    <n-gi :span="5">
      <n-input v-model:value="url" placeholder="请输入Value" />
    </n-gi>
    <n-gi :span="2">
      <n-button type="error" attr-type="button"> 删除 </n-button>
    </n-gi>
  </n-grid>
  <n-space style="margin-top: 20px">
    <n-button type="success" attr-type="button"> 添加一行 </n-button>
    <n-button attr-type="button"> 全部清空 </n-button>
  </n-space>
</template>
<style scoped lang="scss">
.mtb {
  margin-top: 5px;
  margin-bottom: 5px;
}
</style>
