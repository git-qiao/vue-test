<template>
  <div>
    <p v-show="!resName">loading...</p>
    <p v-show="resName">结果就是：<a :href="resUrl"></a>{{resName}}</p>
  </div>
</template>

<script>
  import axios from 'axios'
  export default {
    data () {
      return {
        resName: '',
        resUrl: ''
      }
    },
    async mounted () {
      const url = 'https://api.github.com/search/repositories?q=jj&sort=stars'
      const response = await axios.get(url)
      console.log(response.data.items)
      const {name, html_url} = response.data.items[0]
      this.resName = name
      this.resUrl = html_url
    }
  }
</script>

<style scoped>

</style>
