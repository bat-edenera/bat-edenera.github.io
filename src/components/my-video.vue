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
    >
      <source :src="url" type="video/mp4" />
    </video>
    <!-- <div class="player"> -->
    <!-- <van-icon name="play-circle-o" class="play" /> -->
    <!-- </div> -->
  </div>
</template>

<script>
export default {
  name: "myvideo",
  data() {
    return {};
  },
  props: ["url"],
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
