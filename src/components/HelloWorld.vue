<template>
  <div>
    基本信息
    ======={{res.phoneNo}}
    data-phoneNo="phoneNo" value="res['phoneNo']" name="res['phoneNo']+Name"

    <ul
      v-for="(value,index) in localJson.data.infoList"
      :key="index"
    >
      <li><span>{{value.label}}</span>====<span>{{value.value}}</span></li>
    </ul>
    <hr />
    <ul
      v-for="(value,k) in localJson.data.copyInfo"
      :key="k"
    >
      <li><span>{{value.label}}====</span><span>{{value.name}}===</span><span>{{value.value}}</span></li>
      <p>显示列表</p>
      <ul
        v-for="(item,m) in value.list"
        :key="m"
      >
        <li><span>{{item.name}}</span><span>{{item.value}}</span></li>
      </ul>
    </ul>
    <hr />
    邮寄信息
    <ul
      v-for="(value,k) in localJson.data.postProjectInfo"
      :key="k"
    >

      <li>
        <span>{{value.label}}===</span><span>{{value.name}}</span>====<span>{{value.value}}</span>
      </li>
      <p>显示列表</p>
      <ul
        v-for="(item,m) in value.list"
        :key="m"
      >
        <li><span>{{item.value}}</span><span>{{item.name}}</span></li>
      </ul>
    </ul>
    <hr />
    地址信息

    <ul
      v-for="(value,index) in localJson.data.transportList"
      :key="index"
    >
      <li><span>{{value.label}}</span>====<span>{{value.value}}</span></li>
    </ul>
    <hr />
  </div>
