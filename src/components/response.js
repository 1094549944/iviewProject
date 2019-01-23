var response = {
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
    postProjectInfo: {
      //邮寄方式
      key: 'postAddress',
      name: '邮寄',
      value: 'transport',
      //邮寄列表
      postProjectList: [
        {
          value: 'transport',
          name: '邮寄配送'
        },
        {
          value: 'selfTaking',
          name: '到院自取'
        }
      ]
    },
    //邮寄地址
    transport: [
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
}
