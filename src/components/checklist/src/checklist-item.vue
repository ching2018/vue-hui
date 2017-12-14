<template>
    <div class="hui-checklist-item" @click="emitChangeHandler">
        <div class="hui-checklist-item-icon" v-if="label">
            <input type="checkbox" :disabled="disabled" :checked="checked">
            <span class="hui-checklist-icon"><i></i></span>
        </div>
        <label class="hui-checklist-item-icon" v-else>
            <input type="checkbox" :disabled="disabled" :checked="checked" @change="changeHandler">
            <span class="hui-checklist-icon"><i></i></span>
        </label>
        <div class="hui-checklist-content">
            <slot></slot>
        </div>
    </div>
</template>

<script type="text/babel">
    export default {
        name: 'hui-checklist-item',
        data() {
            return {
                checked: false,
                label: true
            }
        },
        methods: {
            changeHandler() {
                if (this.disabled) return;
                this.checked = !this.checked;
                this.$parent.emitInput();
            },
            emitChangeHandler() {
                if (!this.label) return;
                this.changeHandler();
            }
        },
        props: {
            disabled: {
                type: Boolean,
                default: false
            },
            val: {
                type: [Boolean, String, Number],
                required: true
            }
        },
        mounted() {
            this.$nextTick(this.$parent.checkItem);
        }
    }
</script>
