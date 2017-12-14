<template>
    <label class="hui-cell-item" v-if="type == 'label' || type == 'checkbox' || type == 'radio'">
        <span class="hui-cell-left" v-if="checkLeft">
            <span class="hui-cell-icon"><slot name="icon"></slot></span>
            <slot name="left"></slot>
        </span>
        <label class="hui-cell-right" :class="classes">
            <slot name="right"></slot>
            <i v-if="type == 'checkbox'" class="hui-cell-checkbox-icon"></i>
            <i v-if="type == 'radio'" class="hui-cell-radio-icon"></i>
        </label>
    </label>
    <router-link class="hui-cell-item" :to="href" v-else-if="type == 'link'">
        <div class="hui-cell-left" v-if="checkLeft">
            <span class="hui-cell-icon"><slot name="icon"></slot></span>
            <slot name="left"></slot>
        </div>
        <div class="hui-cell-right" :class="classes">
            <slot name="right"></slot>
        </div>
    </router-link>
    <a class="hui-cell-item" :href="href" v-else-if="type == 'a'">
        <div class="hui-cell-left" v-if="checkLeft">
            <span class="hui-cell-icon"><slot name="icon"></slot></span>
            <slot name="left"></slot>
        </div>
        <div class="hui-cell-right" :class="classes">
            <slot name="right"></slot>
        </div>
    </a>
    <div class="hui-cell-item" v-else>
        <div class="hui-cell-left" v-if="checkLeft">
            <span class="hui-cell-icon"><slot name="icon"></slot></span>
            <slot name="left"></slot>
        </div>
        <div class="hui-cell-right" :class="classes">
            <slot name="right"></slot>
        </div>
    </div>
</template>

<script type="text/babel">
    export default {
        name: 'hui-cell-item',
        props: {
            type: {
                validator (value) {
                    return ['link', 'a', 'label', 'div', 'checkbox', 'radio'].indexOf(value) > -1;
                },
                default: 'div'
            },
            arrow: {
                type: Boolean,
                default: false
            },
            href: {
                type: [String, Object]
            }
        },
        computed: {
            checkLeft() {
                return !!this.$slots.left || !!this.$slots.icon;
            },
            classes() {
                return this.arrow ? 'hui-cell-arrow' : '';
            }
        }
    }
</script>

<style lang="less">
    @import '../../../styles/components/cell.less';
</style>
