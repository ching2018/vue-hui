<template>
    <hui-layout title="Rate">
        <hui-cell-group title="普通使用" class="demo-small-pitch">
            <hui-cell-item>
                <hui-rate slot="left" v-model="rate1"></hui-rate>
                <span slot="right">值是: {{rate1}}</span>
            </hui-cell-item>
            <hui-cell-item>
                <hui-rate slot="left" v-model="rate2"></hui-rate>
                <span slot="right">设置默认值</span>
            </hui-cell-item>
            <hui-cell-item>
                <hui-rate slot="left" count="7" v-model="rate3"></hui-rate>
                <span slot="right">设置多个</span>
            </hui-cell-item>
            <hui-cell-item>
                <hui-rate slot="left" v-model="rate4" color="#00FF16" activeColor="#0078D7"></hui-rate>
                <span slot="right">自定义颜色</span>
            </hui-cell-item>
            <hui-cell-item>
                <hui-rate slot="left" v-model="rate5" size="18px"></hui-rate>
                <span slot="right">自定义大小</span>
            </hui-cell-item>
            <hui-cell-item>
                <hui-rate slot="left" v-model="rate6" :readonly="true"></hui-rate>
                <span slot="right">只读</span>
            </hui-cell-item>
        </hui-cell-group>

        <hui-cell-group title="带提示文字">
            <hui-cell-item>
                <hui-rate slot="left" v-model="rate7" :showText="['很差','还行','一般','挺好','非常好']"></hui-rate>
                <span slot="right">提示文字</span>
            </hui-cell-item>
            <hui-cell-item>
                <hui-rate slot="left" v-model="rate8" :showText="tipText"></hui-rate>
                <span slot="right">HTML提示模板</span>
            </hui-cell-item>
        </hui-cell-group>
    </hui-layout>
</template>

<script type="text/babel">
    export default {
        data() {
            return {
                rate1: 0,
                rate2: 3,
                rate3: 2,
                rate4: 1,
                rate5: 4,
                rate6: 3,
                rate7: 2,
                rate8: 1,
                tipText: [
                    '<span style="color:red;">$ 分 - 很差</span>',
                    '<span style="color:blue;">$ 分 - 勉强</span>',
                    '<span style="color:green;">$ 分 - 一般</span>',
                    '<span style="color:black;">$ 分 - 挺好</span>',
                    '<span style="color:chartreuse;">$ 分 - 非常好</span>'
                ]
            }
        }
    }
</script>
