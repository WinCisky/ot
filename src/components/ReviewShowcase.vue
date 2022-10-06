<script setup lang="ts">
import { ref } from 'vue'

defineProps({
    msg: String
})

// const container = document.getElementById("container");
// console.log(container);

const count = ref(0)
</script>
        
<template>

    <div class="section">
        <h2 class="section__title">{{ msg }}</h2>


        <div class="container" id="container" ref="container" @mousemove="mouseMove">
            <div class="cube" id="cube" ref="cube">
                <li class="splide__slide review side front" style="border-color: orange">
                    <div class="stars">
                        <span class='active'>&#9733;</span>
                        <span class='active'>&#9733;</span>
                        <span class='active'>&#9733;</span>
                        <span class='active'>&#9733;</span>
                        <span class='active'>&#9733;</span>
                    </div>
                    <div class="content">
                        Really good shop.
                    </div>
                    <div class="name">
                        Simone
                    </div>
                    <div class="time">
                        20 min ago
                    </div>
                </li>
            </div>
        </div>

    </div>


</template>
    
<script lang="ts">
export default {
    data() {
        return {
            last_rotation_x: 0,
            last_rotation_y: 0,
            anchor_x: 0,
            anchor_y: 0,
            freedom: 20,
            slow: 0.22,
            box_width: 1,
            box_heigth: 1
        }
    },
    created() {
        window.addEventListener('scroll', this.handleScroll);
    },
    destroyed() {
        window.removeEventListener('scroll', this.handleScroll);
    },
    mounted() {
        this.loadContainerData();
    },
    methods: {
        loadContainerData() {
            const box = (this.$refs as any).container?.getBoundingClientRect();
            if(box) {
                this.anchor_x = box.left + box.width / 2;
                this.anchor_y = box.top + box.height / 2;
                this.box_width = box.width;
                this.box_heigth = box.height;
            }
        },
        handleScroll() {
            this.loadContainerData();
        },
        mouseMove(event: MouseEvent) {
            // console.log(this.$refs.container);
            // console.log(this.container);
            // console.log(event.clientX, event.clientY);
            this.rotateCube(event);
        },
        lerp(start: number, end: number, amt: number) {
            return (1 - amt) * start + amt * end;
        },
        rotateCube(event: MouseEvent) {
            const pos_x = event.clientX;
            const pos_y = event.clientY;

            const x_ratio = (pos_x - this.anchor_x) / (this.box_width / 2);
            const y_ratio = (pos_y - this.anchor_y) / (this.box_heigth / 2);

            const new_pos_x = this.lerp(this.last_rotation_x, x_ratio * this.freedom, this.slow);
            const new_pos_y = this.lerp(this.last_rotation_y, -y_ratio * this.freedom, this.slow);

            (this.$refs as any).cube.style.transform = `rotateX(${new_pos_y}deg) rotateY(${new_pos_x}deg)`;

            this.last_rotation_x = new_pos_x;
            this.last_rotation_y = new_pos_y;
        }
    }
}
</script>
        
<style scoped>
.section {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 20vh;
}

@media only screen and (max-width: 767px) {
    .section {
        flex-direction: column;
    }
}

.section__title {
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
}

body {
    background-color: #eee;
    /* min-height: 100vh; */
    display: -webkit-box;
    display: flex;
    -webkit-box-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    align-items: center;
}

.container {
    width: 400px;
    height: 300px;
    /* border: 2px solid white; */
    border-radius: 4px;
    display: -webkit-box;
    display: flex;
    -webkit-box-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    align-items: center;
    -webkit-perspective: 500px;
    perspective: 500px;
}

.cube {
    position: relative;
    width: 200px;
    height: 200px;
    -webkit-transform-style: preserve-3d;
    transform-style: preserve-3d;
}

.side {
    position: absolute;
    width: 100%;
    height: 100%;
    opacity: 0.9;
}

.front {
    background-color: #d50000;
    -webkit-transform: translateZ(100px);
    transform: translateZ(100px);
}

.splide_content_padding {
    padding: 3.5rem;
}

.splide__slide.review {
    border-radius: 0.5rem;
    border: 2px solid;
    padding: 20px;
    display: flex;
    flex-direction: column;
    cursor: pointer;
    min-height: 200px;
    background-color: #424242;

    width: 300px;
    height: 200px;
}

.splide__slide .content {
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

.splide__slide .name {
    display: flex;
    /* justify-content: flex-end; */
    font-weight: 500;
    text-align: left;
}

.splide__slide .time {
    font-size: small;
    text-align: left;
}

.splide__slide .stars {
    font-size: large;
    color: orange;
    text-align: left;
}

@media (prefers-color-scheme: light) {
    .splide__slide.review {
        background-color: #fff;
    }
}
</style>
        