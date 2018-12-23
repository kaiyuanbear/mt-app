export default {
  dbs: 'mongodb://127.0.0.1:27017/student',   // 默认端口为27017（不建议修改）,student为表名
  redis: {
    get host() {
      return '127.0.0.1'
    },
    get port() {
      return 6379   // 默认端口，不建议修改
    }
  },
  smtp: {
    get host() {
      return 'smtp.qq.com'  // qq邮件服务器
    },
    get user() {
      return '49461753@qq.com'
    },
    get pass() {
      return 'bngjuymmhfohbidi'
    },
    get code() {  // 验证码
      return () => {
        return Math.random().toString(16).slice(2,6).toUpperCase()
      }
    },
    get expire() {
      return () => {
        return Date.now() + 60 * 1000
      }
    }
  },

}