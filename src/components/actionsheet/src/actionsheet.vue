<template>
    <div>
        <hui-mask v-model="show" @click.native="close" :opacity="maskerOpacity"></hui-mask>
        <div class="hui-actionsheet" :class="show ? 'hui-actionsheet-active' : ''">
            <a v-for="item, key in items" @click.stop="itemClick(item)" href="javascript:;" class="hui-actionsheet-item" :key="key">{{item.label}}</a>
            <a v-if="cancel" @click.stop="close" href="javascript:;" class="hui-actionsheet-action">{{cancel}}</a>
        </div>
    </div>
</template>

<script type="text/babel">
    import {isIOS, pageScroll} from '../../../utils/assist';
    import Mask from '../../mask/src/mask.vue';

    export default {
        name: 'hui-actionsheet',
        components: {
            'hui-mask': Mask
        },
        data() {
            return {
                show: this.value
            }
        },
        props: {
            value: {
                type: Boolean,
                default: false
            },
            items: {
                type: Array,
                required: true
            },
            cancel: String,
            maskerOpacity: {
                validator(val) {
                    return /^([0]|[1-9]\d*)?(\.\d*)?$/.test(val);
                },
                default: .5
            }
        },
        watch: {
            value(val) {
                if (isIOS) {
                    val ? pageScroll.lock() : pageScroll.unlock();
                }
                this.show = val;
            }
        },
        methods: {
            itemClick(item) {
                if(item) {
                    typeof item.callback === 'function' && item.callback(item);
                    !item.stay && this.close();
                }
            },
            close() {
                this.$emit('input', false);
            }
        },
        destroyed() {
            this.close();
            pageScroll.unlock();
        }
    }
</script>

<style lang="less">
    @import "../../../styles/components/actionsheet.less";
</style>
