<template>
  <div class="m-nav">
    <ul class="nav">
      <li class="list">
        <nuxt-link to="/my">我的美团</nuxt-link>
        <dl>
          <dd><nuxt-link to="/my">我的订单</nuxt-link></dd>
          <dd><nuxt-link to="/my">我的收藏</nuxt-link></dd>
          <dd><nuxt-link to="/my">抵用券</nuxt-link></dd>
          <dd><nuxt-link to="/my">账户设置</nuxt-link></dd>
        </dl>
      </li>
      <li>
        <nuxt-link to="/my">手机APP</nuxt-link>
      </li>
      <li class="list bd">
        <nuxt-link to="/my">商家中心</nuxt-link>
      </li>
      <li class="list site">
        <nuxt-link to="/my">网站导航</nuxt-link>
      </li>
    </ul> 
  </div>
</template>