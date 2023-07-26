<template>
  <div>
    <video autoplay loop muted>
      <source
        src="https://player.vimeo.com/external/606417024.sd.mp4?s=95bf9decb07528f4442537d91011aebe91d08cf4&profile_id=164&oauth2_token_id=57447761"
        type="video/mp4"
      />
    </video>
    <NavBar />

    <router-view></router-view>
    <FooterComp />
  </div>
</template>

<script>
import FooterComp from "./components/FooterComp.vue";
import NavBar from "./components/NavBar.vue"

export default {
  name: "App",
  components: {
    FooterComp,
    NavBar,
  },
  
};
</script>

<style>
body {
  margin: 0;
  padding: 0;
}

video {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  object-fit: cover;
  filter: blur(2px);
  z-index: -1;
}


</style>
