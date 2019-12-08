<template>
  <div class="product" id="product">
    <CommonHeader :title="title" :headlines="headlines"></CommonHeader>
    <div class="main layout">
      <div v-for="item in products" class="item">
        
          <img :src="item.pic"/>
        <div v-show=" item.name !=''">
          <h3>{{item.name}}</h3>
          <div class="content fs14 color-666">
            <li>型号：{{item.type}}</li>
            <li>额定功率：{{item.type}}</li>{{item.type}}
            <li>类型：{{item.leixing}}</li>
            <li>覆盖范围:{{item.fanwei}}</li>
            <li>尺寸：{{item.chicun}}</li>
            <li>工作温度：{{item.wendu}}</li>
            <li>数据接口：{{item.jiekou}}</li>
            <li>防护等级：{{item.dengji}}</li>
            <li>供电：{{item.gongdian}}</li>

          </div>
        </div>
      </div>
    </div>
    <CommonFooter></CommonFooter>
  </div>

</template>


<script>
  import CommonHeader from './CommonHeader'
  import CommonFooter from './CommonFooter'
  export default{
    name: 'product',
    components: {
      CommonHeader,
      CommonFooter
    },
    data () {
      return {
        title: '厘米级高精度定位',
        headlines: '运营商**********大声道发送到发送方速度',
        products: [
          {name: '室内基站', pic: '../static/img/aa.png', type: 'UT100', gongdian: 'dfasdf', leixing: 'dfasdf', gonglv: '123', biaozhi: '', fanwei: '', chicun: '', wendu: '', jiekou: '', dengji: ''},
          {name: '室内基站', pic: '../static/img/aa.png', type: 'UT100', gongdian: 'dfasdf', leixing: 'dfasdf', gonglv: '123', biaozhi: '', fanwei: '', chicun: '', wendu: '', jiekou: '', dengji: ''},
          {name: '室内基站', pic: '../static/img/aa.png', type: 'UT100', gongdian: 'dfasdf', leixing: 'dfasdf', gonglv: '123', biaozhi: '', fanwei: '', chicun: '', wendu: '', jiekou: '', dengji: ''},
          {name: '', pic: '', type: '', gongdian: '', leixing: '', gonglv: '', biaozhi: '', fanwei: '', chicun: '', wendu: '', jiekou: '', dengji: ''},
          {name: '室内基站', pic: '../static/img/aa.png', type: 'UT100', gongdian: 'dfasdf', leixing: 'dfasdf', gonglv: '123', biaozhi: '', fanwei: '', chicun: '', wendu: '', jiekou: '', dengji: ''},
           {name: '室内基站', pic: '../static/img/aa.png', type: 'UT100', gongdian: 'dfasdf', leixing: 'dfasdf', gonglv: '123', biaozhi: '', fanwei: '', chicun: '', wendu: '', jiekou: '', dengji: ''},
            {name: '室内基站', pic: '../static/img/aa.png', type: 'UT100', gongdian: 'dfasdf', leixing: 'dfasdf', gonglv: '123', biaozhi: '', fanwei: '', chicun: '', wendu: '', jiekou: '', dengji: ''},
          {name: '室内基站', pic: '../static/img/aa.png', type: 'UT100', gongdian: 'dfasdf', leixing: 'dfasdf', gonglv: '123', biaozhi: '', fanwei: '', chicun: '', wendu: '', jiekou: '', dengji: ''}
        ]
      }
    }
  }
</script>

<style>
  .product{
    display: flex;
    flex-flow: column nowrap;
    background: url("../assets/img/product_banner.png") no-repeat;
    background-size: contain;
  }

  #product .head{
    color: #454545;
    text-shadow: 1px 1px 1px #fff;
    font-size: 24px;
  }

  #product .main{
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;
    align-content: space-between;
  }
  #product .main .item{
    width: 460px;
  }
  #product .main .item img{
    display: block;
    border-radius: 5px;

  }

  #product .main .item h3{
    margin:24px 0px;
  }

  #product .main .item .content{
    display: flex;
    flex-flow: row wrap;
    border-top:1px solid #bababa;
    justify-content: space-between;
    padding: 18px 0px;
  }

  #product .main .item .content li{
      flex: 0 0 50%;
      line-height: 30px;
      height: 30px;
      vertical-align: middle;
  }



</style>
