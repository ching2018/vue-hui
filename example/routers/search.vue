<template>
    <hui-layout title="Search">
        <p class="demo-search-title">行内模式：</p>
        <hui-search v-model="value1" :on-submit="submitHandler" :on-cancel="cancelHandler"></hui-search>

        <p class="demo-search-title">全屏模式（带匹配结果）：</p>
        <hui-search :result="result" fullpage v-model="value2" :itemClick="clickHandler" :on-submit="submitHandler" :on-cancel="cancelHandler"></hui-search>
    </hui-layout>
</template>

<script type="text/babel">
    export default {
        data() {
            return {
                value1: '',
                value2: '',
                result: []
            }
        },
        methods: {
            getResult(val) {
                if (!val) return [];
                return [
                    'Apple', 'Banana', 'Orange', 'Durian', 'Lemon', 'Peach', 'Cherry', 'Berry',
                    'Core', 'Fig', 'Haw', 'Melon', 'Plum', 'Pear', 'Peanut', 'Other'
                ].filter(value => new RegExp(val, 'i').test(value));
            },
            clickHandler(item) {
                this.$dialog.toast({mes: `搜索：${item}`});
            },
            submitHandler(value) {
                this.$dialog.toast({mes: `搜索：${value}`});
            },
            cancelHandler() {
                this.$dialog.toast({mes: '取消搜索回调'});
            }
        },
        watch: {
            value2(val) {
                this.result = this.getResult(val);
            }
        }
    }
</script>
