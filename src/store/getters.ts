const getters = {
  appNameWithVersion: (state: { appName: any }) => {
    return `${state.appName}======>v2.0`
  }
}
export default getters
