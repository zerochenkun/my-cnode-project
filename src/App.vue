<template>
  <div id="app">
    <Header></Header>
    <div class="main">
      <Postlist></Postlist>
    </div>
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import Postlist from "./components/Postlist";
export default {
  name: "App",
  components: {
    Header,
    Postlist
  }
};
</script>

<style  >
.main{
  width:80%;
}
</style>
