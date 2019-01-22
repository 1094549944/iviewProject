<template>
  <div>
    <div> 我是ashow=======> {{content}}</div>
    <div>我要接收bus=====>{{msg}}</div>
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
</style>