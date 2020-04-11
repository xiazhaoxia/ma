<template>

  <div class="solution" id="solution">
    <CommonHeader></CommonHeader>
    <div id="main">

      <!--<li v-for="item in this.allsolutions">-->
        <!--{{item.title}}-->
        <!--<img :src="item.img"/>-->
      <!--</li>-->
      <div class="myswiper">

        <swiper :show-dots="false"  auto height="720px" v-model="swiperItemIndex" >
          <swiper-item v-for="(item, index) in allsolutions" :key="index" class="swiper-demo-img">
            <x-img :src="item.img" ></x-img>
          </swiper-item>
        </swiper>
        <div  class="solution-tabbar">

            <tab v-model="swiperItemIndex" class="solution-tab layout fs16 color-fff" bar-active-color="#fbaa34" active-color="#fbaa34">
              <tab-item class="f" :selected="index==swiperItemIndex" v-for="(item, index) in allsolutions" @click="swiperItemIndex = index" :key="index">{{item.title}}</tab-item>
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
        swiperItemIndex: 1,
        pid: 1
      }
    },
    mounted () {
      this.pid = this.$route.params.id
    },
    beforeRouteUpdate (to, from, next) {
      console.log('****************Test1*******Update***********')
      console.log(this, 'Update') // 当前组件实例
      console.log('to', to)
      console.log('from', from)
      console.log('next', next)
      this.pid = to.params.id
      console.log(this.pid)

      next()
    },
    computed: {
      allsolutions: function () {
        let pages = []
        // 智慧工工厂
        let gongchang = [{
          url: 'javascript:',
          img: '../static/img/industry_a.png',
          title: '定位方案'
        }, {
          url: 'javascript:',
          img: '../static/img/industry_b.png',
          title: '系统架构',
          fallbackImg: 'https://static.vux.li/demo/3.jpg'
        }, {
          url: 'javascript:',
          img: '../static/img/industry_c.png',
          title: '网络部署',
          fallbackImg: 'https://static.vux.li/demo/3.jpg'
        }, {
          url: 'javascript:',
          img: '../static/img/industry_d.png',
          title: '软件功能',
          fallbackImg: 'https://static.vux.li/demo/3.jpg'
        }]

        // 智慧狱所
        let yusuo = [{
          url: 'javascript:',
          img: '../static/img/prison_a.png',
          title: '定位方案'
        }, {
          url: 'javascript:',
          img: '../static/img/prison_b.png',
          title: '系统架构',
          fallbackImg: 'https://static.vux.li/demo/3.jpg'
        }, {
          url: 'javascript:',
          img: '../static/img/prison_c.png',
          title: '网络部署',
          fallbackImg: 'https://static.vux.li/demo/3.jpg'
        }, {
          url: 'javascript:',
          img: '../static/img/prison_d.png',
          title: '软件功能',
          fallbackImg: 'https://static.vux.li/demo/3.jpg'
        }]

        // 隧道
        let suidao = [{
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

        pages.push(gongchang)
        pages.push(yusuo)
        pages.push(suidao)

        console.log(pages[this.pid - 1])
        return pages[this.pid - 1]
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

  .myswiper{
    height:calc(100vh-104px);
  }


</style>
