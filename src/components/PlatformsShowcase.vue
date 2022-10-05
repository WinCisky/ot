<script lang="ts" setup>
import Shopify from './icons/Shopify.vue';
defineProps({
    msg: String
})
</script>
        
<template>

    <div class="section">

        <h2 class="section__title">{{ msg }}</h2>

        <div class="platforms">
            <a href="https://apps.shopify.com/opentrust">
                <!-- <img src="../assets/shopify_glyph_white.svg" class="logo shopify" alt="Shopify logo" /> -->
                <Shopify class="logo shopify" />
            </a>


        </div>

    </div>


</template>
    
<script>
</script>
        
<style scoped>
.section {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 20vh;
    margin-bottom: 20vh;
    flex-direction: column;
    gap: 40px;
}

.logo {
    height: 6em;
    width: 6em;
    padding: 1.5em;
    will-change: filter;
    padding: 20px;
    border-radius: 15px;
    background-color: #212121;
}

.logo.shopify {
    fill: #fff;
}

@media (prefers-color-scheme: light) {
    .logo {
        background-color: #eee;
    }

    .logo.shopify {
        fill: #424242;
    }
}
</style>
            