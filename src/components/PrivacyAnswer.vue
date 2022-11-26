<script setup lang="ts">
defineProps({
    msg: String,
    align: String
})
</script>
            
<template>

    <div class="privacy-answer" :class="align">
        {{ msg }}
    </div>


</template>

<style scoped lang="scss">
.privacy-answer {
    margin-top: 20px;
    margin-bottom: 20px;
    font-size: 24px;
    line-height: 26px;
    font-weight: 400;

    &.left {
        text-align: left;
    }

    &.right {
        text-align: right;
    }
}
</style>
