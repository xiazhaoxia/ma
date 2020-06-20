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
  .fw600{
    font-weight: 600;
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
  .color-orange{
    color:orange;
  }

  .lh30{
    height: 30px;
    line-height: 30px;
    vertical-align: middle;
  }

  .mr2{
    margin-right:2px;
  }
  .ml2{
    margin-left:2px;
  }
  .ml5{
    margin-left:5px;
  }

h3{
  display: inline-block;
  border-left:2px solid #4b7fe5;
  font-size: 18px;
  padding:0px 24px;
  font-weight: normal;
  color: #454545;

}

.topbar{
  /*position: absolute;*/
  /*top:40px;*/
  /*left:50%;*/
  /*transform: translateX(-50%);*/
  /*z-index:99;*/
  width: 100%;
  font-size: 1.6rem;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 9999;
  background-color: rgba(255,255,255,1);
}
</style>
