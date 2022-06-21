<!--
 * @Author: yuyongxing
 * @Date: 2022-06-21 15:58:23
 * @LastEditors: yuyongxing
 * @LastEditTime: 2022-06-21 16:02:55
 * @Description: 
-->
<template>
  <div>
    <div class="title">{{ title }}</div>
    <div>{{ text }}</div>
  </div>
</template>
<script>
export default {
  props: ["title"],
  data() {
    return {
      text: "word",
    };
  },
};
</script>
<style lang="scss" scoped>
.title{
    font-weight: bold;
    font-size: 40rpx;
}
</style>
