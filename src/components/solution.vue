<template>

  <div class="solution" id="solution">
    <CommonHeader></CommonHeader>
    <div id="main">

      <div>

        <swiper :show-dots="false"  auto height="720px" v-model="swiperItemIndex" >
          <swiper-item v-for="(item, index) in list" :key="index" class="swiper-demo-img">
            <x-img :src="item.img" ></x-img>
          </swiper-item>
        </swiper>
        <div  class="solution-tabbar">

            <tab v-model="swiperItemIndex" class="solution-tab layout fs16 color-fff" bar-active-color="#fbaa34" active-color="#fbaa34">
              <tab-item class="f" :selected="index==swiperItemIndex" v-for="(item, index) in list" @click="swiperItemIndex = index" :key="index">{{item.title}}</tab-item>
            </tab>

        </div>

        <!--<div class="tab">-->
          <!--<x-button v-for="(item,index) in list" @click.native="swiperItemIndex = index">{{item.title}}</x-button>-->
        <!--</div>-->
      </div>

    </div>

    <CommonFooter></CommonFooter>
  </div>
</template>


<script>
  import CommonHeader from './CommonHeader'
  import CommonFooter from './CommonFooter'
  import {Tab, TabItem, XImg, Swiper, XButton, SwiperItem} from 'vux'

  export default{
    name: 'solution',
    components: {
      CommonHeader,
      CommonFooter,
      Tab,
      TabItem,
      XImg,
      Swiper,
      XButton,
      SwiperItem
    },

    data () {
      return {
        msg: '解决方案',
        swiperItemIndex: 1
      }
    },
    computed: {
      list () {
        let allsolutions = {
          '1': [],
          '2': [],
          '3': [{
            url: 'javascript:',
            img: '../static/img/tunnel_a.png',
            title: '定位方案'
          }, {
            url: 'javascript:',
            img: '../static/img/tunnel_b.png',
            title: '系统架构',
            fallbackImg: 'https://static.vux.li/demo/3.jpg'
          }, {
            url: 'javascript:',
            img: '../static/img/tunnel_c.png',
            title: '网络部署',
            fallbackImg: 'https://static.vux.li/demo/3.jpg'
          }, {
            url: 'javascript:',
            img: '../static/img/tunnel_d.png',
            title: '软件功能',
            fallbackImg: 'https://static.vux.li/demo/3.jpg'
          }]

        }
        return allsolutions[this.$route.params.id]
      }
    }
  }
</script>


<style>

  .tabActive{
    background-color: #fbaa34;
  }

  #solution header{
    display:none;
  }


  .solution .footer{
    margin-top:0;
  }




</style>
