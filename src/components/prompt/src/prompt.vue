<template>
    <hui-dialogbox :show="show" class="vmc-prompt" :class="{'no-content': !content}">
        <div name="header">
            <div><p>{{title}}</p></div>
        </div>
        <div name="content">
            <div v-html="content" v-if="content"></div>
            <div class="prompt-input">
                <label class="vmc-1px" :class="{ invalid: invalid }">
                    <input v-model="value" :placeholder="placeholder">
                </label>
                <div class="error-message" v-if="!!message">{{message}}</div>
            </div>
        </div>
        <div name="footer">
            <span class="vmc-1px-right" :class="type === 0 ? 'default' : 'primary'" @click.stop="_onCancel">
                {{btn1}}
            </span>
            <span class="primary" @click.stop="_onConfirm">
                {{btn2}}
            </span>
        </div>
    </hui-dialogbox>
</template>

<script type="es6">
    import Overlay from '../../overlay/src/overlay.vue';
    import DialogBox from '../../dialogbox/src/dialogbox.vue';

    export default {
        name: 'hui-prompt',
        components: {
            'hui-overlay': Overlay,
            'hui-dialogbox': DialogBox
        },
        data() {
            return {
                show: false,
                title: '',
                content: '',
                validator: null,
                confirm: null,
                cancel: null,
                btn1: '取消',
                btn2: '确定',
                type: 0,
                value: '',
                invalid: false,
                placeholder: '',
                message: ''
            }
        },
        methods: {
            _onConfirm(e) {
                var valid = true;
                if (this.validator) {
                    var type = Object.prototype.toString.call(this.validator);
                    switch (type) {
                        case '[object RegExp]':
                            valid = this.validator.test(this.value);
                            break;
                        case '[object Function]':
                            valid = this.validator(this.value);
                            break;
                        default:
                            valid = true;
                    }
                }

                if (valid !== true) {
                    if (typeof valid === 'string') {
                        this.message = valid;
                    }
                    this.invalid = true;
                    return;
                }

                this.show = false;
                this.$emit('on-confirm', e);

                if (this.confirm && typeof this.confirm === 'function') {
                    this.confirm(this.value);
                }
            },
            _onCancel(e) {
                this.show = false;
                this.$emit('on-cancel', e);

                if (this.cancel && typeof this.cancel === 'function') {
                    this.cancel();
                }
            },
            _show(options) {
                Object.keys(options).forEach(v => this[v] = options[v]);
                this.show = true;
            }
        }
    }
</script>
<style lang="less">
    @import '../../../styles/components/prompt.less';
</style>