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
          <el-input placeholder="搜索商家或地点"/>
          <button class="el-button el-button-primary">
            <i class="el-icon-search"/>
          </button>
          <dl class="hotPlact">
            <dt>热门搜索</dt>
            <dd>火锅</dd>
            <dd>火锅</dd>
            <dd>火锅</dd>
          </dl>
          <dl class="searchList">
            <dd>火锅</dd>
            <dd>火锅</dd>
            <dd>火锅</dd>
          </dl>
        </div>
        <p class="suggest">
          <a href="void(0)">故宫博物院</a>
          <a href="void(0)">故宫博物院</a>
          <a href="void(0)">故宫博物院</a>
        </p>
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
