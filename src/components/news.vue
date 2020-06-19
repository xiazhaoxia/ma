<template>

  <div class="news">

    <HeaderCommon title="新闻资讯" headlines="公司动态，我们对行业的观察"></HeaderCommon>
    <main class="main  layout">
      <div class="item mt36" v-for="item in newlist">
        <img :src="item.image"/>
        <div>
          <p class="title">{{item.title}}</p>
          <p class="content">{{item.content}}</p>
        </div>
        <span>{{item.time}}</span>

      </div>


    </main>

    <CommonFooter class="mt72"></CommonFooter>

  </div>
</template>


<script>
  import Mynav from './nav'
  import HeaderCommon from './CommonHeader'
  import CommonFooter from './CommonFooter'
export default{
    name: 'news',
    components: {
      Mynav,
      HeaderCommon,
      CommonFooter

    },
    data () {
      return {
        newlist: [
          {image: '../static/img/logo.png', title: 'UWB超宽带定位技术应用场景分析', content: 'UWB超宽带定位技术是国际领先的室内定位技术，其定位的稳定性强，精度高的特点可广泛应用于工业，制造业，服务业等各行业。提供精准的位置信息，丰富的数据统计和高效的人员管理，那么具体的场景有哪些呢？', time: '2019-11-23'}

        ]

      }
    }
  }
</script>

<style>

  .news{
    display: flex;
    flex-flow: column nowrap;
    background: url("../assets/img/news_banner.png") no-repeat;
    background-size: contain;
  }

  .news .main{
    display: flex;
    flex-flow: column nowrap;
  }
  .news .main .item{
    height: 120px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content:space-between;

  }
  .news .main .item img{
    width:185px;
    height: 120px;
    margin-right:48px;
  }
  .news .main .item >div{
    flex: 1;
  }

  .news .main .item .title{
    font-size:18px;
    color: #454545;
  }
  .news .main .item .content{
    font-size: 12px;
    color: #666;
    text-align: left;


  }
  .news .main .item span{
    width: 200px;
    color: #666;
  }


</style>
