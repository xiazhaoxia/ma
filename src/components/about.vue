<template>

  <div class="product">
    <CommonHeader :title='title' :headlines='headline'></CommonHeader>
    <div class="main layout">
      <div class="left">
        <div>
          <div class="aboutus"><img src="../assets/img/friends.png"/> <span class="fs18 color-blue">关于我们</span></div>

          <img src="../assets/img/aboutus.png" class="mt16"/>
          <p class="btntitle color-666 fs14 mt36">公司简介</p>
          <p class="btntitle color-666 fs14 mt16">公司优势</p>

          <div class="aboutus mt220"><img src="../assets/img/call.png"/> <span class="fs18 color-blue">联系我们</span></div>

          <img src="../assets/img/contactus.png" class="mt16"/>

        </div>
      </div>
      <div class="right">

        <div class="content">
          <h3>关于我们</h3>

          <div>
            <b>公司简介</b>
            天津启航物联科技有限公司 专注于智慧物联网核心技术：UWB高精度定位，高精度测距预警功能及智能可视化管理平台。目前已覆盖众多行业，包括智慧工业4.0，智能仓储物流，智慧监所以及煤炭化工等重点行业。

         高精度定位及测距技术是信息化、智慧化建设的重要核心组成部分，在行业各个环节中都能体现其应用价值，讲人员，物资，机械，车辆通过位置信息数字化，精准展示到可视化管理平台，实现实时位置展示，移动轨迹查询，危险报警，摄像联动等诸多应用服务功能，提高产业效率，降低成本，安全可靠。


         </div>


          <div>
            <b>公司优势</b>

            1.业界首个厘米级精度手机室内定位方案，专利技术，比传统WIFI/蓝牙定位精度高一个量级。</br>
            2.多项原创技术，产品适用性广，扩展性强，性价比高。</br>
            3.丰富的行业成功案例，覆盖多领域，多个行业。</br>
          </div>
        </div>

        <div class="content mt48">
          <h3>联系我们</h3>
          <!--<div class="location">-->
            <!--<div v-for="item in location">-->
              <!--<span>{{item.location}}</span>-->
              <!--<img :src="item.baiduUrl"/>-->
            <!--</div>-->
          <!--</div>-->
          <div class="contact_us">
            <div class="contact_map">
              <img src="@/assets/img/map.png"/>
            </div>
            <div class="address column-2 fs14" v-for="item in location">
              <div>{{item.location}}</div>
              <div>{{item.address}}</div>
            </div>
            <div class="mt30">
              <p v-for="item in contacts" class="fs14 lh30">
                {{item}}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <CommonFooter></CommonFooter>
  </div>
</template>


<script>
  import CommonFooter from './CommonFooter'
  import CommonHeader from './CommonHeader'
  export default{
    name: 'about',
    components: {
      CommonHeader,
      CommonFooter
    },
    data () {
      return {
        title: '关于我们',
        headline: '更准确的室内定位',
        location: [
          {location: '北京分部：', address: ' 北京市丰台区华夏幸福创新中心B座6层', baiduUrl: '../static/img/logo.png'},
          {location: '天津总部：', address: ' 天津市武清开发区创业总部基地B11号', baiduUrl: '../static/img/logo.png'}
        ],
        contacts: ['微信：888888', '邮箱:xiazhaoxia@111.com']

      }
    }
  }
</script>

<style>
  .product{
    display: flex;
    flex-flow: column nowrap;
    background: url("../assets/img/aboutus_banner.png") no-repeat;
    background-size: contain;
  }

  .product .main{
    display: flex;
    flex-flow: row nowrap;
    min-height: calc(100vh - 400px);
  }
  .product .left{
    width:270px;
  }
  .product .right{
    width:730px;
  }


  .product .right .content{
    line-height: 26px;

    vertical-align: middle;
    font-size:14px ;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  .product .right .content>div{
    margin-top: 30px;
  }
  .product .right .content b{

    color: #4b7fe5;
    display:block;
    font-weight: 500;

  }
  .product .right .content .location{
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
  }
  .product .right .content .location span{
    display: block;
  }
  .product .right .content .location img{
    width: 360px;
    height: 224px;
  }
  .aboutus{
    display: flex;
    flex-flow: row nowrap;
    justify-content: flex-start;
  }
  .aboutus img{
    margin-right: 10px;
  }
  .mt220{
    margin-top:220px;
  }
  .btntitle{
    width:200px;
    height: 36px;
    line-height: 36px;
    vertical-align: middle;
    background-color:#dfe2e4 ;
    text-align: center;
  }
  .column-2{
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
  }
  .column-2>div:first-child{
      flex: 0 0 auto;
  }
  .column-2>div:last-child{
      flex: 1 1 auto;

  }
  .address{
    width:90%;
    margin-top: 10px;
  }

  .contact_us {
    margin-top:20px;
    width:100%;
  }
  .contact_us .contact_map {
    width: 100%;
    height: 400px;
  }
  .contact_us .contact_tell_type {
    width: 100%;
    margin: 36px 0 0 0;
  }
  .contact_us .contact_tell_type  p {
    line-height: 0;
    margin-bottom: 20px;
  }
  .contact_us .contact_tell_type  p img {
    margin-right: 24px;
    vertical-align: middle;
  }
  .contact_tell_type p a {
    color: #666;
  }
  .contact_map img{
    width: 100%;
    height: 100%;
    overflow: hidden;
  }
</style>
