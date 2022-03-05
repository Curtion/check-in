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
              <n-form-item label="类型" path="method">
                <n-select v-model:value="formValue.method" :options="methods" />
              </n-form-item>
            </n-gi>
            <n-gi :span="5">
              <n-form-item label="路径" path="url">
                <n-input v-model:value="formValue.url" placeholder="https://" />
              </n-form-item>
            </n-gi>
          </n-grid>
          <n-form-item label="年龄" path="user.age">
            <n-input v-model:value="formValue.phone" placeholder="输入年龄" />
          </n-form-item>
          <n-form-item label="电话号码" path="phone">
            <n-input v-model:value="formValue.phone" placeholder="电话号码" />
          </n-form-item>
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
      <n-card title="帮助"> </n-card>
    </n-gi>
  </n-grid>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import { FormInst, useMessage } from "naive-ui";
const formRef = ref<FormInst | null>(null);
const message = useMessage();
const formValue = ref({
  method: 0,
  url: "",
  phone: "",
});
const methods = [
  {
    label: "GET",
    value: 0,
  },
  {
    label: "POST",
    value: 1,
  },
  {
    label: "PUT",
    value: 2,
  },
  {
    label: "DELETE",
    value: 3,
  },
];
const rules = {
  method: {
    required: true,
    message: "请输入请求类型",
    trigger: "blur",
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
</script>
