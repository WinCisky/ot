<script lang="ts" setup>
import { useI18n } from 'vue-i18n';

const { t } = useI18n({
    useScope: 'global'
})
</script>
        
<template>

    <div class="section">

        <div class="year">© {{ new Date().getFullYear() }}</div>

        <RouterLink to="/privacy" class="privacy">{{ t('Privacy Policy') }}</RouterLink>

    </div>


</template>
    
<style scoped lang="scss">
.section {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 20vh;
    gap: 20px;
    font-family: Roboto;

    .privacy {
        text-decoration: none;
        color: #fff;

        @media (prefers-color-scheme: light) {
            color: #000;
        }
    }
}
</style>
        