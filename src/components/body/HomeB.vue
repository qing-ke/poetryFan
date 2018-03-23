<template>
  <div v-if="sencetentMeet">
    <div style="border-bottom: solid 1px #cdcdcd;padding: 20px;">
      <div>
        <span>
          {{ sencetentMeet.content }}
        </span>
      </div>
      <div style="margin:10px 0;color:#1afa29;">
        <div style="float: right">
          <span>--</span>
          <span>老舍</span>
          <span>《四世同堂》</span>
        </div>
      </div>
    </div>
    <div style="border-bottom: solid 1px #cdcdcd;padding: 10px;background-color: rgba(236, 234, 234, 0.71);">
      <div>
        <span>熊猫宝宝</span>
        <span style="color: #cdcdcd;font-size: 15px;">发布于12.29</span>
      </div>
      <div style="padding: 10px">
        <span style="display: block;width: 80px;height: 40px;border: solid 1px #cdcdcd;text-align: center;line-height: 40px;border-radius: 6px;margin: 0 auto;">喜欢</span>
      </div>
      <div>
        <span>标签</span>
        <div style="color: #cdcdcd;font-size: 15px;display: inline-block;">
          <span>名人名言</span>
        </div>
      </div>
    </div>
    <div>
      <span>心得/评论(3)</span>
      <hr>
      <v-comments></v-comments>
      <div>
        <textarea name="" id="" cols="30" rows="10"></textarea>
        <button>发布</button>
      </div>
    </div>
  </div>
</template>

<script>
  import comments from './comments'
  export default {
    name: 'home-b',
    data () {
      return {
        sencetentMeet: {
        }
      }
    },
    components: {
      'v-comments': comments
    },
    created () {
      this.$http.get('/api/sentenceMeet').then((response) => {
        console.log(response)
        if (response.body && response.body.error === 0) {
          this.sencetentMeet = response.body.data
        }
      })
    }
  }
</script>

<style scoped>

</style>
