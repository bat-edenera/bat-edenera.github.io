<template>
  <div style="padding-top:30px;">
    <van-button type="primary" @click="toAward">点击领取</van-button>
  </div>
</template>

<script>
export default {
  name: "tab2",
  data() {
    return {};
  },
  components: {},
  computed: {},
  created() {},
  methods: {
    toAward() {
      this.$router.push("/activity/guoqing/award");
    }
  }
};
</script>

<style scoped lang="scss">
</style>
