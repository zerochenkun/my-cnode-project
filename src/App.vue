<template>
  <div id="app">
    <Header></Header>
    <Postlist></Postlist>
  </div>
</template>

<script>
  import Header from "./components/Header.vue"
  import Postlist from "./components/Postlist"
  export default {
    name:'App',
    components:{
      Header,
      Postlist
    }
  }
</script>

<style>

</style>
