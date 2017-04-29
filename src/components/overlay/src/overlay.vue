<template>
    <div class="vmc-mask"
         :class="transparent ? 'transparent' : 'black'"
         @click.stop="_onClick"
         v-stop.move>
    </div>
</template>

<script type="text/babel">
    export default {
        name: 'hui-overlay',
        props: {
            transparent: Boolean
        },
        methods: {
            _onClick() {
                this.$emit('on-click');
            }
        }
    }
</script>
<style lang="less">
    @import '../../../styles/components/overlay.less';
</style>