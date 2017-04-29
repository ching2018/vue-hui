<template>
    <hui-layout title="Spinner">
        <aside class="demo-tip">
            <p>Spinner 支持长按快速加减，不支持小数加减；</p>
        </aside>

        <div class="demo-spinner">
            <span class="demo-spinner-title">最大值为75，累计值为3（若不设置最小值，则默认为累计值3）</span>
            <hui-spinner max="75" unit="3" v-model="spinner1"></hui-spinner>
            <span class="demo-spinner-tip">[model: spinner1 = <strong>{{spinner1}}</strong>]</span>
        </div>

        <div class="demo-spinner demo-small-pitch">
            <span class="demo-spinner-title">设置最小值为12，累计值为3</span>
            <hui-spinner min="12" unit="3" v-model="spinner2"></hui-spinner>
            <span class="demo-spinner-tip">[model: spinner2 = <strong>{{spinner2}}</strong>]</span>
        </div>

        <div class="demo-spinner demo-small-pitch">
            <span class="demo-spinner-title">不设置最大值/最小值/累计值，则累计值和最小值默认为1</span>
            <hui-spinner v-model="spinner3"></hui-spinner>
            <span class="demo-spinner-tip">[model: spinner3 = <strong>{{spinner3}}</strong>]</span>
        </div>

        <div class="demo-spinner demo-small-pitch">
            <span class="demo-spinner-title">设置默认值为150，累计值为5</span>
            <hui-spinner unit="5" v-model="spinner4"></hui-spinner>
            <span class="demo-spinner-tip">[model: spinner4 = <strong>{{spinner4}}</strong>]</span>
        </div>

        <div class="demo-spinner demo-small-pitch">
            <span class="demo-spinner-title">禁止修改（设置readonly参数为false即可）</span>
            <hui-spinner readonly v-model="spinner5"></hui-spinner>
            <span class="demo-spinner-tip">[model: spinner5 = <strong>{{spinner5}}</strong>]</span>
        </div>

        <div class="demo-spinner demo-small-pitch">
            <span class="demo-spinner-title">禁用长按快速加减（设置参数longpress为false即可）</span>
            <hui-spinner :longpress="false" v-model="spinner6"></hui-spinner>
            <span class="demo-spinner-tip">[model: spinner6 = <strong>{{spinner6}}</strong>]</span>
        </div>

    </hui-layout>
</template>

<script type="text/babel">
    export default {
        data() {
            return {
                spinner1: 0,
                spinner2: 0,
                spinner3: 0,
                spinner4: 150,
                spinner5: 0,
                spinner6: 0
            }
        },
        watch: {
            spinner1(val) {
                console.log('spinner1: ' + val);
            }
        }
    }
</script>
