<template>

  <div id="nav" class="layout">

    <img src="../assets/img/logo.png" />
    <ul>
      <li><router-link to="/">首页</router-link></li>
      <li><router-link to="/product">产品中心</router-link></li>
      <li><router-link to="/solution">解决方案</router-link></li>
      <li><router-link to="/news">新闻资讯</router-link></li>
      <li><router-link to="/about">关于我们</router-link></li>
    </ul>

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
  li{
    list-style-type: none;
  }
</style>
