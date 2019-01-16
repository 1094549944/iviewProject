<template>
  <div>
    This is an about page
    <button @click="getData">请求数据</button>
  </div>
</template>

<script>
export default {
  data () {
    return {
      data: [{
        name: '张三',
        age: 12
      }, {
        name: '王五',
        age: 24
      }]
    }
  },
  methods: {
    getData: function () {

      let dataValue = JSON.stringify(this.data)
      console.log(dataValue)
      this.axios.post('http://localhost:5000/test', {
        data: dataValue
      }).then((response) => {

        console.log(response)

      }).catch((response) => {
        console.log(response)
      })
    }
  }
}
</script>

<style scoped>
</style>