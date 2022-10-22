<script setup lang="ts">
import { ref } from 'vue'
import Search from './icons/Search.vue'

defineProps({
    msg: String
})

const { t } = useI18n({
    useScope: 'global'
})

const count = ref(0)
</script>
    
<template>
    <h1>{{ msg }}</h1>

    <div class="card">
        <div class="search__container">
            <div class="search__bar" :class="{ open: searched }">
                <input type="text" class="search__input" id="search__bar__input" ref="search"
                    :class="{ open: searched }">
                
            </div>
            <div class="search__results" id="search__results" :class="{ open: searched }">
                <div class="result" v-for="item in results" :key="item.name" @click="openSearchResult(item.shop)">
                    {{ item.name }}
                </div>
            </div>
        </div>
        <p>
            {{ t('Search a store and look at the reviews') }}
        </p>
    </div>
</template>
    
    
<script lang="ts">
import { supabase } from '../supabase'
import type { definitions } from '../supabase_types';
import { useI18n } from 'vue-i18n';

export default {
    data() {
        return {
            searched: false,
            results: [] as { name: string, shop: string }[],
        }
    },
    mounted() {
        this.waitForSearch();
    },
    methods: {
        waitForSearch() {
            const inputElem = this.$refs.search as HTMLInputElement;

            inputElem?.addEventListener('input', async () => {
                if (inputElem && inputElem.value != "" && inputElem.value.length >= 2) {
                    const search_val = inputElem.value;
                    // search on supabase
                    let result = await supabase
                        .from<definitions["shop_names"]>('shop_names')
                        .select()
                        .textSearch('name', `${search_val}:*`);
                    if (!result.error && result.data.length > 0) {
                        this.results = [];
                        result.data.forEach(element => {
                            if (element.name && element.shop)
                                this.results.push({ shop: element.shop, name: element.name })
                        });
                        this.searched = true;
                    }
                } else {
                    this.results = [];
                    this.searched = false;
                }
            });
        },
        openSearchResult(shop: string) {
            // window.location.href = `/shops?shop=${shop}`;
            const encodedShop = encodeURI(shop);
            this.$router.push(`/shop/${encodedShop}`);
        }
    }
}
</script>
    
<style scoped lang="scss">
.search__bar {
    display: flex;
    justify-content: center;
    align-items: center;
    .search__input {
        padding: 8px 16px;
        height: 30px;
        width: 296px;
        border: 1px solid var(--border);
        border-radius: 15px;
        border-right: 2px;
        background-color: #3b3b3b;
        position: relative;
        font-size: 16px;
        background-image: url("/search_dark.svg");
        background-position: right;
        background-repeat: no-repeat;
        background-size: 20px;
        background-origin: content-box;

        &.open {
            border-radius: 15px 15px 0 0;
        }
        &:focus {
            outline: none;
        }
    }
}

.search__container {
    display: flex;
    flex-direction: column;
    position: relative;
}

.search__btn {
    border-left: none;
    border-radius: 0 15px 15px 0;
    height: 46px;
    width: 46px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: var(--border);
    cursor: pointer;
    background-color: #3b3b3b;
    &.open {
        border-radius: 0 15px 0 0;
    }
}

.search__icon {
    width: 20px;
    padding: 5px;
    stroke: #242424;
}

.search__results {
    position: absolute;
    top: 0;
    display: flex;
    flex-direction: column;
    left: 50%;
    transform: translateX(-50%);
    width: 328px;
    top: 46px;
    z-index: 1;
    background-color: #3b3b3b;
    border-radius: 0 0 15px 15px;
    font-family: Arial, Helvetica, sans-serif;
    font-size: 15px;

    &.open:before {
        content: ' ';
        height: 1px;
        width: 80%;
        position: absolute;
        background-color: #616161;
        left: 50%;
        transform: translate(-50%);
        top: 0;
    }
}

.result {
    height: 46px;
    display: flex;
    padding-left: 16px;
    padding-right: 16px;
    align-items: center;
    cursor: pointer;
    &:hover {
        background: #616161;
        &:last-child {
            border-radius: 0 0 15px 15px;
        }
    }
}

@media (prefers-color-scheme: light) {
    .search__btn {
        border-right: 1px solid #bdbdbd;
        border-top: 1px solid #bdbdbd;
        border-bottom: 1px solid #bdbdbd;
        background-color: #fff;
    }
    .search__bar{
        .search__input {
            border: 1px solid #bdbdbd;
            background-color: #fff;
            background-image: url("/search_light.svg");
        }
    }

    .search__results{
        &.open {
            background-color: #fff;
            border-bottom: 1px solid #bdbdbd;
            border-left: 1px solid #bdbdbd;
            border-right: 1px solid #bdbdbd;
            &:before {
                background-color: #f5f5f5;
            }
        }
        .result:hover {
            background-color: #EEEEEE;
        }
    }
}
</style>