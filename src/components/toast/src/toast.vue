<template>
    <div class="vmc-toast" transition="vmc-toast" v-show="show">
        <hui-overlay transparent></hui-overlay>
        <div class="block" :class="where" :style="{ 'padding': showIcon ? '20px' : '10px' }">
            <div class="icon" v-if="showIcon">
                <hui-spinner v-if="type == 'loading'" color="#ffffff" size="48" type="0"></hui-spinner>
                <i :class="icon" v-else></i>
            </div>
            <span class="text" v-show="content" :style="{ 'margin-top': showIcon ? '10px' : '' }">{{content}}</span>
        </div>
    </div>
</template>

<script type="es6">
    const TOASTS = [
        'loading',
        'success',
        'error',
        'info'
    ];

    export default {
        data() {
            return {
                type: 'loading',
                show: false,
                content: '',
                position: 'center'    // top, center, bottom
            }
        },
        computed: {
            showIcon() {
                return !!~TOASTS.indexOf(this.type);
            },
            where() {
                return 'block-' + (!!~['top', 'center', 'bottom'].indexOf(this.position) ? this.position : 'center');
            },
            icon() {
                return {
                    success: 'icono-checkCircle',
                    error: 'icono-crossCircle',
                    info: 'icono-exclamationCircle'
                }[this.type];
            }
        },
        methods: {
            _show(options) {
                this.type = options.type;
                this.content = options.content;
                this.position = options.position;
                this.show = true;

                if (typeof options.second === 'number' && options.second > 0) {
                    setTimeout(() => this._hide(), options.second * 1000);
                }
            },
            _hide() {
                this.show = false;
            }
        }
    }
</script>
<style lang="less">
    @import '../../../styles/components/toast.less';
</style>
