<template>
  <div class="tac video">
    <video
      preload
      controls
      style="object-fit:fill"
      autoplay
      webkit-playsinline
      playsinline
      x5-video-player-type="h5"
      :poster="poster"
    >
      <source :src="url" type="video/mp4" />
    </video>
  </div>
</template>

<script>
export default {
  name: "myvideo",
  data() {
    return {};
  },
  props: ["url", "poster"],
  components: {},
  computed: {},
  created() {},
  methods: {}
};
</script>

<style scoped lang="scss">
.video {
  video {
    width: 100%;
    // height: 100%;
  }
  .player {
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    right: 0;
    z-index: 10;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #999;
    font-size: 60px;
  }
}
</style>
