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
    <div>使用命名空间</div>

    <div>{{userName}}</div>
    <hr />
    <hr />
    <div>使用getters</div>
    <div>直接使用getters==={{getGetterName}}</div>
    <div>{{getAppNameWithVersion}}</div>
    <div>使用mapGetters =====>{{getAppNameWithVersionFun}}</div>
  </div>
</template>

<script>
import jia_input from '_c/jia_input.vue'
import Ashow from '_c/Ashow.vue'
// import {mapState} from 'vuex'


// import { createNamespacedHelpers } from 'vuex'// es6 的解构赋值
// const { mapState } = createNamespacedHelpers('user')

import { mapState, mapGetters } from 'vuex'


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
    // 没有命名空间的使用
    // ...mapState({
    //   appName: state => state.appName,
    //   userName: state => state.user.userName
    // }),
    // 使用了命名空间，并且引入了createNamespacedHelpers 函数
    // ...mapState({
    //   userName: state => state.userName
    // }),

    // 使用命名空间，但是没有引入createNamespacedHelpers
    ...mapState('user', {
      userName: state => state.userName
    }),
    appNameFun () {
      return this.$store.state.appName
    },
    userNameFun () {
      return this.$store.state.user.userName
    },


    // 获取gettters 的内容
    getAppNameWithVersion () {
      return this.$store.getters.appNameWithVersion
    },

    // 直接获取
    getGetterName () {
      return this.$store.getters.appNameWithVersion
    }


    // ...mapGetters({
    //   getAppNameWithVersionFun: state => state.getAppNameWithVersionFun
    // })
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