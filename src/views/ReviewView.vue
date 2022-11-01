<script lang="ts" setup>
import { useI18n } from 'vue-i18n';
const { t } = useI18n({
  useScope: 'global'
})
</script>
      
<template>
  <div class="card">
    <div class="text__greetings">
      <p>
        {{ t('Hello,') }}
      </p>
      <p>
        {{ t('write about your shopping experience') }}
      </p>
      <p>
        {{ t('on ') + shopName }}
      </p>
    </div>
    <div class="input__description">
      <textarea id="description" required placeholder="Description" v-on:input="auto_grow"></textarea>
    </div>
    <div class="text__requirement">
      <p>
        {{ t('Give a score') }}
      </p>
    </div>
    <div class="input__stars">
      <div class="input__stars__star active">★</div>
      <div class="input__stars__star active">★</div>
      <div class="input__stars__star active">★</div>
      <div class="input__stars__star active">★</div>
      <div class="input__stars__star">★</div>
    </div>
    <div class="input__submit">
      <div class="button">
        {{ t('Submit') }}
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { supabase } from '../supabase'
import type { definitions } from '../supabase_types';

export default {
  data() {
    return {
      shopName: "",
      loaded: false,
    }
  },
  mounted() {
    this.loadShopData();
  },
  methods: {
    async loadShopData() {
      let shop = this.$route.params.shop;
      if (shop) {

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
            this.shopName = result?.data[0].name;
        }
      }
    },
    auto_grow(event: Event) {
      let element = event.target as HTMLElement;
      if(element){
        element.style.height = "5px";
        element.style.height = (element.scrollHeight + 20)+"px";
      }
    }
  }
}
</script>

<style lang="scss">
body {
  background-color: rgb(249, 250, 251);
}
</style>
      
<style scoped lang="scss">
.card {
  width: min(calc(100% - 60px), 350px);
  margin: auto;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 20px;
  font-family: Roboto;
  // border: 1px solid #ccc;
  border-radius: 4px;
  box-shadow: 0 0 #0000, 0 0 #0000, 0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1);
  ;

  .text {

    &__greetings,
    &__requirement {
      text-align: left;

      &>p {
        margin: 0;
      }
    }
  }

  .input {
    &__description {
      width: 100%;

      &>textarea {
        display: block;
        width: 100%;
        box-sizing: border-box;
        border-color: #cbd5e1;
        border-radius: 5px;
        font-family: Roboto;
        font-size: 16px;
        padding: 10px;
        resize: vertical;

        &:focus{
          outline: 1px solid #2564eb22;

        }

        &::placeholder {
          color: #ccc;
          text-shadow: none;
        }
      }
    }

    &__stars {
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 28px;
      gap: 5px;

      &__star {
        cursor: pointer;

        &.active {
          color: orange;
        }
      }
    }

    &__submit {
      margin-top: 20px;
      width: 100%;
      display: flex;
      justify-content: flex-end;

      &>.button {
        // background-color: #2563EB;
        background-color: transparent;
        border: 2px solid #2563EB;
        border-radius: 4px;
        padding: 6px 20px;
        color: #2563EB;
        cursor: pointer;
        font-weight: 600;

        background: {
          image: linear-gradient(45deg, #2563EB 50%, transparent 50%);
          position: 100%;
          size: 400%;
        }

        transition: background 300ms ease-in-out;

        &:hover {
          background-position: 0;
          color: #fff;
        }
      }
    }
  }
}
</style>
      