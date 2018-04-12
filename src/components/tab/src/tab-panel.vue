<template>
    <div class="hui-tab-panel-item" :class="classes">
        <slot></slot>
    </div>
</template>

<script type="text/babel">
    export default {
        name: 'hui-tab-panel',
        data() {
            return {
                isCurrent: false
            }
        },
        props: {
            label: String,
            active: Boolean,
            tabkey: [String, Number]
        },
        computed: {
            classes() {
                return this.$parent.activeIndex === this._uid || this.isCurrent ? 'hui-tab-active' : '';
            }
        },
        watch: {
            active() {
                this.$parent.init();
            },
            label() {
                this.$parent.init();
            }
        },
        mounted() {
            this.$nextTick(() => {
                this.$parent.init();
            });
        }
    }
</script>
