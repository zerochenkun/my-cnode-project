<template>
  <div class="UserInfo">
    <div class="loading" v-if="isLoading">
      <img src="../assets/loading.gif">
    </div>
    <div class="userInfomation" v-else>
      <section >
        <img :src="userinfo.avatar_url" alt="">
        <span>{{userinfo.loginname}}</span>
        <p>{{userinfo.score}}积分</p>
        <p>注册时间{{userinfo.create_at | formatDate}}</p>
      </section>
      <div class="replies">
        <h4>回复的主题</h4>
        <li v-for="item in userinfo.recent_replies">
          <router-link :to="{name:'post_content',params:{
            id:item.id
          }}">
            {{item.title}}
          </router-link>
        </li>
      </div>
      <div class="topics">
        <h4>创建的主题</h4>
        <li v-for="item in userinfo.recent_topics">
          <router-link :to="{name:'post_content',params:{
            id:item.id,
          }}">{{item.title}}</router-link>
        </li>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "UserInfo",
    data() {
      return {
        isLoading: false,
        posts: {}
      }
    },
    methods: {
      getArticleData() {
        this.$http.get(`https://cnodejs.org/api/v1/user/${this.$route.params.name}`)
          .then(res => {
            if (res.data.success === true) {
              this.isLoading = false
              this.userinfo = res.data.data
            }
          })
          .catch(function (err) {
            console.log(err)
          })
      }
    },
    beforeMount() {
      this.isLoading = true;
      this.getArticleData();
    },
  }
</script>

<style scoped>
  .userInfomation img {
    width: 30px;
  }
  .userInfomation div li {
       list-style: none;
  }
  .userInfomation div li a {
    text-decoration: none;
  }
</style>