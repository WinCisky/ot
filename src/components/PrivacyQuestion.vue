<script setup lang="ts">
defineProps({
    msg: String,
    align: String
})
</script>
            
<template>

    <div class="privacy-question" :class="align">
        {{ msg }}
    </div>


</template>

<style scoped lang="scss">
.privacy-question {
    margin-bottom: 20px;
    font-size: 28px;
    line-height: 30px;
    font-weight: 600;
    &.left{
        text-align: left;
    }
    &.right{
        text-align: right;
    }
}
</style>
