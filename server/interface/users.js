import Router from 'koa-router';
import Redis from 'koa-redis';
import nodeMailer from 'nodemailer';
import User from '../dbs/models/users';
import Passport from './utils/passport';
import axios from './utils/axios';
import Email from '../dbs/config';

const router = new Router({
	prefix: '/users'
});

const Store = new Redis().client;

// 注册
router.post('/signup', async (ctx) => {
	const { username, password, email, code } = ctx.request.body;

	if (code) {
		
		const saveCode = await Store.hget(`nodemail:${username}`, 'code'); // redis存储的验证码，根据username取出code
		const saveExpire = await Store.hget(`nodemail:${username}`, 'expire'); // redis存储的过期时间
		console.log({saveCode, saveExpire})
		if (code === saveCode) {
			if (Date.now() - saveExpire > 0) {
				ctx.body = {
					code: -1,
					msg: '验证码已经过期，请重新尝试'
				};
				return
			}
		} else {
			ctx.body = {
				code: -1,
				msg: '验证码错误'
			};
			return
		}
	} else {
		ctx.body = {
			code: -1,
			msg: '请填写验证码'
		};
		return
	}
	const user = await User.find({
		username
	});

	if (user.length) {
		ctx.body = {
			code: -1,
			msg: '用户名已经存在'
		};
		return;
	}
	const newUser = await User.create({
		// 写入数据库
		username,
		password,
		email
	});
	if (newUser) {
		// 查询有没有创建成功
		const res = await axios.post('/users/signin', { username, password });
		if (res.data && res.data.code === 0) {
			ctx.body = {
				code: 0,
				msg: '注册成功',
				user: res.data.user
			};
		} else {
			ctx.body = {
				code: -1,
				msg: '注册失败'
			};
		}
	} else {
		ctx.body = {
			code: -1,
			msg: '注册失败'
		};
	}
});

// 登录
router.post('/signin', async (ctx, next) => {
	// 因为引用的是passport-local.所以这里写local
	return Passport.authenticate('local', function(err, user, info, status) {
		if (err) {
			ctx.body = {
				code: -1,
				msg: err
			};
		} else {
			if (user) {
				ctx.body = {
					code: 0,
					msg: '登陆成功',
					user
				};
				return ctx.login(user);
			} else {
				ctx.body = {
					code: 1,
					msg: info
				};
			}
		}
	})(ctx, next); // 固定用法
});

// 验证
router.post('/verify', async (ctx, next) => {
	const username = ctx.request.body.username;
	const saveExpire = await Store.hget(`nodemail:${username}`, 'expire');
	console.log({saveExpire})
	if (saveExpire && Date.now() < saveExpire) {
		ctx.body = {
			code: -1,
			msg: '验证码请求过于频繁，一分钟内只能请求一次'
		};
		return false;
	}
	const transporter = nodeMailer.createTransport({
		host: Email.smtp.host,
		port: 587,
		secure: false,
		auth: {
			user: Email.smtp.user,
			pass: Email.smtp.pass
		}
	});
	const ko = {
		code: Email.smtp.code(),
		expire: Email.smtp.expire(),
		email: ctx.request.body.email,
		user: ctx.request.body.username
	};

	const mailOption = {
    from: `"认证邮件" <${Email.smtp.user}>`,
    to: ko.email,
    subject: '《美团网实战课程》注册码',
    html: `您在本课程中注册，邀请码是${ko.code}`
  };
  await transporter.sendMail(mailOption, (error, info) => {
    if (error) {
      return console.log(error)
    } else {
      Store.hmset(`nodemail:${ko.user}`,'code', ko.code, 'expire', ko.expire, 'email', ko.email)
    }
	})
	console.log({ko})
  ctx.body = {
    code: 0,
    msg: '验证码已经发送，可能会有延时，有效期1分钟'
  }
});

// 退出
router.get('/exit', async (ctx, next) => {
  await ctx.logout()
  if (!ctx.isAuthenticated()) {
    ctx.body = {
      code: 0
    }
  } else {
    ctx.body = {
      code: -1
    }
  }
})

// 获取用户名
router.get('/getUser', async ctx => {
  if (ctx.isAuthenticated()) {
    const {username, email} = ctx.session.passport.user
    ctx.body = {
      user: username,
      email
    }
  } else {
    ctx.body = {
      user: '',
      email: ''
    }
  }
})

export default router
