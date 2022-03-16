<script setup lang="ts">
import { ref } from 'vue'
import { NSpace } from 'naive-ui'
const props = withDefaults(defineProps<{
  data: Header[]
}>(),
{
  data: () => [],
})

interface Header {
  key: string
  value: string
}

const data = ref<Header[]>([])

data.value.push(...props.data)

if (data.value.length === 0) {
  handleAddHeader()
}

function handleAddHeader() {
  data.value.push({
    key: '',
    value: '',
  })
}

function HandleDelHeader(index: number) {
  data.value.splice(index, 1)
}

function handleClearHeader() {
  data.value = []
}
</script>

<template>
  <n-grid v-for="(item,index) in data" :key="item.key" class="mtb" :x-gap="12" :cols="12">
    <n-gi :span="5">
      <n-input v-model:value="item.key" placeholder="请输入Key" />
    </n-gi>
    <n-gi :span="5">
      <n-input v-model:value="item.value" placeholder="请输入Value" />
    </n-gi>
    <n-gi :span="2">
      <n-button type="error" attr-type="button" @click="HandleDelHeader(index)">
        删除
      </n-button>
    </n-gi>
  </n-grid>
  <n-space style="margin-top: 20px">
    <n-button type="success" attr-type="button" @click="handleAddHeader">
      添加一行
    </n-button>
    <n-button attr-type="button" @click="handleClearHeader">
      删除全部
    </n-button>
  </n-space>
</template>
<style scoped lang="scss">
.mtb {
  margin-top: 5px;
  margin-bottom: 5px;
}
</style>
