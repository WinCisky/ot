<script setup lang="ts">
import { ref } from 'vue'

defineProps({
    msg: String
})

const count = ref(0)
</script>
            
<template>


</template>
        
<script lang="ts">
export default {
    data() {
        return {
            last_rotation_x: 0,
        }
    },
    mounted() {
        this.loadContainerData();
    },
    methods: {
        loadContainerData() {
            console.log(this.msg)
        },
    }
}
</script>
            
<style scoped>

</style>
            