<template>
    <div class="hui-flexbox-item" :class="classes">
        <slot></slot>
    </div>
</template>

<script type="text/babel">
    export default {
        name: 'hui-flexbox-item',
        props: {
            align: {
                validator(val) {
                    return ['top', 'center', 'bottom'].indexOf(val) > -1;
                },
                default: 'center'
            }
        },
        computed: {
            classes() {
                if (this.align === 'top') {
                    return 'hui-flexbox-item-start';
                } else if (this.align === 'bottom') {
                    return 'hui-flexbox-item-end';
                } else {
                    return 'hui-flexbox-item-center';
                }
            }
        }
    }
</script>
