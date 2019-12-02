<template>
  <div>
    <div class="topbar">
      <mynav></mynav>
    </div>
    <header class="head layout colorFF">
      <p class="fs24">
        {{title}}
      </p>
      <p class="fs18">{{headlines}}</p>

    </header>
  </div>

</template>



<script>
  import mynav from './nav'
  export default{
    name: 'HeaderCommon',
    components: {
      mynav
    },
    props: ['title', 'headlines'],
    data () {
      return {

      }
    }
  }
</script>

<style>
  .topbar{
    position: absolute;
    top:40px;
    left:50%;
    transform: translateX(-50%);
    z-index:99;
  }

  .head{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-height: 360px;
  }
</style>
