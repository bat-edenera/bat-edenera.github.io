<template>
  <div>
    <div class="tab" @click="tab = 1"></div>
    <div class="tab tab2" @click="tab = 2"></div>
    <tab1 v-show="tab === 1" />
    <tab2 v-show="tab === 2" />
  </div>
</template>

<script>
import Tab1 from "./detail/tab1";
import Tab2 from "./detail/tab2";
export default {
  name: "GuoqingAct",
  data() {
    return {
      tab: 1
    };
  },
  components: { Tab1, Tab2 },
  computed: {},
  created() {},
  methods: {}
};
</script>

<style scoped lang="scss">
.tab {
  position: absolute;
  top: 400px;
  width: 200px;
  height: 100px;
  z-index: 20;
  left: 120px;
  &.tab2 {
    left: 400px;
  }
}
</style>
