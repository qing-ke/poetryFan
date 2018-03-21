<template>
  <div>
    <div id="sentences">
      <div v-for="(sentence,index) in sentences">
        <div  class="sentence-top">
          <div class="sentence-top-content">
            <span>
              {{sentence.content}}
            </span>
          </div>
          <div class="sentence-top-auther">
            <div class="sentence-top-auther-title">
              <span>--</span>
              <span v-if="sentence.auther">{{sentence.auther}}</span>
              <span v-else></span>
              <span v-if="sentence.title">《{{sentence.title}}》</span>
              <span v-else></span>
            </div>
          </div>
        </div>
        <div class="sentence-bottom">
          <div>
            <span></span>
            <span v-if="sentence.love">喜歡（{{sentence.love}}）</span>
            <span v-else>喜歡</span>
          </div>
          <div>
            <span></span>
            <span>加入句集</span>
          </div>
          <div>
            <span></span>
            <span v-if="sentence.comment">評論（{{sentence.comment}}）</span>
            <span v-else>評論</span>
          </div>
          <div>
            <span></span>
            <span>{{sentence.provider}}</span>
          </div>
          <div>
            <span></span>
            <span>分享</span>
          </div>
        </div>
        <div v-if="(index + 2) <= sentences.length" class="sentence-line"></div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'sentence',
    props: {
      count: Number,
      required: true
    },
    data () {
      return {
        sentences: []
      }
    },
    created () {
      this.$http.get('http://localhost:8080/api/sentences' + this.count).then((response) => {
        console.log(response)
        if (response.body && response.body.error === 0) {
          this.sentences = response.body.data
        }
      })
    },
    watch: {
      count (val) {
        // if (this.count === 1) {
        //   this.sentences = [
        //     {
        //       id: 1,
        //       title: '四世同堂',
        //       auther: '老舍',
        //       content: '母亲的心是儿女们感情的温度表',
        //       love: 174,
        //       comment: 3,
        //       provider: 'xingxing'
        //     },
        //     {
        //       id: 2,
        //       title: '毕加猪',
        //       auther: '',
        //       content: '在海边不要讲笑话,会引起"海笑"的',
        //       love: 0,
        //       comment: 0,
        //       provider: 'liu69'
        //     }
        //   ]
        // } else if (this.count === 2) {
        //   this.sentences = [
        //     {
        //       id: 1,
        //       title: '四世同堂',
        //       auther: '老舍',
        //       content: '母亲的心是儿女们感情的温度表',
        //       love: 174,
        //       comment: 3,
        //       provider: 'xingxing'
        //     }
        //   ]
        // } else if (this.count === 3) {
        //   this.sentences = [
        //     {
        //       id: 2,
        //       title: '毕加猪',
        //       auther: '',
        //       content: '在海边不要讲笑话,会引起"海笑"的',
        //       love: 0,
        //       comment: 0,
        //       provider: 'liu69'
        //     }
        //   ]
        // } else if (this.count === 4) {
        //   this.sentences = [
        //     {
        //       id: 2,
        //       title: '毕加猪',
        //       auther: '',
        //       content: '在海边不要讲笑话,会引起"海笑"的',
        //       love: 0,
        //       comment: 0,
        //       provider: 'liu69'
        //     },
        //     {
        //       id: 2,
        //       title: '毕加猪',
        //       auther: '',
        //       content: '在海边不要讲笑话,会引起"海笑"的',
        //       love: 0,
        //       comment: 0,
        //       provider: 'liu69'
        //     }
        //   ]
        // }
        this.$http.get('http://localhost:8080/api/sentences' + val).then((response) => {
          console.log(response)
          if (response.body && response.body.error === 0) {
            this.sentences = response.body.data
          }
        })
      }
    }
  }
</script>

<style lang="scss">
  #sentences{
    width: 100%;
    .sentence-top{
      padding: 20px;
      border-bottom: solid 1px #CCC ;
      .sentence-top-content{
        span{
        }
      }
      .sentence-top-auther{
        margin-top: 20px;
        margin-bottom: 25px;
        .sentence-top-auther-title{
          color: #19da2b;
          float: right;
        }
      }
    }
    .sentence-bottom{
      height: 40px;
      border-bottom: solid 1px #CCC;
      display: flex;
      text-align: center;
      div{
        display: inline-block;
        width: 20%;
        font-size: 12px;
        span{
          display: block;
        }
        &:nth-child(1){
          span:nth-child(1){
            content: url("/static/img/love2.png");
            margin-left: calc(50% - 8px);
            margin-top: 6px;
          }
        }
        &:nth-child(2){
          span:nth-child(1){
            content: url("/static/img/files.png");
            margin-left: calc(50% - 8px);
            margin-top: 6px;
          }
        }
        &:nth-child(3){
          span:nth-child(1){
            content: url("/static/img/message.png");
            margin-left: calc(50% - 8px);
            margin-top: 6px;
          }
        }
        &:nth-child(4){
          span:nth-child(1){
            content: url("/static/img/i1.png");
            margin-left: calc(50% - 8px);
            margin-top: 6px;
          }
        }
        &:nth-child(5){
          span:nth-child(1){
            content: url("/static/img/share.png");
            margin-left: calc(50% - 8px);
            margin-top: 6px;
          }
        }
      }
    }
    .sentence-line{
      height: 10px;
      background-color: #f0f0f0;
    }
  }
</style>
