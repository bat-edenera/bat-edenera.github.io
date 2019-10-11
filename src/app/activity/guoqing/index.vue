<template>
  <div>
    <img src="~@/assets/act.jpg" alt width="100%" />
    <h3 class="tac">2019·第八届中国创新创业大赛</h3>
    <h1 class="tac">萃才计划</h1>
    <van-tabs sticky animated swipeable>
      <van-tab title="大赛介绍">
        <tab1 />
      </van-tab>
      <van-tab title="萃才计划">
        <tab2 />
      </van-tab>
    </van-tabs>
  </div>
</template>

<script>
import Tab1 from "./detail/tab1";
import Tab2 from "./detail/tab2";
export default {
  name: "GuoqingAct",
  data() {
    return {};
  },
  components: { Tab1, Tab2 },
  computed: {},
  created() {},
  methods: {}
};
</script>

<style scoped lang="scss">
</style>
