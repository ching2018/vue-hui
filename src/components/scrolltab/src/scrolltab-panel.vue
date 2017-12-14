<template>
    <div class="hui-scrolltab-content-item">
        <strong class="hui-scrolltab-content-title">{{label}}</strong>
        <slot></slot>
    </div>
</template>

<script type="text/babel">
    export default {
        name: 'hui-scrolltab-panel',
        props: {
            label: String,
            icon: String,
            active: Boolean
        },
        mounted() {
            this.$parent.addItem({label: this.label, icon: this.icon, _uid: this._uid});
        }
    }
</script>
