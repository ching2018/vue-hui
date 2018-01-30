<template>
    <hui-layout>
        <hui-navbar slot="navbar" title="Switch">
            <router-link to="/cr" slot="left">
                <hui-navbar-back-icon></hui-navbar-back-icon>
            </router-link>
        </hui-navbar>

        <div class="demo-cr demo-small-pitch">
            <hui-switch v-model="switch1"></hui-switch>
            <span>值为：{{switch1}}</span>
        </div>

        <div class="demo-cr demo-small-pitch">
            <hui-switch v-model="switch2" disabled></hui-switch>
            <span>禁用：{{switch2}}</span>
        </div>

        <div class="demo-cr demo-small-pitch">
            <hui-switch v-model="switch3" color="#F00"></hui-switch>
            <span>自定义颜色：{{switch3}}</span>
        </div>

        <div class="demo-cr demo-small-pitch">
            <hui-switch v-model="switch4" true-value="aaaaa" false-value="bbbbb"></hui-switch>
            <span>true-value & false-value：{{switch4}}</span>
        </div>

        <hui-cell-group title="结合Cell组件" class="demo-small-pitch">
            <hui-cell-item type="label">
                <span slot="left">值为：{{switch5}}</span>
                <hui-switch slot="right" v-model="switch5"></hui-switch>
            </hui-cell-item>
            <p slot="bottom" style="text-align:right;padding: .05rem .24rem;color:#555;">设置属性type为label即可点击整行控制switch组件</p>
        </hui-cell-group>
    </hui-layout>

</template>

<script type="text/babel">
    export default {
        data() {
            return {
                switch1: false,
                switch2: true,
                switch3: true,
                switch4: 'aaaaa',
                switch5: true,
            }
        }
    }
</script>
