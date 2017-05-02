<template>
    <div class="vmc-popup-wrapper">
        <transition name="vmc-popup-fade">
            <hui-overlay @on-click="_onMaskClick" v-if="showMask" v-show="localShow"></hui-overlay>
        </transition>

        <transition :name="'vmc-popup-' + position">
            <div v-show="localShow" class="vmc-popup" :class="'vmc-popup-' + position" :style="style">
                <slot></slot>
            </div>
        </transition>
    </div>
</template>

<script type="es6">
    import Overlay from '../../overlay/src/overlay.vue';

    export default {
        name: 'hui-popup',
        components: {
            'hui-overlay': Overlay
        },
        props: {
            show: Boolean,
            mask: {
                default: null
            },
            height: {
                default: null
            },
            width: {
                default: '100%'
            },
            hideOnMask: {
                default: true
            },
            position: {
                type: String,
                default: 'bottom'       // top, left, right, bottom
            }
        },
        computed: {
            style() {
                return {
                    width: this.getCSSSize(this.width),
                    height: this.getCSSSize(this.getHeight)
                }
            },
            getHeight() {
                if (this.height !== null) {
                    return this.height;
                }

                switch (this.position) {
                    case 'top': return 'auto';
                    default: return '100%';
                }
            },
            showMask() {
                var mask = this.mask;
                if (mask !== null) {
                    return mask;
                }

                switch (this.position) {
                    case 'top': return false;
                    default: return true;
                }
            }
        },
        methods: {
            _onMaskClick() {
                if (this.hideOnMask) {
                    this._hide();
                }
            },
            _hide() {
                this.localShow = false;
                this.$emit('on-hide');
                this.$emit('on-sync-show', false);
            },
            isNumeric: function(n) {
                return !Array.isArray(n) && !isNaN(parseFloat(n)) && isFinite(n);
            },
            isCSSSize: function(value) {
                return /[0-9.]+\s*(px|in|cm|mm|em|rem|pt|pc|ex|ch|vw|vh|vmin|vmax|%)\s*$/.test(value);
            },
            getCSSSize:function(value) {
                if (this.isCSSSize(value)) {
                    return value;
                } else if (this.isNumeric(value)) {
                    return value + 'px';
                } else {
                    return value;
                }
            }
        },
        data() {
            return {
                localShow: this.show
            }
        },
        watch: {
            show(show) {
                if (this.localShow !== show) {
                    this.localShow = show;
                }

                if (this.position === 'top' && show === true) {
                    setTimeout(() => {
                        this._hide();
                    }, 1000);
                }
            }
        }
    };
</script>
<style lang="less">
    @import '../../../styles/components/popup.less';
</style>