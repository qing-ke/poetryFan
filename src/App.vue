<template>
  <div style="height: 100%">
    <v-header></v-header>
    <div class="content">
      <router-view></router-view>
    </div>
    <div style="height: 45px"></div>
    <div class="footer">
      <router-link class="item" to="/HomeA" exact>
        <span></span>
        <span>首页</span>
      </router-link>
      <router-link to="/HomeB">
        <span></span>
        <span>偶遇佳句</span>
      </router-link>
      <router-link to="/HomeC">
        <span></span>
        <span>分類大全</span>
      </router-link>
      <router-link to="/HomeD">
        <span></span>
        <span>我的句库</span>
      </router-link>
    </div>
  </div>
</template>

<script type="es6">
  import header from './components/header/header.vue'
  export default {
    components:{
      'v-header' : header
     }
  }
</script>

<style lang="scss">
    html,body{
      height: 100%;
      overflow: hidden;
      font-family: "Microsoft YaHei";
      #app{
        height: 100%;
      }
    }
    .content{
      height: calc(100% - 95px);
      overflow: auto;
    }
   .footer {
     display: flex;
     width: 100%;
     height: 45px;
     position: fixed;
     bottom: 0;
     color: #cdcdcd;
     a {
       flex: 1;
       text-align: center;
       display: block;
       font-size: 9px;
       color: rgb(77, 85, 93);
       /*&:active {*/
         /*color: rgb(240, 20, 20);*/
       /*}*/
       &.router-link-exact-active{
         span{
           color: #1afa29;
         }
         &:nth-child(1){
           span:nth-child(1):before {
             content: url("/static/img/home_a.png");
           }
         }
         &:nth-child(2){
           span:nth-child(1):before {
             content: url("/static/img/love_a.png");
           }
         }
         &:nth-child(3){
           span:nth-child(1):before {
             content: url("/static/img/list_a.png");
           }
         }
         &:nth-child(4){
           span:nth-child(1):before {
             content: url("/static/img/i_a.png");
           }
         }
       }
       span{
         display: block;
         color: #cdcdcd;
       }
       &:nth-child(1){
         span:nth-child(1):before {
           content: url("/static/img/home.png");
         }
       }
       &:nth-child(2){
         span:nth-child(1):before {
           content: url("/static/img/love.png");
         }
       }
       &:nth-child(3){
         span:nth-child(1):before {
           content: url("/static/img/list.png");
         }
       }
       &:nth-child(4){
         span:nth-child(1):before {
           content: url("/static/img/i.png");
         }
       }
     }
   }
   /*.item{*/
     /*background-color: aqua;*/
   /*}*/
</style>
