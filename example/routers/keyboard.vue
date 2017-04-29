<template>
    <hui-layout title="KeyBoard">

        <hui-button-group>
            <hui-button size="large" type="primary" @click.native="show1 = true">打开</hui-button>
            <hui-button size="large" type="primary" @click.native="show2 = true">打开 - 打乱键盘顺序</hui-button>
        </hui-button-group>

        <hui-keyboard v-model="show1" :input-done="done1" ref="kbdemo1"></hui-keyboard>

        <hui-keyboard v-model="show2" :input-done="done2" disorder ref="kbdemo2"></hui-keyboard>
    </hui-layout>
</template>

<script type="text/babel">
    export default {
        data() {
            return {
                show1: false,
                show2: false
            }
        },
        methods: {
            done1(val) {
                console.log('输入的密码是：' + val);
                this.$dialog.loading.open('验证支付密码');

                setTimeout(() => {
                    this.$refs.kbdemo1.$emit('hui.keyboard.error', '对不起，您的支付密码不正确，请重新输入。');
                    this.$dialog.loading.close();
                }, 2000);
            },
            done2(val) {
                console.log('输入的密码是：' + val + ' - 无序');
                this.$dialog.loading.open('验证支付密码');

                setTimeout(() => {
                    this.$refs.kbdemo2.$emit('hui.keyboard.error', '对不起，您的支付密码不正确，请重新输入。');
                    this.$dialog.loading.close();
                }, 2000);
            }
        }
    }
</script>
