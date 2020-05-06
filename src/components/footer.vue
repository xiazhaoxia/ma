<template>
  <div class="footer">

    <div class="navigation">
      <mynav style="flex:4"></mynav>
      <div class="address">
        <li>电话/微信：18510501185</li>
        <li>邮箱：qihiuwb@163.com</li>
        <li>地址：天津市武清开发区创业总部基地B11号</li>
      </div>
    </div>
    <div class="version">{{version}}</div>
  </div>
</template>

<script>
  import mynav from './nav.vue'
  export default{
    name: 'homefooter',
    components: {
      mynav
    },
    data () {
      return {
        msg: 'I am footer',
        version: '备案信息'
      }
    }
  }
</script>

<style>
  .footer{
    width:100%;
    height: 220px;
    background-color:#f1f1f1 ;
    margin-top: 72px;
  }

  .footer #nav{
    background-color:#f1f1f1 ;
  }
  .footer .navigation{
    width:1000px;
    height:172px;
    margin:0 auto;
    font-size:14px;
    color:#999;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

  }
  .footer .address{
    text-align: left;
    flex: 1;
    font-size:14px;
    margin-left: 48px;
  }
  .footer .version{
    border-top:1px solid #ccc;
    font-size:12px;
    color:#999;
    height:48px;

  }
</style>
