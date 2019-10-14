<template>
  <div>
    <div class="tab tab1" @click="tab = Tab1"></div>
    <div class="tab tab2" @click="tab = Tab2"></div>
    <component :is="tab"></component>
  </div>
</template>

<script>
import Tab1 from "./detail/tab1";
import Tab2 from "./detail/tab2";
export default {
  name: "GuoqingAct",
  data() {
    return {
      Tab1,
      Tab2,
      tab: Tab1
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
