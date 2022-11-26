<script lang="ts" setup>
import PrivacyQuestion from '../components/PrivacyQuestion.vue';
import PrivacyAnswer from '../components/PrivacyAnswer.vue';
import Ot from '../components/icons/Ot.vue'
import { useI18n } from 'vue-i18n';

const { t } = useI18n({
    useScope: 'global'
})
</script>
      
<template>
    <div>
        <router-link to="/">
            <Ot class="logo opentrust" />
        </router-link>
    </div>
    <div class="container">
        <h1>{{ t('Thank you for your feedback!') }}</h1>
    </div>
</template>

<style scoped lang="scss">
.container {
    max-width: 800px;
    margin: auto;

    @media screen and (max-width:767px) {
        padding: 20px;
        font-size: small;
    }
}

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