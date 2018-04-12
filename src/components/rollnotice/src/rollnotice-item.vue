<template>
    <div class="hui-rollnotice-item"><slot></slot></div>
</template>

<script type="text/babel">
    export default {
        name: 'hui-rollnotice-item',
        mounted() {
            this.$parent.init();
        }
    }
</script>
