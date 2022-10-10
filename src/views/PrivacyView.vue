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
        <h1>{{ t('Privacy policy') }}</h1>
        <PrivacyQuestion :msg="t('What information do we collect through Shopify’s APIs?')" align="left"
            class="divider" />
        <PrivacyAnswer :msg="t('Merchants\' customers name, surname and email (when they complete an order).')"
            align="left" />
        <PrivacyQuestion :msg="t('What information do we collect directly from the merchant?')" align="right"
            class="divider" />
        <PrivacyQuestion :msg="t('For example, do we ask them for contact details?')" align="right" />
        <PrivacyQuestion :msg="t('Do we generate automated logs relating to their use of your app?')" align="right" />
        <PrivacyAnswer :msg="t('Store name, Store email, Store url.')" align="right" />
        <PrivacyQuestion :msg="t('What information do you collect directly from merchants’ customers?')" align="left"
            class="divider" />
        <PrivacyQuestion
            :msg="t('For example, do you drop cookies or use other tracking technologies on their devices?')"
            align="left" />
        <PrivacyQuestion
            :msg="t('Do you log information relating to how customers visit or navigate particular stores?')"
            align="left" />
        <PrivacyAnswer :msg="t('Merchants\' customers name, surname and email (when they complete an order).')"
            align="left" />
        <PrivacyAnswer :msg="t('We don\'t use cookies, we log anonymous informations necessary for bugfix.')"
            align="left" />
        <PrivacyQuestion :msg="t('How do you use the information you collect?')" align="right" class="divider" />
        <PrivacyQuestion
            :msg="t('Do you use this information for any purposes aside from providing your app’s services?')"
            align="right" />
        <PrivacyAnswer :msg="t('No, the data is used only to provide the app\'s services.')" align="right" />
        <PrivacyQuestion :msg="t('For how long do you store or retain the data you collect?')" align="left"
            class="divider" />
        <PrivacyAnswer :msg="t('The store data id retained until the shop owner uninstalls the app.')" align="left" />
        <PrivacyAnswer
            :msg="t('The customer data is retained until the shop owner uninstalls the app or the customer requests to remove his data.')"
            align="left" />
        <PrivacyQuestion :msg="t('Are you established in Europe?')" align="right" class="divider" />
        <PrivacyQuestion :msg="t('Are you storing or processing information outside of Europe?')" align="right" />
        <PrivacyAnswer :msg="t('All of our data is stored and processed in Europe.')" align="right" />
        <PrivacyQuestion :msg="t('How can merchants contact you if they have additional questions?')" align="left"
            class="divider" />
        <PrivacyAnswer :msg="t('Use the following email: info\@opentrust.it.')" align="left" />

    </div>
</template>
      
<style scoped>
.container {
    max-width: 800px;
}

.divider {
    margin-top: 100px;
}

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