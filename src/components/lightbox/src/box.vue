<template>
    <div>
        <div class="hui-lightbox">
            <div class="hui-lightbox-head" :class="show ? '' : 'hui-lightbox-up-hide'">
                <span>{{currentIndex}} / {{imgItems.length}}</span>
                <a href="javascript:;" @click="close">关闭</a>
            </div>
            <div class="hui-lightbox-img" @click="show = !show">
                <swiper ref="lightboxSwiper" :options="options" :not-next-tick="notNextTick">
                    <swiper-slide v-for="item in imgItems">
                        <img :src="getImgSrc(item.$el)">
                    </swiper-slide>
                </swiper>
                <div class="hui-lightbox-loading">
                    <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid">
                        <circle cx="50" cy="50" fill="none" stroke="#ffffff" stroke-width="7" r="47" stroke-dasharray="221.48228207808043 75.82742735936014" transform="rotate(25.5138 50 50)">
                            <animateTransform attributeName="transform" type="rotate" calcMode="linear" values="0 50 50;360 50 50" keyTimes="0;1" dur="0.8s" begin="0s" repeatCount="indefinite"></animateTransform>
                        </circle>
                    </svg>
                </div>
            </div>
            <div class="hui-lightbox-foot" :class="show ? '' : 'hui-lightbox-down-hide'" v-if="!!txtHTML" v-html="txtHTML"></div>
        </div>
    </div>
</template>
<script type="text/babel">
import Swiper from '../../swiper/src/swiper.vue';
import SwiperSlide from '../../swiper/src/swiper-slide.vue';
let lightboxVue;
export default {
    components: {
        swiper: Swiper,
        swiperSlide: SwiperSlide
    },
    created() {
        lightboxVue = this;
    },
    data() {
        return {
            currentIndex: 1,
            index: 1,
            imgItems: [],
            show: true,
            txtHTML: '',
            notNextTick: true,
            slideToIndex: 1,
            options: {
                direction: 'horizontal',
                onSlideChangeEnd: function(swiper) {
                    lightboxVue.currentIndex = swiper.activeIndex + 1;
                }
            }
        }
    },
    computed: {
        lightboxSwiperReal() {
            return lightboxVue.$refs.lightboxSwiper.swiper
        }
    },
    methods: {
        close() {
            this.$el.parentNode && this.$el.parentNode.removeChild(this.$el);
        },
        getImgSrc(el) {
            return el.getAttribute('original') || el.getAttribute('src');
        }
    },
    mounted() {
        this.$nextTick(function() {
            lightboxVue.lightboxSwiperReal.slideTo(lightboxVue.index - 1, 1000, false);
            lightboxVue.lightboxSwiperReal.update(true);
        });
        lightboxVue.$forceUpdate();
    }
}
</script>
