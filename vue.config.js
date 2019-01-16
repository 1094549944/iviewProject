/**
 * 基础路径：base_url:如果是生产环境，那么就是根目录下面的iview-admin 如果不是，那么就是/
 *
 * chainWebpack 的链式调用
 */

const BASE_URL = process.env.NODE_ENV === 'production' ? '/iview-admin' : '/'
const path = require('path')
const resolve = dir => {
  return path.join(__dirname, dir)
}
module.exports = {
  baseUrl: BASE_URL,
  chainWebpack: config => {
    config.resolve.alias
      .set('@', resolve('src'))
        .set('_c', resolve('src/components')),
        
  },
  //打包时不生成.map文件，同时加快打包速度
    procutionSourceMap: false,
    devServer: {
        proxy:'http://localhost:4000'
    }
}
