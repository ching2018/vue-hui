<template>
    <div class="hui-slider-item">
        <slot></slot>
    </div>
</template>

<script type="text/babel">
    export default {
        name: 'hui-slider-item',
        mounted() {
            this.$nextTick(this.$parent.init);
        }
    }
</script>
