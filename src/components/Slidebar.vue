<template>
  <div class="autherinfo">
    <div v-if="isLoading"></div>
    <div class="authersummay" v-else>
      <div class="topbar">作者</div>
      <router-link :to="{
                name:'user_info',
                params:{
                  name:userinfo.loginname
                }
              }">
        <img :src="userinfo.avatar_url" alt="">
      </router-link>
    </div>
    <div class="recent_topics">
      <div class="topbar">作者最近主题</div>
      <ul>
        <li v-for="item in limit5(userinfo.recent_topics)" @click="refresh">
          <router-link :to="{
            name:'post_content',
            params:{
              id:item.id,
              name:item.author.loginname
            }
          }">
            {{item.title}}
          </router-link>
        </li>
      </ul>
    </div>
    <div class="recent_replies">
      <div class="topbar">作者最近回复</div>
      <ul>
        <li v-for="item in limit5(userinfo.recent_replies)"  @click="refresh">
          <router-link :to="{
            name:'post_content',
            params:{
              id:item.id,
              name:item.author.loginname
            }
          }">
            {{item.title}}
          </router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  export default {
    name: "SlideBar",
    data(){
      return {
        isLoading: false,
        userinfo:{}
      }
    },
    methods: {
      refresh(){
        this.$router.go(0)
      },
      getData() {
        this.$http.get(`https://cnodejs.org/api/v1/user/${this.$route.params.name}`)
          .then(res => {
            if (res.data.success === true) {
              this.isLoading = false;
              this.userinfo = res.data.data
            }
          })
          .catch(function (err) {
            console.log(err)
          })
      }
    },
    computed:{
      limit5(){
        return function (arr = []){
          return arr.slice(0,5)
        }
      }
    },
    beforeMount(){
      this.isLoading = true;//加载成功之前显示加载动画
      this.getData();//在页面加载之前获取数据
    }
  }
</script>

<style scoped>
  .authersummay, .recent_replies, .recent_topics {
    background-color: #fff;
  }

  .autherinfo {
    width: 328px;
    float: right;
    margin-top: 0;
  }

  li {
    padding: 3px 0;
  }

  .recent_replies ul, .recent_topics ul {
    margin-top: 0px;
    margin-bottom: 0px;
    list-style: none;
    padding-left: 14px;
  }

  ul a {
    font-size: 12px;
    text-decoration: none;
    color: #778087;
  }

  .topbar {
    padding: 10px;
    background-color: #f6f6f6;
    height: 16px;
    font-size: 12px;
    margin-top: 10px;
  }

  img {
    height: 48px;
    width: 48px;
    border-radius: 3px;
    margin: 10px;
  }

  .loginname {
    width: 100px;
    float: right;
    margin-top: 22px;
    margin-right: 159px;
    font-size: 14px;
  }

  .loginname a {
    text-decoration: none;
    color: #778087;
  }

  .authersummay .topbar {
    margin-top: 0px;
  }
</style>
