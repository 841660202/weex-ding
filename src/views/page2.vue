<!--
 * @version: v0.0.1
 * @Author: hailong.chen
 * @Date: 2019-10-11 21:38:05
 * @LastEditors: hailong.chen
 * @LastEditTime: 2019-10-11 22:52:07
 * @Descripttion:
 -->
<template>
  <div class="wrapper">
    <text class="btn-txt">当前页面2</text>

    <div class="btn" @click="openPage">
      <text class="btn-txt">开页面3</text>
    </div>
  </div>
</template>

<style scoped>
.wrapper {
  padding-top: 100px;
}

.slider {
  width: 400px;
  height: 300px;
  background-color: #c3413d;
  align-items: center;
  justify-content: center;
}

.slider1 {
  background-color: #635147;
}

.slider2 {
  background-color: #ffc302;
}

.slider3 {
  background-color: #ff9090;
}

.slider4 {
  background-color: #546e7a;
}
</style>

<script>
import { WxcEpSlider } from 'weex-ui'
// const { router } = require('@/router')
// var navigator = weex.requireModule('navigator')
export default {
  components: { WxcEpSlider },
  data: () => ({
    sliderId: 1,
    cardLength: 5,
    cardSize: {
      width: 400,
      height: 300,
      spacing: 0,
      scale: 0.8
    }
  }),
  methods: {
    wxcEpSliderCurrentIndexSelected (e) {
      const index = e.currentIndex
      console.log(index)
    },
    openPage () {
      // navigator.push({
      //   url: '/page3',
      //   animated: 'true'
      // }, event => {
      //   console.log('callback: ', event)
      // })
      this.$router.push('/page3')
    }
  }
}
</script>
