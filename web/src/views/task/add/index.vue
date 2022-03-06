<template>
  <n-grid x-gap="12" :cols="2">
    <n-gi>
      <n-card title="添加任务">
        <n-form
          ref="formRef"
          :label-width="80"
          :model="formValue"
          :rules="rules"
          size="medium"
        >
          <n-grid x-gap="12" :cols="6">
            <n-gi :span="1">
              <n-form-item label="类型" path="type">
                <n-select v-model:value="formValue.type" :options="types" />
              </n-form-item>
            </n-gi>
            <n-gi :span="5">
              <n-form-item label="路径" path="url">
                <n-input
                  v-model:value="formValue.url"
                  placeholder="请输入请求路径"
                />
              </n-form-item>
            </n-gi>
          </n-grid>
          <n-form-item label="请求方法" path="method">
            <n-grid x-gap="12" :cols="12">
              <n-gi :span="2">
                <n-select v-model:value="formValue.method" :options="methods" />
              </n-gi>
              <n-gi :span="10" style="display: flex; align-items: center">
                <n-checkbox-group v-model:value="formValue.args">
                  <n-space item-style="display: flex;">
                    <n-checkbox value="body" label="请求参数" />
                    <n-checkbox value="header" label="Header" />
                    <n-checkbox value="cookie" label="Cookie" />
                    <n-checkbox value="proxy" label="代理设置" />
                  </n-space>
                </n-checkbox-group>
              </n-gi>
            </n-grid>
          </n-form-item>
          <n-card v-if="isTagShow('body')" title="请求参数" class="mtb">
            测试
          </n-card>
          <n-card v-if="isTagShow('header')" title="Header" class="mtb">
            测试
          </n-card>
          <n-card v-if="isTagShow('cookie')" title="Cookie" class="mtb">
            测试
          </n-card>
          <n-card v-if="isTagShow('proxy')" title="代理设置" class="mtb">
            测试
          </n-card>
          <n-form-item>
            <n-button
              type="primary"
              attr-type="button"
              style="margin-right: 10px"
            >
              保存
            </n-button>
            <n-button attr-type="button" @click="handleValidateClick">
              重制
            </n-button>
          </n-form-item>
        </n-form>
      </n-card>
    </n-gi>
    <n-gi>
      <n-card title="帮助">
        <Help />
      </n-card>
    </n-gi>
  </n-grid>
</template>

<script lang="ts" setup>
import { ref, reactive } from "vue";
import {
  FormInst,
  useMessage,
  NSpace,
  NCheckboxGroup,
  NCheckbox,
} from "naive-ui";
import Help from "./components/help.vue";
const formRef = ref<FormInst | null>(null);
const message = useMessage();
const formValue = reactive({
  type: "HTTP",
  method: "GET",
  args: ["body", "header"],
  url: "",
  phone: "",
});

const types = [
  {
    label: "HTTP://",
    value: "HTTP",
  },
  {
    label: "HTTPS://",
    value: "HTTPS",
  },
];

const methods = [
  {
    label: "GET",
    value: "GET",
  },
  {
    label: "POST",
    value: "POST",
  },
  {
    label: "PUT",
    value: "PUT",
  },
  {
    label: "DELETE",
    value: "DELETE",
  },
];
const rules = {
  type: {
    required: true,
    message: "请输入请求类型",
    trigger: "change",
  },
  method: {
    required: true,
    message: "请输入请求方法",
    trigger: "change",
  },
  url: {
    required: true,
    message: "请输入请求路径",
    trigger: ["input", "blur"],
  },
};
function handleValidateClick(e: MouseEvent) {
  e.preventDefault();
  formRef.value?.validate((errors) => {
    if (!errors) {
      message.success("Valid");
    } else {
      console.log(errors);
      message.error("Invalid");
    }
  });
}
function isTagShow(tag: string) {
  return formValue.args.includes(tag);
}
</script>
<style scoped lang="scss">
.mtb {
  margin-top: 10px;
  margin-bottom: 10px;
}
</style>
