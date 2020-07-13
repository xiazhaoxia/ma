<template>

  <div class="solution" id="solution">
    <CommonHeader></CommonHeader>
    <div id="main" class="main">

      <!--<li v-for="item in this.allsolutions">-->
        <!--{{item.title}}-->
        <!--<img :src="item.img"/>-->
      <!--</li>-->
      <div class="myswiper">
        <div  class="solution-tabbar">

          <tab v-model="swiperItemIndex" class="solution-tab layout fs16 color-fff" bar-active-color="#fbaa34" active-color="#fbaa34">
            <tab-item class="f" :selected="index==swiperItemIndex" v-for="(item, index) in allsolutions" @click="swiperItemIndex = index" :key="index">{{item.title}}</tab-item>
          </tab>

        </div>
        <!--<swiper :show-dots="false"  auto  v-model="swiperItemIndex" >-->

          <!--<swiper-item v-for="(item, index) in allsolutions" :key="index" class="swiper-demo-img">-->
            <!--<x-img :src="item.img" ></x-img>-->
          <!--</swiper-item>-->
        <!--</swiper>-->

        <li v-for="(item, index) in allsolutions" :key="index" class="swiper-demo-img">

          <img :src="item.img" v-show="index==swiperItemIndex"></img>

        </li>

        <div v-if="pid==2">
          <img src="@/assets/img/prison/prison001.png"/>
          <img src="@/assets/img/prison/prison002.png"/>
          <img src="@/assets/img/prison/prison003.png"/>
          <img src="@/assets/img/prison/prison004.png"/>
          <img src="@/assets/img/prison/prison005.png"/>
          <img src="@/assets/img/prison/prison006.png"/>
          <img src="@/assets/img/prison/prison007.png"/>

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
          img: '../static/img/industry_a.jpg',
          title: '定位方案'
        }, {
          url: 'javascript:',
          img: '../static/img/industry_b.jpg',
          title: '系统架构',
          fallbackImg: 'https://static.vux.li/demo/3.jpg'
        }, {
          url: 'javascript:',
          img: '../static/img/industry_c.jpg',
          title: '网络部署',
          fallbackImg: 'https://static.vux.li/demo/3.jpg'
        }, {
          url: 'javascript:',
          img: '../static/img/industry_d.jpg',
          title: '软件功能',
          fallbackImg: 'https://static.vux.li/demo/3.jpg'
        }]

        // 智慧狱所
        let yusuo = [{
          url: 'javascript:',
          img: '../static/img/prison_a.jpg',
          title: '定位方案'
        }, {
          url: 'javascript:',
          img: '../static/img/prison_b.jpg',
          title: '系统架构',
          fallbackImg: 'https://static.vux.li/demo/3.jpg'
        }, {
          url: 'javascript:',
          img: '../static/img/prison_c.jpg',
          title: '网络部署',
          fallbackImg: 'https://static.vux.li/demo/3.jpg'
        }, {
          url: 'javascript:',
          img: '../static/img/prison_d.jpg',
          title: '软件功能',
          fallbackImg: 'https://static.vux.li/demo/3.jpg'
        }]

        // 隧道
        let suidao = [{
          url: 'javascript:',
          img: '../static/img/tunnel_a.jpg',
          title: '定位方案'
        }, {
          url: 'javascript:',
          img: '../static/img/tunnel_b.jpg',
          title: '系统架构',
          fallbackImg: 'https://static.vux.li/demo/3.jpg'
        }, {
          url: 'javascript:',
          img: '../static/img/tunnel_c.jpg',
          title: '网络部署',
          fallbackImg: 'https://static.vux.li/demo/3.jpg'
        }, {
          url: 'javascript:',
          img: '../static/img/tunnel_d.jpg',
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

  #solution .main{
    margin:60px auto 0;
  }

  .solution .footer{
    margin-top:0;
  }

  .myswiper{
    width:100%;
    height: auto;
  }

  .myswiper img{
    width:100%;
  }

  .myswiper .vux-tab-item{
    cursor: pointer;
  }
  .vux-swiper{
    height:720px !important;
  }



</style>
