<template>
    <hui-layout title="CountUp">

        <hui-cell-group class="demo-small-pitch">

            <hui-cell-item>
                <hui-countup
                        slot="left"
                        endnum="1200"
                ></hui-countup>
                <span slot="right">普通调用</span>
            </hui-cell-item>

            <hui-cell-item>
                <hui-countup
                        slot="left"
                        endnum="100"
                        decimals="2"
                ></hui-countup>
                <span slot="right">添加小数</span>
            </hui-cell-item>

            <hui-cell-item>
                <hui-countup
                        slot="left"
                        endnum="100"
                        decimals="2"
                        prefix="$"
                        suffix="&"
                ></hui-countup>
                <span slot="right">添加前后符号</span>
            </hui-cell-item>

            <hui-cell-item>
                <hui-countup
                        slot="left"
                        endnum="9998"
                        decimals="2"
                        separator=","
                ></hui-countup>
                <span slot="right">添加分割符</span>
            </hui-cell-item>

            <hui-cell-item>
                <hui-countup
                        slot="left"
                        endnum="998.658"
                        decimals="3"
                        :useEasing="true"
                ></hui-countup>
                <span slot="right">使用Easy动画效果</span>
            </hui-cell-item>

            <hui-cell-item>
                <hui-countup
                        slot="left"
                        endnum="9998"
                        duration="5"
                        decimals="2"
                ></hui-countup>
                <span slot="right">设置动画时长</span>
            </hui-cell-item>

            <hui-cell-item>
                <hui-countup
                        slot="left"
                        :endnum="initnum"
                        separator=","
                        decimal="."
                ></hui-countup>
                <span slot="right"><hui-button @click.native="initnum = 100" type="warning">改变结束值至100</hui-button></span>
            </hui-cell-item>

            <hui-cell-item>
                <hui-countup
                        slot="left"
                        endnum="100"
                        suffix="%"
                        :start="start"
                ></hui-countup>
                <span slot="right"><hui-button @click.native="start = true">开始</hui-button></span>
            </hui-cell-item>

        </hui-cell-group>
    </hui-layout>
</template>

<script type="text/babel">
    export default {
        data() {
            return {
                initnum: 50,
                start: false
            }
        }
    }
</script>
