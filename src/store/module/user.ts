const state = {
  userName: '我是module->user========张三'
}
const getters = {
  userNameWithFirstLetter: state => {
    return state.userName.substr(0, 1)
  }
}
const mutations = {}
const actions = {}
export default {
  namespaced: true, //  使用命名空间
  state,
  getters,
  mutations,
  actions
}
