<script setup lang="ts">
import { ref } from 'vue'

const count = ref(0)
</script>
      
<template>
  <h1>{{ name }}</h1>
</template>
      
      
<script lang="ts">
import { supabase } from '../supabase'
import type { definitions } from '../supabase_types';

export default {
  data() {
    return {
      name: "",
      reviews_first_row: [] as definitions['shop_reviews'][],
      reviews_second_row: [] as definitions['shop_reviews'][],
      reviews_third_row: [] as definitions['shop_reviews'][],
    }
  },
  mounted() {
    this.loadShopData();
    this.loadShopReviews();
  },
  methods: {
    async loadShopData() {
      let shop = this.$route.params.shop

      if (typeof shop === "string") {
        const result = await supabase
          .from<definitions['shop_names']>('shop_names')
          .select()
          .eq('shop', shop)

        if (
          result &&
          result.data?.length &&
          result.data?.length > 0 &&
          result.data[0].name
        )
          this.name = result?.data[0].name;
      }

    },
    async loadShopReviews() {
      // let shop = this.$route.params.shop

      // if (typeof shop === "string") {
      //   const result = await supabase
      //     .from<definitions['shop_reviews']>('shop_reviews')
      //     .select()
      //     .eq('shop', shop)
      //     .range(0,15)

      //   if (
      //     result &&
      //     result.data?.length &&
      //     result.data?.length > 0 &&
      //     result.data[0].name
      //   )
      //     this.name = result?.data[0].name;
      // }
    }
  }
}
</script>
      
<style scoped>

</style>