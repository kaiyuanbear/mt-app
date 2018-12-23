import passport from 'koa-passport'
import LocalStrategy from 'passport-local'
import UserModel from '../../dbs/models/users'

passport.use(new LocalStrategy(async function(username, password, done) {
  let where = {
    username
  }
  let result = await UserModel.findOne(where)
  if (result != null) {
    return result.password === password ? done(null, result) : done(null, false, '密码错误')
  } else {
    return done(null, false, '用户不存在')
  }
}))

passport.serializeUser(function(user, done) { // 查询成功后，查询对应信息并存储到session中
  done(null, user)
})

passport.deserializeUser(function(user, done) {  // 每次请求时，从session中读取用户信息
  return done(null, user)
})

export default passport