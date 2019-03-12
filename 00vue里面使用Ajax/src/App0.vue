<template>
  <div>
    <p v-if="!resName">loading...</p>
    <p v-else>星星最多的---- <a :href="resUrl">{{resName}}</a></p>
  </div>
</template>

<script>
  import Vue from 'vue'
  import VueResource from 'vue-resource'
  import axios from 'axios'
  // 声明使用vue插件
  Vue.use(VueResource) // 内部给vm和所有组件对象添加了一个属性： $http。可以用它来发送Ajax请求

  export default {
    data () {
      return {
        resName: '',
        resUrl: ''
      }
    },
    /* mounted () {
      const url = 'https://api.github.com/search/repositories?q=jj&sort=stars'
      // 使用vue-resource发送Ajax请求
      this.$http.get(url)
        .then(response => {
          const {name, html_url} = response.data.items[0]
          this.resName = name
          this.resUrl = html_url
        })
        .catch(err => {
          alert('失败' + err)
        })
    } */
    async mounted () {
      const url = 'https://api.github.com/search/repositories?q=jj&sort=stars'
      try {
        const response = await axios.get(url)
        // 取出响应数据
        const result = response.data
        const {name, html_url} = result.items[0]
        this.resName = name
        this.resUrl = html_url
      } catch (e) {
        alert('哈哈哈')
      }
    }
  }
  /*
  * 1.async/await的作用？
  *   简化promise的使用，不再使用.then或.catch来指定成功或失败的回调函数(消灭回调函数)
  *   已同步的编码方式实现异步编程
  * 2.哪里用await
  *   在返回promise对象的表达式的左侧（想得到的不是promise，而是想要异步执行返回的结果）
  * 3.哪里用async
  *   await所在函数定义的左侧
  * */
</script>

<style scoped>

</style>
