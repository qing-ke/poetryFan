<template>
  <div>
    <div id="appstart"></div>
    <div id="navigation">
      <div class="box">
        <span>偶遇佳句</span>
      </div>
      <div class="box">
        <span>名人名句</span>
      </div>
      <div class="box">
        <span>原创句子</span>
      </div>
      <div class="box">
        <span>精选句集</span>
      </div>
      <div class="box">
        <span>美图美句</span>
      </div>
      <div class="box">
        <span>寻找知音</span>
      </div>
    </div>
    <div class="line"></div>
    <div id="navigation2">
      <div v-for="item in list"  @click="goList(item.id)"  v-bind:class="{ active: item.active}">
        <span>{{item.name}}</span>
      </div>
    </div>
    <v-sentences :count="count"></v-sentences>
  </div>
</template>

<script>
  import sentences from './sentences'
  export default {
    name: 'home-a',
    data () {
      return {
        list: [
          {
            name: '推荐',
            active: true,
            id: 1
          },
          {
            name: '最新',
            active: false,
            id: 2
          },
          {
            name: '热门',
            active: false,
            id: 3
          },
          {
            name: '排行',
            active: false,
            id: 4
          }
        ],
        count: 1
      }
    },
    components: {
      'v-sentences': sentences
    },
    methods: {
      goList (id) {
        if (id === this.count) {
        } else {
          this.count = id
          for (let i in this.list) {
            if (this.list[i].id === this.count) {
              this.list[i].active = true
            } else {
              this.list[i].active = false
            }
          }
        }
      }
    }
  }
</script>

<style lang="scss">
   #appstart{
     background-image: url("/static/img/appstart.jpg");
     width: 100%;
     height: 200px;
   }
   #navigation {
     display: flex;
     flex-wrap: wrap;
     .box{
       width: calc((100% - 2px)/3);
       height: 50px;
       text-align: center;
       line-height: 50px;
       border: solid 1px #ccc;
       margin-right: -1px;
       margin-bottom: -1px;
       &:nth-child(3n+0){
         border-right-width: 0;
       }
       &:nth-child(3n-2){
         border-left-width: 0;
       }
       }
     }
   .line{
     width: 100%;
     height: 10px;
     background-color: #f9f9f9;
   }
   #navigation2{
     div{
       width: calc((100% - 4px)/4);
       height: 50px;
       display: inline-block;
       text-align: center;
       line-height: 50px;
       border: solid 2px #ccc;
       margin-left: -2px;
       &:nth-child(1){
         border-left-width: 0;
       }
       &:nth-child(4){
         border-right-width: 0;
       }
     }
     div.active{
       border-bottom: solid 2px #f87d23;
     }
   }
</style>
