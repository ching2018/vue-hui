<template>
    <div class="root" ref="vueScroll" @touchstart="onTouchStart($event)" @touchmove="onTouchMove($event)" @touchend="onTouchEnd($event)" @scroll="isScroll($event)">
        <div class="div-scroll-inner" :style="transform ? { transform:'translate3d(0,'+top+'px,0)'} : ''" ref="scrollInner">
            <div class="div-refresh" v-if="onRefresh && !isLoading && (moving || state!=0)">
                <slot name='refresh'>
                    <div :class="{'div-down':state===0,'div-up':state===1,'div-refreshing':state===2 }"></div>
                    <span v-if="state===0">下拉刷新</span>
                    <span v-if="state===1">释放刷新</span>
                    <span v-if="state===2">正在刷新……</span>
                </slot>
            </div>
            <slot></slot>
            <!-- && isLoading -->
            <div class="div-loading" v-if="isLoading && !loadDisabled && onLoad ">
                <img src="../../../images/ic-loading.png">
                <span>加载中...</span>
            </div>
            <div class="no-data-text" :class="{'active': !isLoading && loadingState == 2}" v-text="noDataText">
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'hui-scroller',
    props: {
        // 下拉刷新函数
        onRefresh: {
            type: Function,
            default: undefined
        },
        // 下拉加载中的高度
        offsetH: {
            type: Number,
            default: 20
        },
        // 底部加载
        onLoad: {
            type: Function,
            default: undefined
        },
        loadDisabled: {
            type: Boolean,
            default: true
        },
        // 底部加载中高度
        bottomH: {
            type: Number,
            default: 20
        },
        noDataText: {
            default: '没有更多数据了'
        },
        onScroll: {
            type: Function,
            default: undefined
        },
    },
    data() {
        return {
            top: 0,
            // 初始位置
            startY: 0,
            // 状态变化：
            // 0: 下拉刷新 => 初始状态
            // 1: 释放加载
            // 2: 下拉刷新中
            state: 0,
            loadingState: 0, // 0: stop, 1: loading, 2: stopping loading
            isLoading: false,
            // 移动进行中
            moving: false,
            transform: true
        }
    },
    methods: {
        onTouchStart(e) {
            this.startY = e.touches[0].pageY
            this.moving = false;
        },

        onTouchMove(e) {
            this.isLoading = false
            if (!this.onRefresh) {
                return
            }
            let diff = e.touches[0].pageY - this.startY
            if (diff < 0 || this.$el.scrollTop > 0) {
                return
            }
            this.moving = true
            e.preventDefault()
            this.top = Math.pow(diff, 0.8) + (this.state === 2 ? this.offsetH : 0)
            if (this.state === 2) {
                return
            }
            if (this.top >= this.offsetH) {
                this.state = 1
            } else {
                this.state = 0
            }
        },

        onTouchEnd(e) {
            this.moving = false
            if (this.state === 2) {
                this.top = this.offsetH
                return
            }

            // 判断下拉刷新
            if (this.top > this.offsetH) {
                this.state = 2
                this.top = this.offsetH
                this.onRefresh(() => {
                    this.state = 0
                    this.top = 0
                })
                return
            }

            this.state = 0
            this.top = 0
        },

        // 上拉加载
        isScroll(e) {
            if (typeof this.onScroll === "function") {
                this.onScroll(this.$refs.vueScroll.clientHeight, this.$el.scrollTop);
            }
            if (this.$el.scrollTop > 0) {
                this.transform = false;
            } else {
                this.transform = true;
            }
            if (!this.onLoad || this.loadDisabled) {
                return
            }
            let outerHeight = this.$refs.vueScroll.clientHeight
            let innerHeight = this.$refs.scrollInner.clientHeight
            if (innerHeight - outerHeight - this.bottomH <= this.$el.scrollTop) {
                if (this.loadingState) return
                this.loadingState = 1
                this.isLoading = true
                this.onLoad(setTimeout(() => {
                    this.loadingState = this.loadDisabled ? 2 : 0
                    this.isLoading = false
                    console.log(this.loadingState)
                }, 1000))
            }
            return
        }
    }
}
</script>
<style lang="less">
    @import "../../../styles/components/scroller.less";
</style>
