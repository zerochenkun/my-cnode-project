<template>
  <div id="app">
    <Header></Header>
    <div class="main">
      <router-view name="slideBar"></router-view>
      <router-view name="main"></router-view>
    </div>
  </div>
</template>

<script>
import Header from "./components/Header.vue";
export default {
  name: "App",
  components: {
    Header,
  }
};
</script>

<style  >
.main{
  width:80%;
}
</style>
