<template>
  <div>
    <div class="topbar">
      <mynav>
        <li>
          <div class="header-tel ml5">
            <span>咨询微信/电话</span>
            <span class="color-orange fs18 fw600">12811111111</span>
          </div>
        </li>
      </mynav>
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


  .head{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-height: 360px;
  }
</style>
