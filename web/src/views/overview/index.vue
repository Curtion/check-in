<template>
  <n-grid x-gap="12" :cols="2">
    <n-gi>
      <div class="left">
        <n-list bordered>
          <n-list-item>
            <n-thing title="当前版本" description="V1.0.0" />
          </n-list-item>
          <n-list-item>
            <n-thing title="任务总数" description="21个" />
          </n-list-item>
          <n-list-item>
            <n-thing title="今日执行" description="5次" />
          </n-list-item>
          <n-list-item>
            <n-thing title="今日成功" description="6次" />
          </n-list-item>
          <n-list-item>
            <n-thing title="累计执行" description="44885次" />
          </n-list-item>
          <n-list-item>
            <n-thing title="累计成功" description="44885次" />
          </n-list-item>
        </n-list>
      </div>
    </n-gi>
    <n-gi>
      <div class="right">
        <n-scrollbar style="max-height: calc(100vh - 60px)">
          <p>最新执行记录</p>
          <n-list>
            <n-list-item>执行记录一</n-list-item>
          </n-list>
        </n-scrollbar>
      </div>
    </n-gi>
  </n-grid>
</template>
