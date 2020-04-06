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
            <li>额定功率：{{item.gonglv}}</li>
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
        headlines: '运营商级品质、寿命长、成本低',
        products: [
          {name: '室内基站', pic: '../static/img/aa.png', type: 'UT100-AE', gongdian: '12VDC/PoE', leixing: '吸顶型', gonglv: '<3W', biaozhi: '', fanwei: '>100米', chicun: '直径200MM,高45MM', wendu: '-30～70℃', jiekou: 'WIFI/网线/4G', dengji: 'IP50(不防水)'},
          {name: '室外基站', pic: '../static/img/bb.png', type: 'UT100-AEI', gongdian: '12VDC/PoE', leixing: '工业型', gonglv: '<5W', biaozhi: '', fanwei: '>200米', chicun: '180mm × 130mm × 70mm', wendu: '-30～70℃', jiekou: 'WIFI/网线/4G', dengji: 'IP65(防尘防水)'},
          {name: '防爆型基站', pic: '../static/img/cc.png', type: 'UT100-AEX', gongdian: '12VDC/PoE', leixing: '隔爆型', gonglv: '<5W', biaozhi: '', fanwei: '>200米', chicun: '200mm ×200mm × 170mm', wendu: '-30～70℃', jiekou: 'WIFI/网线', dengji: 'IP65(防尘防水)'},
          {name: '', pic: '', type: '', gongdian: '', leixing: '', gonglv: '', biaozhi: '', fanwei: '', chicun: '', wendu: '', jiekou: '', dengji: ''},
          {name: '卡片型标签', pic: '../static/img/dd.png', type: 'UT100-TA', gongdian: '可充电锂电池', leixing: '工卡型', gonglv: '123', biaozhi: '', fanwei: '', chicun: '86mm × 54mm × 4.5mm', wendu: '-30～70℃', jiekou: '', dengji: 'IP50(不防水)'},
           {name: '资产型标签', pic: '../static/img/ee.png', type: 'UT100-TB', gongdian: '可充电锂电池', leixing: '资产型、安全帽型', gonglv: '123', biaozhi: '', fanwei: '', chicun: '50mm × 36mm × 20mm', wendu: '-30～70℃', jiekou: '', dengji: 'IP65(防水)'},
            {name: '轻巧型标签', pic: '../static/img/ff.png', type: 'UT100-TC', gongdian: '可充电锂电池', leixing: '物资轻巧型', gonglv: '123', biaozhi: '', fanwei: '', chicun: '52mm × 24mm × 8mm', wendu: '-30～70℃', jiekou: '', dengji: 'IP68(全密封防尘防水) '},
          {name: '腕表型标签', pic: '../static/img/gg.png', type: 'UT100-TW', gongdian: '可充电锂电池', leixing: '手环腕表型', gonglv: '123', biaozhi: '', fanwei: '', chicun: '43mm × 40mm × 13mm', wendu: '-30～70℃', jiekou: '', dengji: 'IP65(防水)'}
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
    font-weight: 500;
    border-left: 3px solid #4b7fe5;
    line-height: 18px;
    font-size: 18px;
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
