<!--
 * @version: v0.0.1
 * @Author: hailong.chen
 * @Date: 2019-10-11 21:46:41
 * @LastEditors: hailong.chen
 * @LastEditTime: 2019-10-11 22:52:31
 * @Descripttion:
 -->
<template>
  <div class="demo-container">
    <text class="btn-txt">当前页面1</text>
    <div class="btn" @click="openPage">
      <text class="btn-txt">开页面2</text>
    </div>
  </div>
</template>

<script>
import { WxcLightbox } from 'weex-ui'
// var navigator = weex.requireModule('navigator')
export default {
  components: {
    WxcLightbox
  },
  data: function () {
    return {
      imageList: [
        { src: 'https://gd2.alicdn.com/bao/uploaded/i2/T14H1LFwBcXXXXXXXX_!!0-item_pic.jpg' },
        { src: 'https://gd1.alicdn.com/bao/uploaded/i1/TB1PXJCJFXXXXciXFXXXXXXXXXX_!!0-item_pic.jpg' },
        { src: 'https://gd3.alicdn.com/bao/uploaded/i3/TB1x6hYLXXXXXazXVXXXXXXXXXX_!!0-item_pic.jpg' }
      ],
      show: false
    }
  },
  methods: {
    openLightBox () {
      this.show = true
    },
    openPage () {
      // navigator.push({
      //   url: '/page2',
      //   animated: 'true'
      // }, event => {
      //   console.log('callback: ', event)
      // })
      this.$router.push('/page2')
    },
    wxcLightboxOverlayClicked () {
      // 无状态组件，需要在此次关闭
      this.show = false
    }
  }
}
</script>
