<!--
 * @version: v0.0.1
 * @Author: hailong.chen
 * @Date: 2019-10-11 21:38:05
 * @LastEditors: hailong.chen
 * @LastEditTime: 2019-10-11 22:51:25
 * @Descripttion:
 -->
<template>
  <div class="wrapper">
    <div class="btn" @click="openPage">
      <text class="btn-txt">返回吧</text>
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
    background-color: #C3413D;
    align-items: center;
    justify-content: center;
  }

  .slider1 {
    background-color: #635147;
  }

  .slider2 {
    background-color: #FFC302;
  }

  .slider3 {
    background-color: #FF9090;
  }

  .slider4 {
    background-color: #546E7A;
  }
</style>

<script>
import { WxcEpSlider } from 'weex-ui'
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
      // navigator.pop({
      //   animated: 'true'
      // }, event => {
      //   console.log('callback: ', event)
      // })
      this.$router.go(-1)
    }
  }
}
</script>
