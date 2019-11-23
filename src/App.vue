<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style lang="less">
@import '~vux/src/styles/reset.less';

body {
  background-color: #fbf9fe;
}


  html{
    font-size: 62.5%;

  }
  .layout{
    width:1000px;
    margin:0 auto;
  }

  .fs14{
    font-size: 14px;
  }
  .fs18{
    font-size: 18px;
  }
  .fs36{
    font-size:36px;
  }
  .fs24{
    font-size:24px;
  }

  .mt16{
    margin-top: 16px;
  }
  .mt24{
    margin-top:24px;
  }
  .mt72{
    margin-top:72px;
  }

  .mt48{
    margin-top: 48px;
  }
  .mt36{
    margin-top:36px;
  }
  .mt30{
    margin-top: 30px;
  }

  .colorFF{
    color:#FFF;
  }

  .color-blue{
    color: #4b7fe5;
  }
  .color-666{
    color:#666;
  }

  .lh30{
    height: 30px;
    line-height: 30px;
    vertical-align: middle;
  }

h3{
  display: inline-block;
  border-left:2px solid #4b7fe5;
  font-size: 18px;
  padding:0px 24px;
  font-weight: normal;
  color: #454545;

}
</style>
