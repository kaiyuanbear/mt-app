<template>
  <div class="m-menu">
    <dl
      @mouseleave="mouseleave"
      class="nav"
    >
      <dt>全部分类</dt>
      <dd
        :key="index"
        @mouseenter="mouseenter(item.type)"
        v-for="(item, index) in menu"
      >
        <i :class="item.type"/>
        {{ item.name }}
        <span class="arrow"/>
      </dd>
    </dl>
    <div
      class="detail"
      v-if="kind"
      @mouseenter="enterDetail"
      @mouseleave="leaveDetail"
    >
      <template v-for="(item, index) in curDetail">
        <h4 :key="index">{{item.title}}</h4>
        <span
          :key="childIndex"
          v-for="(childItem, childIndex) in item.child"
        >{{childItem}}</span>
      </template>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      kind: '',
      menu: [
        {
          type: 'food',
          name: '美食',
          child: [
            {
              title: '美食',
              child: ['代金券', '甜点饮品', '火锅', '自助餐', '小吃快餐']
            }
          ]
        },
        {
          type: 'takeout',
          name: '外卖',
          child: [
            {
              title: '外卖',
              child: ['美团外卖', '卤肉饭', '烧烤']
            }
          ]
        },
        {
          type: 'hotel',
          name: '酒店',
          child: [
            {
              title: '星级',
              child: ['一星', '二星', '三星']
            }
          ]
        }
      ]
    }
  },
  computed: {
    curDetail() {
      return this.menu.filter(item => item.type === this.kind)[0].child
    }
  },
  methods: {
    mouseenter(type) {
      this.kind = type
    },
    mouseleave() {
      this._timer = setTimeout(() => {
        this.kind = ''
      }, 200)
    },
    enterDetail() {
      if (this._timer) clearTimeout(this._timer)
    },
    leaveDetail() {
      this.kind = ''
    }
  }
}
</script>