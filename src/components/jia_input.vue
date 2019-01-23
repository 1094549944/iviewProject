<template>
  <div>
    <input
      type="text"
      @input="handleInput"
      :value="value"
    >
    <p>使用bus 方法进行传递</p>
    <button @click="handleClick">点击</button>

  </div>
</template>

<script>
export default {
  name: 'jia_input',
  props: {
    value: {
      type: [String, Number],
      default: ''
    }
  },
  mounted () {
    console.log('this.bus====>', this.$bus)
  },
  methods: {
    handleInput (event) {
      const value = event.target.value
      this.$emit('input', value)
    },
    handleClick () {
      console.log('点击了')
      this.$bus.$emit('on-click', 'hello')
    }
  }
}
</script>

<style scoped>
button {
  background: pink;
}
</style>