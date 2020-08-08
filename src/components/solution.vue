<template>

  <div class="solution pic" id="solution" :style="{backgroundImage:'url('+backurl+')'}">
    <CommonHeader></CommonHeader>
    <div class="main layout">

      <!--<li v-for="item in this.allsolutions">-->
      <!--{{item.title}}-->
      <!--<img :src="item.img"/>-->
      <!--</li>-->

      <div  class="left">
        <div class="page-title">解决方案</div>
        <div class="page-tab">
          <li v-for="(item,index) in tabs" :class="{selected:index+1==pid}">
            <span @click="goSolutions(index+1)" >{{item}}</span>
          </li>
        </div>


      </div>

      <div class="right">
        <li v-for="(item, index) in allsolutions" :key="index">
          <div class="split mb32">
            <div class="pic-title">{{item.title}}</div>
          </div>
          <div class="des mb32">
            {{item.des}}
          </div>
          <img :src="item.img" class="mb32"/>
        </li>
        <div class="pic-more" v-if="pid==1">
          <img src="@/assets/img/industry/industry001.png"/>
          <img src="@/assets/img/industry/industry002.png"/>
          <img src="@/assets/img/industry/industry003.png"/>
          <img src="@/assets/img/industry/industry004.png"/>
          <img src="@/assets/img/industry/industry005.png"/>
        </div>
        <div class="pic-more" v-if="pid==2">
          <img src="@/assets/img/prison/prison001.png"/>
          <img src="@/assets/img/prison/prison002.png"/>
          <img src="@/assets/img/prison/prison003.png"/>
          <img src="@/assets/img/prison/prison004.png"/>
          <img src="@/assets/img/prison/prison005.png"/>
          <img src="@/assets/img/prison/prison006.png"/>

        </div>
        <div class="pic-more" v-if="pid==3">
          <img src="@/assets/img/tunnel/tunnel001.png"/>
          <img src="@/assets/img/tunnel/tunnel002.png"/>
          <img src="@/assets/img/tunnel/tunnel003.png"/>
          <img src="@/assets/img/tunnel/tunnel004.png"/>
          <img src="@/assets/img/tunnel/tunnel005.png"/>
          <img src="@/assets/img/tunnel/tunnel006.png"/>
        </div>
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
        pid: 1,
        tabs: ['智慧工业', '智慧狱所', '矿井隧道'],
        urls: ['/static/img/industry_banner.png', '/static/img/prison_banner.png', '/static/img/tunnel_banner.png']
      }
    },
    mounted () {
      this.pid = this.$route.params.id
    },
    methods: {
      goSolutions (id) {
        this.$router.push(`/solution/${id}`)
      }
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
      backurl () {
        return this.urls[this.pid - 1]
      },
      allsolutions: function () {
        let pages = []
        // 智慧工工厂
        let gongchang = [{
          url: 'javascript:',
          img: '../static/img/industry_a.jpg',
          title: '定位方式',
          des: '定位方式的优势'
        }, {
          url: 'javascript:',
          img: '../static/img/industry_b.jpg',
          title: '系统架构',
          des: '定位方式的优势'
        }, {
          url: 'javascript:',
          img: '../static/img/industry_c.jpg',
          title: '网络部署',
          des: '定位方式的优势'
        }, {
          url: 'javascript:',
          img: '../static/img/industry_d.jpg',
          title: '软件功能',
          des: '定位方式的优势'
        }]

        // 智慧狱所
        let yusuo = [{
          url: 'javascript:',
          img: '../static/img/prison_a.jpg',
          title: '定位方式',
          des: '定位方式的优势'
        }, {
          url: 'javascript:',
          img: '../static/img/prison_b.jpg',
          title: '系统架构',
          des: '定位方式的优势'
        }, {
          url: 'javascript:',
          img: '../static/img/prison_c.jpg',
          title: '网络部署',
          des: '定位方式的优势'
        }, {
          url: 'javascript:',
          img: '../static/img/prison_d.jpg',
          title: '软件功能',
          des: ''
        }]

        // 隧道
        let suidao = [{
          url: 'javascript:',
          img: '../static/img/tunnel_a.jpg',
          title: '定位方式',
          des: ''
        }, {
          url: 'javascript:',
          img: '../static/img/tunnel_b.jpg',
          title: '系统架构',
          des: ''
        }, {
          url: 'javascript:',
          img: '../static/img/tunnel_c.jpg',
          title: '网络部署',
          des: ''
        }, {
          url: 'javascript:',
          img: '../static/img/tunnel_d.jpg',
          title: '软件功能',
          des: ''
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


<style >
  #solution .head{
    min-height: 220px;
  }
  .pic{
    background-repeat: no-repeat;
    background-size: contain;
  }


  #solution .layout{
    display: flex;
    flex-direction: row;
    justify-content: space-between;

  }
  #solution .layout .left .page-title{
    width:150px;
    height:30px;
    background-color: #dedede;
    font-size:18px;
    color:#333;
    line-height: 30px;
    vertical-align: middle;
    padding-left:10px;
  }

  #solution .layout .left .page-tab{
    margin-top:20px;
  }
  #solution .layout .left .page-tab li{
    font-size:14px;
    color:#666;
    height: 30px;
    line-height: 30px;
    vertical-align: middle;
    padding-left:10px;

  }

  #solution .layout .left .page-tab li.selected{
    color:#4e81e2;
    border-left:2px solid #4e81e2;
  }

  #solution .layout .right{
    width:820px;
    text-align: left;
  }
  #solution .layout .right .des{
    font-size:14px;
    color:#666;
  }
  #solution .layout .right img{
    width:100%;
  }

  #solution .layout .right .pic-more img{
    margin-top:32px;
  }

  #solution .split{
    border-bottom:1px solid #4e81e2;
    text-align: left;
  }

  #solution .pic-title{
    border-bottom: 2px solid #4e81e2;
    display: inline-block;
    font-size: 18px;
    color:#4e81e2;
  }





</style>
