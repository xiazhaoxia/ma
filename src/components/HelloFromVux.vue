<template>
  <div class="wrap" id="home">
    <div class="topbar"> <CommonHeader></CommonHeader></div>

    <div class="header">


      <div class="description">
        <p class="fs36">
          UWB高精度定位服务方案提供商
        </p>
        <p class="fs24 mt24">厘米级高精度定位，为客户提供位置感知，大数据分析解决方案</p>
      </div>

    </div>
    <div id="main">
      <h2>我们的优势</h2>
      <div class="line"></div>

      <ul class="content">

        <li v-for="item in items">
          <span class="icon"><img :src="item.icon"></span>
          <span><b>{{item.title}}</b></span>
          <span class="last">{{item.content}}</span>
        </li>

      </ul>
      <div class="banner mt72">
        <div class="full-width">
          <img src="../assets/img/home.png"/>
        </div>

        <div class="product">
          <h3>解决方案</h3>
          <div class="line"></div>
          <ul class="mt72 middle-banner">
            <li><img src="../assets/img/home_a.png" @click="goSolutions(1)"/><span>智慧工业</span></li>
            <li><img src="../assets/img/home_b.png" @click="goSolutions(2)"/><span>智慧狱所</span></li>
            <li><img src="../assets/img/home_c.png" @click="goSolutions(3)"/><span>矿井隧道</span></li>
          </ul>

        </div>
      </div>
    </div>

    <myfooter>
      <slot name="contact"></slot>
    </myfooter>

  </div>
</template>

<script>
import { Group, Cell } from 'vux'
import CommonHeader from './CommonHeader'
import myfooter from './footer.vue'
export default {
  components: {
    Group,
    Cell,
    CommonHeader,
    myfooter
  },
  methods: {
    goSolutions (id) {
      this.$router.push(`/solution/${id}`)
    }
  },
  data () {
    return {
      // note: changing this line won't causes changes
      // with hot-reload because the reloaded component
      // preserves its current state and we are modifying
      // its initial state.
      msg: 'Hello World!',
      items: [
        {icon: '../static/img/location.png', title: '定位精度高', content: 'UWB高精度厘米级定位，定位精度最高10cm'},
        {icon: '../static/img/label.png', title: '覆盖范围广', content: '基站覆盖半径大，间距可达100米，数量少，成本低'},
        {icon: '../static/img/signal.png', title: '标签容量大', content: '最小区域内可容纳1000张标签，整个系统无上限，易拓展'},
        {icon: '../static/img/install.png', title: '便于系统集成', content: '丰富的API接口免费提供，支持二次开发'},
        {icon: '../static/img/screen.png', title: '多屏便捷查看', content: '用任意电脑/手机/PAD均可查看，无需客户端，浏览器访问'},
        {icon: '../static/img/cloud.png', title: '云端定位引擎', content: '支持云端定位引擎，无需本地安装服务器，部署便捷，成本低'},
        {icon: '../static/img/phone.png', title: '手机查看定位', content: '使用手机扫码即可查看定位信息，方便快捷'},
        {icon: '../static/img/function.png', title: '远程维护升级', content: '基站和标签支持远程升级，便于调试和扩展功能'}

      ]
    }
  }
}
</script>

<style>
  #home .head{
    min-height:0px;
  }
  .wrap{
    text-align: center;
  }


  .header{
    background: url("../assets/img/banner.png") no-repeat center center;
    width:100%;
    height:100vh;
    background-size: cover;
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-size: cover;
    color:white;

  }




#main{
  width:1000px;
  margin:0 auto;
  text-align: center;

}


/*.logo {*/
  /*position:absolute;*/
  /*left:0;*/
  /*top:0;*/
  /*z-index:-1;*/
  /*width: 100%;*/
/*}*/
  h2{
    font-size:24px;
    color:#333;
    margin-top:72px;
  }
  .line{
    height:16px;
    border-bottom:2px solid #fbaa35;
    width:48px;
    display: inline-block;
  }

  #home .content{
    display:flex;
    flex-direction: row;
    flex-flow: wrap;
    margin-top:72px;

  }

  #home .content li{
    margin-bottom: 24px;
  }

  #home .content li{
    width:250px;
    text-align: center;
    display:flex;
    flex-direction: column;
    align-items: center;


  }
  #home .content li span{
    display: inline-block;
    width:80%;
    font-size:12px;
  }


  #home .content li span.last{
    height:48px;
    line-height: 24px;
    vertical-align: middle;
  }

  #home .content li span b3{
    font-size: 14px;
    color:#454545;
  }

  #home .full-width{
    /*margin-left:calc(50% - 50vw);*/
    /*left:-50%;*/
    /*margin-top: calc(50% - 50vh);*/
    margin-left:-50vw;
    width:100vw;
    left:50%;
    position:relative;
    overflow: hidden;

  }


  #home  .banner{
    position: relative;
    min-height: 608px;

  }
  #home  .banner h3{
    line-height: 24px;
    font-size: 24px;
    color: #fff;
    display: block;
    border-left:none;
  }
  #home  .banner .product{

    width: 1000px;
    margin:0 auto;
    font-size:24px;
    color: #fff;
    position: absolute;
    top:48px;
  }
  #home  .banner .product ul{
    display:flex;
    flex-direction: row;
    align-items: center;
    justify-content:space-around;
  }
  #home .banner .product ul li{
    flex:1;
    height: 392px;
    width:308px;
    cursor: pointer;
    margin-right:10px;
  }
  #home .banner .product ul li img{
    width:100%;
  }
  #home .middle-banner li{
    position: relative;
  }
  #home .middle-banner li span{
    position: absolute;
    z-index: 99;
    left: 50%;
    top: 50%;
    border: 1px solid #fff;
    font-size: 16px;
    color: #fff;
    background-color: transparent;
    transform: translate(-50%,-50%);
    padding:5px;
  }

</style>
