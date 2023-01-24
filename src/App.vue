<script setup lang="ts">
import { RouterView } from 'vue-router'
import { useMeta } from 'vue-meta'
import { useI18n } from 'vue-i18n';
const { t, locale } = useI18n({
  useScope: 'global'
})

const iso3lang = locale?.value as string ?? "";
const iso2lang = iso3lang.substring(0,2);
useMeta({
  title: '',
  htmlAttrs: {
    lang: iso2lang
  },
  description: `${t('Read the reviews of other customers')}`,
  viewport: 'width=device-width, initial-scale=1',
  meta: [
    { charset: 'utf-8' },
  ]
})
</script>

<template>
  <metainfo>
    <template v-slot:title="{ content }">{{ content ? `${content} | Opentrust` : `Opentrust` }}</template>
  </metainfo>
  <RouterView />
</template>

<style scoped>
</style>
