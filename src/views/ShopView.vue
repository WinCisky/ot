<script setup lang="ts">
import '@splidejs/vue-splide/css';
import Ot from '../components/icons/Ot.vue';
import { Splide, SplideSlide, Options } from '@splidejs/vue-splide';

const splide_options : Options = {
  rewind: true, 
  // padding: 75, 
  // width: 800, 
  arrows: false,
  pagination: false,
  gap: 20, 
  perPage: 4,
  breakpoints: {
		768: {
			perPage: 2,
		},
    1024: {
      perPage: 3
    }
  },
  autoScroll: {
    speed: 1
  }
}
</script>
      
<template>

  <div>
    <router-link to="/">
      <Ot class="logo opentrust" />
    </router-link>
  </div>

  <h1>{{ name }}</h1>
  <Splide :options="splide_options" :extensions="{ AutoScroll }" aria-label="latest five reviews" v-if="reviews_first_row.length > 0">
    <SplideSlide v-for="review in reviews_first_row" :key="review.created_at" class="review">
      <div class="stars">
        <span v-for="index in 5" :key="index" :class="{active: (review.score && review.score >= index)}">
          &#9733;
        </span>
      </div>
      <div class="content">
        {{ review.description }}
      </div>
      <div class="name">
        {{ review.name }}
      </div>
      <div class="time">
        {{ timeSince(new Date(review.created_at ? review.created_at : 0)) }} ago
      </div>
    </SplideSlide>
  </Splide>
</template>
      
      
<script lang="ts">
import { supabase } from '../supabase'
import type { definitions } from '../supabase_types';
import { AutoScroll } from '@splidejs/splide-extension-auto-scroll';

export default {
  data() {
    return {
      name: "",
      loaded: false,
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
      let shop = this.$route.params.shop

      if (typeof shop === "string") {
        const result = await supabase
          .from<definitions['shop_reviews']>('shop_reviews')
          .select()
          .eq('shop', shop)
          .range(0, 15)

        if (
          result &&
          result.data?.length &&
          result.data?.length > 0
        ) {
          this.reviews_first_row = result.data.slice(0, Math.min(5, result.data.length));
          // if (this.reviews_first_row.length < 5) {
          //   for (let index = this.reviews_first_row.length; index < 5; index++) {
          //     this.reviews_first_row.push(this.reviews_first_row[0]);
          //     this.reviews_first_row[0].score = 5;
          //   }
          // }
          if (result.data.length > 5) {
            this.reviews_second_row = result.data.slice(5, Math.min(10, result.data.length));
            if (result.data.length > 10) {
              this.reviews_third_row = result.data.slice(10, result.data.length);
            }
          }
        }
      }
    },
    timeSince(date: Date) {
      var seconds = Math.floor((new Date().getTime() - date.getTime()) / 1000);
      var interval = seconds / 31536000;

      if (interval > 1) {
        return Math.floor(interval) + " years";
      }
      interval = seconds / 2592000;
      if (interval > 1) {
        if (interval < 2)
          return "1 month";
        return Math.floor(interval) + " months";
      }
      interval = seconds / 86400;
      if (interval > 1) {
        if (interval < 2)
          return "1 day";
        return Math.floor(interval) + " days";
      }
      interval = seconds / 3600;
      if (interval > 1) {
        if (interval < 2)
          return "1 hour";
        return Math.floor(interval) + " hours";
      }
      interval = seconds / 60;
      if (interval > 1) {
        if (interval < 2)
          return "1 minute";
        return Math.floor(interval) + " minutes";
      }
      if (interval < 2)
        return "1 second";
      return Math.floor(seconds) + " seconds";
    }
  }
};
</script>
      
<style scoped lang="scss">
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

.review {
  border-radius: 0.5rem;
  border: 2px solid;
  padding: 20px;
  display: flex;
  flex-direction: column;
  cursor: pointer;
  min-height: 200px;
  min-width: 300px;
  font-family: Roboto;

  .content {
    flex: 1;
    overflow: hidden;
    -webkit-box-orient: vertical;
    display: block;
    display: -webkit-box;
    overflow: hidden;
    text-overflow: ellipsis;
    -webkit-line-clamp: 8;
    text-align: left;
  }

  .name {
    display: flex;
    /* justify-content: flex-end; */
    font-weight: 500;
  }

  .time {
    font-size: small;
    text-align: left;
  }

  .stars {
    font-size: large;
    color: #f5f5f522;
    text-align: left;
    .active{
      color: #f5f5f5;
    }
  }
}

@media (prefers-color-scheme: light) {
  .logo{
    &.opentrust {
      fill: #2563EB;
    }
    &:hover {
      filter: drop-shadow(0 0 2em #E0E0E0aa);
    }
  }

  .review{
    border-color: orange;
    .stars {
      color: #f5f5f5;
      .active {
        color: orange;
      }
    }
  }
}

</style>