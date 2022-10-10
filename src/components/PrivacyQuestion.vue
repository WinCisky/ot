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

<style scoped>
.privacy-question {
    margin-bottom: 20px;
    font-size: 28px;
    line-height: 30px;
    font-weight: 600;
}

.privacy-question.left{
    text-align: left;
}

.privacy-question.right{
    text-align: right;
}
</style>
