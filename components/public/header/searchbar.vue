<template>
  <div class="search-panel">
    <el-row>
      <el-col
        :span="3"
        class="left"
      >
        <img
          alt="美团"
          src="//s0.meituan.net/bs/fe-web-meituan/e5eeaef/img/logo.png"
        >
      </el-col>
      <el-col
        :span="12"
        class="center"
      >
        <div class="wrapper">
          <el-input
            v-model="search"
            placeholder="搜索商家或地点"
            @blur="blur"
            @focus="focus"
            @input="input"
          />
          <button class="el-button el-button--primary">
            <i class="el-icon-search"/>
          </button>
          <dl
            v-show="isHotPlace"
            class="hotPlace"
          >
            <dt
              v-for="(item, index) in hotPlaceList"
              :key="index"
              v-text="item"
            />
          </dl>
          <dl
            v-show="isSearchList"
            class="searchList"
          >
            <dt
              v-for="(item, index) in searchList"
              :key="index"
              v-text="item"
            />
          </dl>
        </div>
        <p class="suggest">
          <a href="void(0)">故宫博物院</a>
          <a href="void(0)">故宫博物院</a>
          <a href="void(0)">故宫博物院</a>
        </p>
        <div class="nav">
          <li>
            <nuxt-link
              class="takeout"
              to="/"
            >美团外卖</nuxt-link>
          </li>
          <li>
            <nuxt-link
              class="movie"
              to="/"
            >猫眼电影</nuxt-link>
          </li>
          <li>
            <nuxt-link
              class="hotel"
              to="/"
            >美团酒店</nuxt-link>
          </li>
          <li>
            <nuxt-link
              class="apartment"
              to="/"
            >民宿/公寓</nuxt-link>
          </li>
          <li>
            <nuxt-link
              class="business"
              to="/"
            >民宿/公寓</nuxt-link>
          </li>
        </div>
      </el-col>
      <el-col
        :span="6"
        class="right"
      >
        <ul class="security">
          <li>
            <i class="refund">
              <p class="txt">随时退</p>
            </i>
          </li>
          <li>
            <i class="single">
              <p class="txt">不满意免单</p>
            </i>
          </li>
          <li>
            <i class="overdue">
              <p class="txt">过期退</p>
            </i>
          </li>
        </ul>
      </el-col>
    </el-row>
  </div>
</template>
<script>
export default {
  data() {
    return {
      isFocus: false,
      search: '',
      hotPlaceList: ['天坛', '地坛', '天安门', '地安门'],
      searchList: ['涮羊肉', '火锅', '米线', '卷粉']
    }
  },
  computed: {
    isHotPlace() {
      return this.isFocus && !this.search
    },
    isSearchList() {
      return this.isFocus && this.search
    }
  },
  methods: {
    focus() {
      this.isFocus = true
    },
    input() {
      console.log('input')
    },
    blur() {
      this.isFocus = false
    }
  }
}
</script>
