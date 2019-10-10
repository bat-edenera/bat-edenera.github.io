<template>
  <div style="padding:30px;">
    <van-divider class="divider">大赛主题</van-divider>
    <div class="title tac">科技创新 成就大业</div>
    <van-divider class="divider">2019大赛宣传片</van-divider>
    <my-video url="/movie.mp4"></my-video>
    <van-divider class="divider">总决赛日程安排</van-divider>
    <van-steps direction="vertical" :active="-1">
      <van-step>
        <van-row type="flex" :gutter="20">
          <van-col>10.14 - 10.18</van-col>
          <van-col>生物医药</van-col>
          <van-col>广州</van-col>
        </van-row>
      </van-step>
      <van-step>
        <van-row type="flex" :gutter="20">
          <van-col>10.28 - 10.31</van-col>
          <van-col>电子信息</van-col>
          <van-col>深圳</van-col>
        </van-row>
      </van-step>
      <van-step>
        <van-row type="flex" :gutter="20">
          <van-col>11.04 - 11.07</van-col>
          <van-col>先进制造</van-col>
          <van-col>洛阳</van-col>
        </van-row>
      </van-step>
      <van-step>
        <van-row type="flex" :gutter="20">
          <van-col>11.09 - 11.12</van-col>
          <van-col>新材料</van-col>
          <van-col>大连</van-col>
        </van-row>
      </van-step>
      <van-step>
        <van-row type="flex" :gutter="20">
          <van-col>11.18 - 11.21</van-col>
          <van-col>互联网</van-col>
          <van-col>杭州</van-col>
        </van-row>
      </van-step>
      <van-step>
        <van-row type="flex" :gutter="20">
          <van-col>11.25 - 11.28</van-col>
          <van-col>能源环保</van-col>
          <van-col>宜春</van-col>
        </van-row>
      </van-step>
    </van-steps>
    <van-divider class="divider">指导单位</van-divider>
    <van-divider class="divider">专家指导委员会</van-divider>
    <van-swipe style="height: 200px;" :autoplay="6000" vertical :show-indicators="false">
      <van-swipe-item>
        <p>
          <i class="van-step__circle"></i>联想集团有限公司董事局名誉主席 柳传志
        </p>
        <p>
          <i class="van-step__circle"></i>招商银行股份有限公司党委书记、行长 田惠宇
        </p>
        <p>
          <i class="van-step__circle"></i>全国中小企业股份转让系统有限责任公司董事长 谢 庚
        </p>
        <p>
          <i class="van-step__circle"></i>百度公司董事长兼首席执行官 李彦宏
        </p>
        <p>
          <i class="van-step__circle"></i>新希望集团有限公司董事长 刘永好
        </p>
      </van-swipe-item>
      <van-swipe-item>
        <p>
          <i class="van-step__circle"></i>腾讯公司控股董事会主席兼首席执行官 马化腾
        </p>
        <p>
          <i class="van-step__circle"></i>小米科技董事长兼首席执行官 雷 军
        </p>
        <p>
          <i class="van-step__circle"></i>创新工场董事长兼首席执行官 李开复
        </p>
        <p>
          <i class="van-step__circle"></i>搜狐公司董事局主席兼首席执行官 张朝阳
        </p>
        <p>
          <i class="van-step__circle"></i>春华资本集团董事长兼首席执行官 胡祖六
        </p>
      </van-swipe-item>
      <van-swipe-item>
        <p>
          <i class="van-step__circle"></i>芳晟股权投资基金创始合伙人 于明芳
        </p>
        <p>
          <i class="van-step__circle"></i>深港产学研创业投资有限公司董事长 厉 伟
        </p>
        <p>
          <i class="van-step__circle"></i>北极光创投董事总经理、创始合伙人 邓 锋
        </p>
        <p>
          <i class="van-step__circle"></i>真格天使投资基金创始人 徐小平
        </p>
        <p>
          <i class="van-step__circle"></i>达晨创业投资管理有限公司合伙人、执行总裁 肖 冰
        </p>
      </van-swipe-item>
      <van-swipe-item>
        <p>
          <i class="van-step__circle"></i>启迪控股股份有限公司荣誉董事长 梅 萌
        </p>
        <p>
          <i class="van-step__circle"></i>深圳证券交易所副总经理 李 辉
        </p>
        <p>
          <i class="van-step__circle"></i>美年大健康产业（集团）有限公司董事长 俞 熔
        </p>
        <p>
          <i class="van-step__circle"></i>上海股权托管交易中心有限公司总经理 张云峰
        </p>
      </van-swipe-item>
    </van-swipe>
  </div>
</template>

<script>
import MyVideo from "@/components/my-video";
export default {
  name: "tab1",
  data() {
    return {};
  },
  components: { MyVideo },
  computed: {},
  created() {},
  methods: {}
};
</script>

<style scoped lang="scss">
.divider {
  font-size: 16px;
}
p {
  font-size: 14px;
}
.van-step__circle {
  display: inline-block;
  position: relative;
  top: -2px;
  margin-right: 5px;
}
</style>
