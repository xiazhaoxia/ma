<template>

  <div class="product">
    <CommonHeader :title='title' :headlines='headline'></CommonHeader>
    <div class="main layout">
      <div class="left">
        <div>
          <div class="aboutus"><img src="../assets/img/friends.png"/> <span class="fs18 color-blue">关于我们</span></div>

          <img src="../assets/img/aboutus.png" class="mt16"/>
          <p class="btntitle color-666 fs14 mt36">关于我们</p>
          <p class="btntitle color-666 fs14 mt16">联系我们</p>

          <div class="aboutus mt72"><img src="../assets/img/call.png"/> <span class="fs18 color-blue">联系我们</span></div>

          <img src="../assets/img/contactus.png" class="mt16"/>
          <div class="address column-2 fs14 color-666 mt36" v-for="item in location">
            <div>{{item.location}}</div>
            <div>{{item.address}}</div>
          </div>
          <div class="mt30">
            <p v-for="item in contacts" class="fs14 color-666 lh30">
              {{item}}
            </p>
          </div>
        </div>
      </div>
      <div class="right">

        <div class="content">
          <h3>关于我们</h3>
          <div><b>天津**公司</b>5G是国际社会共同的创新成果。一段时间以来，西方一些国家将政治因素人为引入5G开发、
            利用与合作，甚至将有关问题政治化，采取歧视性做法，不仅不利于5G的发展，也有悖于公平竞争的原则，不符合国际社会的共同利益。

          　　给5G贴上政治标签，是人为切断了跨境流动、惠及全世界的创新福祉。“如果我们切断彼此间的联系，并禁止技术交流，
            全球的创新生态系统就会分崩离析，而且还会阻碍大量有可能改变世界的基础研究。”美国前财政部长亨利·保尔森在此次论坛上的话，道出了众多与会者的共同心声。
          </div>

          <div>
            给5G贴上政治标签，是人为切断了跨境流动、惠及全世界的创新福祉。“如果我们切断彼此间的联系，并禁止技术交流，
          </div>
        </div>

        <div class="content mt48">
          <h3>联系我们</h3>
          <div class="location">
            <div v-for="item in location">
              <span>{{item.location}}</span>
              <img :src="item.baiduUrl"/>
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
          {location: '北京办事处: ', address: '北京市海淀区中关村软件园**大厦a座3022', baiduUrl: '../static/img/logo.png'},
          {location: '天津办事处: ', address: '北京市海淀区中关村软件园**大厦a座3022', baiduUrl: '../static/img/logo.png'}
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

  .product .right h3{
    display: inline-block;
    border-left:2px solid #4b7fe5;
    font-size: 18px;
    padding:0px 24px;
    font-weight: normal;
    color: #454545;

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
  }
</style>