</template>
<script>
export default {
  data () {
    return {
      res: {
        phoneNo: '123230423',
        patientName: '海绵宝宝',
        copyPurpose: {
          // 复印用途
          value: '001',
          name: "保险报销",
          //复印用途列表
          list: [
            {
              value: '001',
              name: '保险报销'
            },
            {
              value: '002',
              name: '转院治疗'
            }
          ]
        },


      },
      response: {
        data: {
          infoList: [
            {
              value: '1833039123',
              // 申请人手机号
              key: 'phoneNO'
            },
            {
              value: '海绵宝宝',
              // 患者姓名
              key: 'patientName'
            },
            {
              value: '130283199302120123',
              // 患者身份证号
              key: 'cardID'
            },
            {
              value: '12430_234xdfs',
              // 住院号
              key: 'inPatientNo'
            },
            {
              value: '2019-01-1至2019-01-18',
              // 住院日期
              key: 'lengthOfStay'
            },
            // 代理人
            {
              value: '张三',
              //代理人姓名
              key: 'agentName'
            },
            {
              value: '130283199302120123',
              //代理人身份证
              key: 'agentIdCard'
            }
          ],
          // 复印信息
          copyInfo: [
            {
              // 复印用途
              key: 'copyPurpose',
              // 默认的复印用途信息
              name: '保险报销',
              value: '001',
              //复印用途列表
              list: [
                {
                  value: '001',
                  name: '保险报销'
                },
                {
                  value: '002',
                  name: '转院治疗'
                }
              ]
            },
            {
              // 复印项目
              key: 'copyRangeType',
              //默认的复印项目
              name: '全部复印',
              value: '001',
              // 复印项目列表
              list: [
                {
                  name: '全部复印',
                  value: '001'
                },
                {
                  name: '仅复印首页',
                  value: '002'
                }
              ]
            },
            {
              // 复印份数
              key: 'copyNum',
              //默认复印份数
              name: '1份',
              value: '001',
              //复印份数列表
              list: [
                {
                  name: '1份',
                  value: '001'
                },
                {
                  name: '2份',
                  value: '002'
                }
              ]
            }
          ], //邮寄信息
          postProjectInfo: [
            {  //邮寄方式
              key: 'postWay',
              name: '邮寄配送',
              value: '001',
              //邮寄列表
              list: [
                {
                  value: '001',
                  name: '邮寄配送'
                },
                {
                  value: '002',
                  name: '到院自取'
                }
              ]
            }
          ],
          //邮寄地址
          transportList: [
            {
              //地址
              key: 'postAddress',
              value: '北京市北京海淀区'
            },
            {
              //邮编
              key: 'postcode',
              value: '000000'
            },
            {
              //收件人姓名
              key: 'postName',
              value: '海绵宝宝'
            },
            {
              //联系电话
              key: 'postPhone',
              value: '183330312345'
            },
            {
              //邮寄到付
              key: 'postCollect',
              value: '1' // 1:选中了邮寄到付  2：未选中邮寄到付
            }
          ]
        }
      },
      localJson: {
        data: {
          infoList: [
            {
              // 申请人手机号
              key: 'phoneNO',
              value: '',
              label: '申请人手机号',
              placeHolder: '请输入申请人的手机号',
              type: 'text',
              reg: '/^1d{10}$/',
              //是否可以编辑 1:可编辑 2：不可编辑
              disable: 1,
              errMsg: '手机号格式不正确',
              errMsgEmpty: '手机号不能为空'
            },
            {
              // 患者姓名
              key: 'patientName',
              value: '',
              label: '患者姓名',
              placeHolder: '请输入患者姓名',
              type: 'text',
              reg: '/^.{1,30}$/',
              disable: 2,
              errMsg: '患者姓名格式不正确',
              errMsgEmpty: '患者姓名不能为空'
            },
            {
              // 患者身份证号
              key: 'cardID',
              value: '',
              label: '患者身份证号',
              placeHolder: '请输入患者身份证号',
              type: 'text',
              reg: '/(^d{15}$)|(^d{18}$)|(^d{17}(d|X|x)$)/',
              disable: 2,
              errMsg: '患者身份证格式不正确',
              errMsgEmpty: '患者身份证不能为空'
            },
            {
              // 住院号
              key: 'inPatientNo',
              value: '',
              label: '住院号',
              placeHolder: '请输入患者住院号',
              type: 'text',
              reg: '/^[0-9a-zA-Z_]{1,}$/',
              disable: 1,
              errMsg: '患者住院号格式不正确',
              errMsgEmpty: '患者住院号不能为空'
            },
            {
              // 住院日期
              key: 'lengthOfStay',
              value: '',
              label: '住院日期',
              placeHolder: '请输入患者住院日期',
              type: 'text',
              reg: '/S/',
              disable: 1,
              errMsg: '患者住院日期格式不正确',
              errMsgEmpty: '患者住院日期不能为空'
            },
            // 代理人
            {
              //代理人姓名
              key: 'agentName',
              value: '',
              label: '代理人姓名',
              placeHolder: '请输入代理人姓名',
              type: 'text',
              reg: '/^.{1,30}$/',
              disable: 1,
              errMsg: '代理人姓名格式不正确',
              errMsgEmpty: '代理人姓名不能为空'
            },
            {
              //代理人身份证
              key: 'agentIdCard',
              value: '',
              label: '代理人身份证',
              placeHolder: '请输入代理人身份证',
              type: 'text',
              reg: '/(^d{15}$)|(^d{18}$)|(^d{17}(d|X|x)$)/',
              disable: 1,
              errMsg: '代理人身份证格式不正确',
              errMsgEmpty: '代理人身份证不能为空'
            }
          ],
          // 复印信息
          copyInfo: [
            {
              // 复印用途
              key: 'copyPurpose',
              // 默认的复印用途信息
              value: '',
              name: '',
              label: '复印用途',
              type: 'btn',
              reg: '/S/',
              disable: 1,
              errMsg: '复印用途格式不正确',
              errMsgEmpty: '复印用途格式不能为空',
              //复印用途列表
              list: []
            },
            {
              // 复印项目
              key: 'copyRangeType',
              //默认的复印项目
              name: '',
              value: '',
              label: '复印项目',
              type: 'btn',
              reg: '/S/',
              disable: 1,
              errMsg: '复印项目格式不正确',
              errMsgEmpty: '复印项目格式不能为空',
              // 复印项目列表
              list: []
            },
            {
              // 复印份数
              key: 'copyNum',
              //默认复印份数
              name: '',
              value: '',
              label: '复印份数',
              type: 'btn',
              reg: '/S/',
              disable: 1,
              errMsg: '复印份数格式不正确',
              errMsgEmpty: '复印份数不能为空',
              //复印份数列表
              list: [

              ]
            }
          ],
          //邮寄信息
          postProjectInfo: [{
            //邮寄方式
            key: 'postWay',
            name: '',
            value: '',
            label: '邮寄方式',
            type: 'btn',
            reg: '/S/',
            disable: 1,
            errMsg: '邮寄方式不正确',
            errMsgEmpty: '邮寄方式不能为空',
            //邮寄列表
            list: []
          }],
          //邮寄地址
          transportList: [
            {
              //地址
              key: 'postAddress',
              value: '',
              placeHolder: '请输入邮寄地址',
              label: '邮寄地址',
              type: 'text',
              reg: '/S/',
              disable: 1,
              errMsg: '邮寄地址格式不正确',
              errMsgEmpty: '邮寄地址不能为空'
            },
            {
              //邮编
              key: 'postcode',
              value: '',
              placeHolder: '请输入邮编',
              label: '邮编',
              type: 'text',
              reg: '/S/',
              disable: 1,
              errMsg: '邮编格式不正确',
              errMsgEmpty: '邮编不能为空'
            },
            {
              //收件人姓名
              key: 'postName',
              value: '',
              placeHolder: '请输入收件人姓名',
              label: '收件人姓名',
              type: 'text',
              reg: '/S/',
              disable: 1,
              errMsg: '姓名格式不正确',
              errMsgEmpty: '姓名不能为空'
            },
            {
              //联系电话
              key: 'postPhone',
              value: '',
              placeHolder: '请输入联系电话',
              label: '联系电话',
              type: 'text',
              reg: '/S/',
              disable: 1,
              errMsg: '联系电话格式不正确',
              errMsgEmpty: '联系电话不能为空'
            },
            {
              //邮寄方式
              key: 'postCollect',
              value: '', // 1:选中了邮寄到付  2：未选中邮寄到付

              label: '邮寄方式',
              type: 'btn',
              reg: '/S/',
              disable: 1,
              errMsg: '邮寄方式格式不正确',
              errMsgEmpty: '邮寄方式不能为空'
            }
          ]
        }
      },
      getData: {}

    }
  },
  created () {
    this.getDataFun()
  },
  methods: {
    getDataFun () {
      this.concatData(this.localJson.data, this.response.data)
    },

    //赋值
    // 处理数据
    processingeData: function () {
      this.concatData(localJson.data, response.data)
    },
    concatData: function (local, res) {
      for (var value in res) {
        for (var item in local) {
          if (typeof (res[item] == 'Object')) {
            this.changeData(local[value], res[item])
          }
        }
      }
    }, changeData: function (local, res) {
      for (var value in res) {
        for (var item in local) {
          if (res[value]['key'] == local[item]['key']) {
            local[item]['value'] = res[value]['value']
            local[item]['name'] = res[value]['name']
            local[item]['list'] = res[value]['list']
          }
        }
      }
      //console.log(localJson)
      // this.render(localJson)
    },
  },
}
</script>

<style scoped>
body {
  text-align: left;
  font-size: 12px;
}
* {
  margin: 0;
  padding: 0;
}
</style>