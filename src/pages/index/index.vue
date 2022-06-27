<!--
 * @Author: yuyongxing
 * @Date: 2022-06-15 14:45:36
 * @LastEditors: yuyongxing
 * @LastEditTime: 2022-06-21 18:05:05
 * @Description: 
-->
<template>
  <view class="content">
    <image class="logo" src="/static/logo.png"></image>
    <view>
      <Hello :title="title"></Hello>
    </view>
  </view>
</template>

<script>
import { testApi } from "@/api/test.js";
import Hello from '@/components/Hello.vue';
export default {
  components: { Hello },
  data() {
    return {
      title: "Hello",
    };
  },
  async onLoad() {
   const res = await  testApi({ name: "张三" })
   console.log(res,"res")
  },
  methods: {},
};
</script>

<style>
.content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.logo {
  height: 200rpx;
  width: 200rpx;
  margin: 200rpx auto 50rpx auto;
}

.text-area {
  display: flex;
  justify-content: center;
}

.title {
  font-size: 36rpx;
  color: #8f8f94;
}
</style>
