<!--
 * @version: v0.0.1
 * @Author: hailong.chen
 * @Date: 2019-10-11 21:18:44
 * @LastEditors: hailong.chen
 * @LastEditTime: 2019-10-11 22:49:57
 * @Descripttion:
 -->
<template>
  <div>
     <div class="btn" @click="openPage">
      <text class="btn-txt">开页面</text>
    </div>
  </div>
</template>

<script>
import { WxcButton, WxcPopup } from 'weex-ui'
// var navigator = weex.requireModule('navigator')
module.exports = {
  components: { WxcButton, WxcPopup },
  data: () => ({
    isShow: false
  }),
  methods: {
    buttonClicked () {
      this.isShow = true
    },
    overlayClicked () {
      this.isShow = false
    },
    openPage () {
      this.$router.push('/page0')
      // navigator.push({
      //   url: '/page0',
      //   animated: 'true'
      // }, event => {
      //   console.log('callback: ', event)
      // })
    }
  }
}
</script>
