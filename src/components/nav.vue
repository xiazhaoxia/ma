<template>

  <div id="nav" class="layout">

    <img src="../assets/img/logo.png" />
    <ul>
      <li><router-link to="/">首页</router-link></li>
      <li><router-link to="/product">产品中心</router-link></li>
      <li class="wrap" @click="showToggle()"><a>解决方案</a>
        <ul v-show="isShowSubItem">
          <li>
            <router-link to="/solution/1">智慧工厂</router-link>
          </li>
          <li>
            <router-link to="/solution/2">智慧狱所</router-link>
          </li>
          <li>
            <router-link to="/solution/3">矿井隧道</router-link>
          </li>
        </ul>
      </li>
      <li><router-link to="/news">新闻资讯</router-link></li>
      <li><router-link to="/about">关于我们</router-link></li>
    </ul>

  </div>
</template>
<script>
  export default {
    name: 'mynav',
    data () {
      return {
        isShowSubItem: false
      }
    },
    methods: {
      showToggle () {
        this.isShowSubItem = !this.isShowSubItem
      }
    }
  }
</script>

<style>
  #nav{
    color:#666;
    display: flex;
    flex-direction: row;
    background-color: white;
    height:56px;

    font-size:16px;
    width:1000px;



  }

  #nav ul{
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    flex:1;
  }

  #nav img{
    width:290px;
    height:46px;
    vertical-align: middle;
    margin: 5px 0px;
    flex-grow: 0 0 auto;
  }

  #nav a:link,
  #nav a:visited{
    color:#666;
    text-decoration: none;
  }
  #nav a:hover,
  #nav a:active{
    color:#4b7fe5;
    cursor:pointer;
  }
  #nav .wrap a ul{
    display: none;
  }

  #nav .wrap a:hover ul,
  #nav .wrap a:active ul{
    display: block;
  }



  li{
    list-style-type: none;
  }
  #nav .wrap{
    position: relative;
  }
  #nav .wrap ul{
    width:120px;
    position: absolute;
    left:calc(2px - 50%);
    top:40px;
    flex-direction: column;
    display: flex;
    background: #fff;
    color:#666;
    font-size: 16px;
  }
  #nav .wrap li{
    height: 40px;
  }
</style>
