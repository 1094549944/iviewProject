<template>
  <div>
    我是store
    <!-- <div>方法1</div>
    <jia_input v-model="inputValue"></jia_input> -->
    <hr />
    <div>方法2</div>
    <jia_input
      :value="inputValue"
      @input="handleInput"
    ></jia_input>
    <hr />
    <div><label for="">{{inputValue}}</label></div>
    <div>父子组件传参</div>
    <Ashow :content="inputValue"></Ashow>
    <br />
    <hr />
    <div>使用store接收参数======><span>{{appNameFun}}</span></div>
    <br />
    <hr />
    <div>使用module中的user ,来接收user中的userName=====><span>{{userNameFun}}</span></div>
    <br />
    <hr />
    <div>使用mapState接收数值=====appName===={{appName}}<br /> ======userName====<span>{{userName}}</span></div>
    <br />
    <hr />
    <div>使用</div>
  </div>
</template>

<script>
import jia_input from '_c/jia_input.vue'
import Ashow from '_c/Ashow.vue'
import { mapState } from 'vuex'//es6 的解构赋值
export default {
  name: 'store',
  data () {
    return {
      inputValue: '我是传过来的值',

    }
  },
  components: {
    jia_input,
    Ashow
  },
  methods: {
    handleInput (val) {
      this.inputValue = val

    }
  },
  computed: {
    ...mapState({
      appName: state => state.appName,
      userName: state => state.user.userName
    }),
    appNameFun () {
      return this.$store.state.appName
    },
    userNameFun () {
      return this.$store.state.user.userName
    },
    getMapState () {

    }
  }
}
</script>

<style scoped>
span {
  background: yellow;
}
label {
  background: orchid;
}
</style>