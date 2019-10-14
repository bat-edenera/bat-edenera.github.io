<template>
  <div>
    <img src="~@/assets/act.jpg" alt width="100%" />
    <my-video url="/movie.mp4" class="video"></my-video>
    <van-swipe class="swiper" :autoplay="6000" vertical :show-indicators="false">
      <van-swipe-item>
        <div class="name">柳传志</div>
        <div class="detail">联想集团有限公司董事局名誉主席</div>
        <div class="name">田惠宇</div>
        <div class="detail">招商银行股份有限公司党委书记、行长</div>
        <div class="name">谢 庚</div>
        <div class="detail">全国中小企业股份转让系统有限责任公司董事长</div>
        <div class="name">李彦宏</div>
        <div class="detail">百度公司董事长兼首席执行官</div>
        <div class="name">刘永好</div>
        <div class="detail">新希望集团有限公司董事长</div>
      </van-swipe-item>
      <van-swipe-item>
        <div class="name">马化腾</div>
        <div class="detail">腾讯公司控股董事会主席兼首席执行官</div>
        <div class="name">雷 军</div>
        <div class="detail">小米科技董事长兼首席执行官</div>
        <div class="name">李开复</div>
        <div class="detail">创新工场董事长兼首席执行官</div>
        <div class="name">张朝阳</div>
        <div class="detail">搜狐公司董事局主席兼首席执行官</div>
        <div class="name">胡祖六</div>
        <div class="detail">春华资本集团董事长兼首席执行官</div>
      </van-swipe-item>
      <van-swipe-item>
        <div class="name">于明芳</div>
        <div class="detail">芳晟股权投资基金创始合伙人</div>
        <div class="name">厉 伟</div>
        <div class="detail">深港产学研创业投资有限公司董事长</div>
        <div class="name">邓 锋</div>
        <div class="detail">北极光创投董事总经理、创始合伙人</div>
        <div class="name">徐小平</div>
        <div class="detail">真格天使投资基金创始人</div>
        <div class="name">肖 冰</div>
        <div class="detail">达晨创业投资管理有限公司合伙人、执行总裁</div>
      </van-swipe-item>
      <van-swipe-item>
        <div class="name">梅 萌</div>
        <div class="detail">启迪控股股份有限公司荣誉董事长</div>
        <div class="name">李 辉</div>
        <div class="detail">深圳证券交易所副总经理</div>
        <div class="name">俞 熔</div>
        <div class="detail">美年大健康产业（集团）有限公司董事长</div>
        <div class="name">张云峰</div>
        <div class="detail">上海股权托管交易中心有限公司总经理</div>
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
.swiper {
  font-family: PingFangSC-Ultralight;
  height: 500px;
  position: absolute;
  top: 2470px;
  z-index: 10;
  color: #fff;
  font-size: 24px;
  width: 503px;
  left: 116px;
  .name {
    width: 102px;
    height: 36px;
    background: rgba(47, 7, 137, 1);
    border-radius: 4px;
    line-height: 36px;
    text-align: center;
  }
  .detail {
    padding: 5px 0 18px 15px;
  }
}
.video {
  position: absolute;
  top: 903px;
  left: 107px;
  width: 537px;
  height: 368px;
}
</style>
