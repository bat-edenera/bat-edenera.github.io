<template>
  <div>
    <img src="~@/assets/act2.png" alt width="100%" style="display:block" />
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
