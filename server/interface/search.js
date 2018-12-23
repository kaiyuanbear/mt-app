import Router from 'koa-router'
import axios from 'axios'
import poi from '../dbs/models/poi'

const router = new Router({
  prefix: '/search'
})

router.get('/top', ctx => {
  // todo 待后续补充 9-4章节
})

export default router