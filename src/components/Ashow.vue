<template>
  <div>
    <div> 我是ashow=======> <label for="">{{content}}</label></div>
    <div>我要接收bus=====><span for="">{{msg}}</span></div>
  </div>
  </div>
  </div>
</template>

<script>
export default {
  name: 'Ashow',
  props: {
    content: {
      type: [String, Number],
      default: ''
    }
  },
  data () {
    return {
      msg: ''
    }
  },
  mounted () {
    this.$bus.$on('on-click', msg => {
      console.log('我接收了')
      this.msg = msg
    })
  }
}
</script>

<style scoped>
span {
  background: pink;
}
label {
  background: orchid;
}
</style>