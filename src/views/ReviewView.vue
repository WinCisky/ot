<script lang="ts" setup>
import { useI18n } from 'vue-i18n';
const { t } = useI18n({
  useScope: 'global'
})
</script>
      
<template>
  <div class="card">
    <div class="greetings_text">
      <p>Hello,</p>
      <p>write about your shopping experience on {{  }}</p>
    </div>
    <div class="">
      <textarea id="description" required placeholder="Description"></textarea>
    </div>
  </div>
</template>
      
<style scoped lang="scss">
.card{
  .greetings_text{
    background-color: red;
  }
}
</style>
      