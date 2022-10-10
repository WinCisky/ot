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

<style scoped>
.privacy-answer {
    margin-top: 20px;
    margin-bottom: 20px;
    font-size: 24px;
    line-height: 26px;
    font-weight: 400;
}

.privacy-answer.left{
    text-align: left;
}

.privacy-answer.right{
    text-align: right;
}
</style>
