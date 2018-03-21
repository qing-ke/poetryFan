<template>
  <div>
    <div class="header">
      <span class="title">句子迷</span>
      <span class="plus" @click="showHeadMeau"></span>
      <span class="search"></span>
    </div>
    <div class="headMeau" v-show="headMeau">
      <span>发布美句</span>
      <span>发布句集</span>
    </div>
  </div>
</template>

<script type="es6">
  export default {
    data (){
      return {
        headMeau: false
      }
    },
    methods: {
      showHeadMeau (){
        this.headMeau = !this.headMeau
      }
    }
  }
</script>

<style lang="scss">
  .header{
    width: 100%;
    height: 40px;
    background-color: #f87d23;
    line-height: 40px;
    .title{
      color: #FFF;
      font-size: 16px;
      margin-left: 10px;
    }
    .search{
      width: 32px;
      height: 32px;
      display: inline-block;
      float: right;
      margin-top: 4px;
      margin-right: 10px;
      background-image: url("/static/img/search.png");
    }
    .plus{
      width: 32px;
      height: 32px;
      display: inline-block;
      float: right;
      margin-top: 4px;
      margin-right: 10px;
      background-image: url("/static/img/plus.png");
    }
  }
  .headMeau{
    background-color: #f9f9f9;
    width: 150px;
    height: 80px;
    position: absolute;
    right: 0px;
    span{
      display: block;
      width: 100%;
      height: 40px;
      line-height: 40px;
      text-align: center;
    }
  }
</style>
