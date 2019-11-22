<template>

  <div id="nav">

    <li><img src="../assets/img/logo.png"/></li>
    <li><router-link to="/">首页</router-link></li>
    <li><router-link to="/product">产品中心</router-link></li>
    <li><router-link to="/solution">解决方案</router-link></li>
    <li><router-link to="/news">新闻资讯</router-link></li>
    <li><router-link to="/about">关于我们</router-link></li>
  </div>
</template>
<script>
  export default {
    name: 'mynav'
  }
</script>

<style>
  #nav{
    color:#666;
    display:flex;
    flex-direction: row;
    background-color: white;
    justify-content: center;
    height:56px;
    line-height: 56px;
    vertical-align: middle;
    font-size:16px;
    width:1000px;
    margin:40px auto;
  }
  #nav li{
    flex:1;
  }

  #nav li img{
    width:290px;
    height:46px;
    margin: 5px;

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
  li{
    list-style-type: none;
  }
</style>
