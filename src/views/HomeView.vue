<script lang="ts" setup>
import ReviewShowcase from '../components/ReviewShowcase.vue';
import SearchBar from '../components/SearchBar.vue';
import PlatformsShowcase from '../components/PlatformsShowcase.vue';
import Footer from '../components/Footer.vue';
import Ot from '../components/icons/Ot.vue';
import { useI18n } from 'vue-i18n';
const { t } = useI18n({
  useScope: 'global'
})
</script>
      
<template>
  <div>
    <router-link to="/" role="link" aria-label="Opentrust home page">
      <Ot class="logo opentrust" />
    </router-link>
  </div>
  <SearchBar msg="Opentrust" />
  <ReviewShowcase :msg="t('Beautiful Reviews')" />
  <PlatformsShowcase :msg="t('Get it on')" />
  <Footer />
</template>
      
<style scoped lang="scss">
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;

  &:hover {
    filter: drop-shadow(0 0 2em #424242aa);
  }

  &.opentrust {
    fill: #fff;
  }
}

@media (prefers-color-scheme: light) {
  .logo {
    &.opentrust {
      fill: #2563EB;
    }

    &:hover {
      filter: drop-shadow(0 0 2em #E0E0E0aa);
    }
  }
}
</style>
      