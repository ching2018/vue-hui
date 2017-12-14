<template>
    <div class="hui-flexbox" :class="direction == 'vertical' ? 'hui-flexbox-vertical' : 'hui-flexbox-horizontal'">
        <slot></slot>
    </div>
</template>

<script type="text/babel">
    export default {
        name: 'hui-flexbox',
        props: {
            direction: {
                validator(value) {
                    return ['horizontal', 'vertical'].indexOf(value) > -1;
                },
                default: 'horizontal'
            }
        }
    }
</script>

<style lang="less">
    @import '../../../styles/components/flexbox.less';
</style>
