<script lang="ts" setup>
import ReviewShowcase from '../components/ReviewShowcase.vue';
import SearchBar from '../components/SearchBar.vue';
import PlatformsShowcase from '../components/PlatformsShowcase.vue';
import Footer from '../components/Footer.vue';
import Ot from '../components/icons/Ot.vue';
</script>
      
<template>
  <div>
    <router-link to="/">
      <Ot class="logo opentrust" />
    </router-link>
  </div>
  <SearchBar msg="Opentrust" />
  <ReviewShowcase msg="Beautiful Reviews" />
  <PlatformsShowcase msg="Get it on" />
  <Footer></Footer>
</template>
      
<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
}

.logo:hover {
  filter: drop-shadow(0 0 2em #424242aa);
}

.logo.opentrust {
  fill: #fff;
}

@media (prefers-color-scheme: light) {
  .logo.opentrust {
    fill: #2563EB;
  }

  .logo:hover {
    filter: drop-shadow(0 0 2em #E0E0E0aa);
  }
}
</style>
      