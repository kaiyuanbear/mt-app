import Router from 'koa-router';
import Province from '../dbs/models/province'
import Menu from '../dbs/models//menu'
import axios from './utils/axios';

const router = new Router({
  prefix: '/geo'
})

router.get('/getPosition', async (ctx, next) => {
  const province = '云南省'
  const city = '玉溪市'
  ctx.body = {
    province,
    city
  }
})

router.get('/getProvince', async ctx => {
  const province = await Province.find()  
  ctx.body = {
    province: province.map(item => {
      return {
        id: item.id,
        province: item.value
      }
    })
  }
})

router.get('/menu', async ctx => {
  const result = await Menu.findOne()
  ctx.body = {
    menu: result.menu
  }
})

export default router