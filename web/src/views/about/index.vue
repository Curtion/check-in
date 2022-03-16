<template>
  <div class="box">
    <n-card title="关于" class="card">
      <p>
        本软件免费开源，适合个人用户独立运行，不建议搭建公共平台，同时也不推荐把此服务暴露到公网环境中。
      </p>
      <p>如果本软件对你有帮助，可以考虑进行捐赠，金额随意。</p>
      <p class="alipay">
        <img :src="alipay" alt="支付宝" width="240" height="360">
      </p>
    </n-card>
  </div>
</template>

<script setup lang="ts">
import { NCard } from 'naive-ui'
import alipay from '@/assets/img/alipay.jpg'
</script>
<style scoped lang="scss">
.box {
  display: flex;
  align-items: center;
  .card {
    width: 600px;
  }
}
.alipay {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
