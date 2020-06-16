<template>
  <div class="header">
    <img src="../assets/cnodejs_light.svg" alt="">
    <ul>
      <li><a href="">首页</a></li>
      <li><a href="">新手入门</a></li>
      <li><a href="">API</a></li>
      <li><a href="">关于</a></li>
      <li><a href="">注册</a></li>
      <li><a href="">登陆</a></li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: "Header"
  }
</script>

<style scoped>
  .header{
    display: flex;
    text-align: center;
    background-color:#5a5555;
    height: 40px;
  }
  img{
    max-width:120px;
    margin-left:50px;
  }

  ul{
    list-style:none;
    float:right;
  }
  li{
    display:inline-block;
    padding-right:15px;
    padding-left:15px;
  }
  a{
    text-decoration:none;
    color:#ccc;
    font-size:14px;
    text-shadow:none;
  }

</style>