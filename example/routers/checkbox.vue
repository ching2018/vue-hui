<template>
    <hui-layout>
        <hui-navbar slot="navbar" title="CheckBox">
            <router-link to="/cr" slot="left">
                <hui-navbar-back-icon></hui-navbar-back-icon>
            </router-link>
        </hui-navbar>

        <hui-cell-group class="demo-small-pitch">
            <div class="hui-cell-title">单独使用 - {{checkbox1}}</div>
            <hui-cell-item>
                <hui-checkbox v-model="checkbox1" slot="left">啦啦啦啦</hui-checkbox>
            </hui-cell-item>
        </hui-cell-group>

        <hui-cell-group class="demo-small-pitch">
            <div class="hui-cell-title">true-value & false-value - {{checkbox2}}</div>
            <hui-cell-item>
                <hui-checkbox v-model="checkbox2" slot="left" true-value="aaa" false-value="bbb">啦啦啦啦</hui-checkbox>
            </hui-cell-item>
        </hui-cell-group>

        <hui-cell-group class="demo-small-pitch">
            <div class="hui-cell-title">值和标签一致 -> {{checkbox3}}</div>
            <hui-cell-item>
                <hui-checkbox-group v-model="checkbox3" slot="left">
                    <hui-checkbox val="啦啦啦"></hui-checkbox>
                    <hui-checkbox val="啊啊啊"></hui-checkbox>
                    <hui-checkbox val="喔喔喔"></hui-checkbox>
                </hui-checkbox-group>
            </hui-cell-item>
        </hui-cell-group>

        <hui-cell-group class="demo-small-pitch">
            <div class="hui-cell-title">值和标签不同 -> {{checkbox4}}</div>
            <hui-cell-item>
                <hui-checkbox-group v-model="checkbox4" slot="left">
                    <hui-checkbox val="1">啦啦啦</hui-checkbox>
                    <hui-checkbox val="2">啊啊啊</hui-checkbox>
                    <hui-checkbox val="3">喔喔喔</hui-checkbox>
                </hui-checkbox-group>
            </hui-cell-item>
        </hui-cell-group>



        <hui-cell-group title="禁用">
            <hui-cell-item>
                <hui-checkbox-group v-model="checkbox5" slot="left">
                    <hui-checkbox val="1">啦啦啦</hui-checkbox>
                    <hui-checkbox val="2" disabled>啊啊啊</hui-checkbox>
                    <hui-checkbox val="3" disabled>喔喔喔</hui-checkbox>
                </hui-checkbox-group>
            </hui-cell-item>
        </hui-cell-group>

        <hui-cell-group title="自定义图标颜色">
            <hui-cell-item>
                <hui-checkbox-group v-model="checkbox6" slot="left" color="#F00">
                    <hui-checkbox val="1">啦啦啦</hui-checkbox>
                    <hui-checkbox val="2">啊啊啊</hui-checkbox>
                    <hui-checkbox val="3">喔喔喔</hui-checkbox>
                </hui-checkbox-group>
            </hui-cell-item>
        </hui-cell-group>

        <hui-cell-group title="圆形图标">
            <hui-cell-item>
                <hui-checkbox-group v-model="checkbox7" slot="left">
                    <hui-checkbox val="1" shape="circle">啦啦啦</hui-checkbox>
                    <hui-checkbox val="2" shape="circle">啊啊啊</hui-checkbox>
                    <hui-checkbox val="3" shape="circle">喔喔喔</hui-checkbox>
                </hui-checkbox-group>
            </hui-cell-item>
        </hui-cell-group>

        <hui-cell-group title="自定义图标大小">
            <hui-cell-item>
                <hui-checkbox-group v-model="checkbox8" slot="left" size="30">
                    <hui-checkbox val="1"><span style="font-size: 24px;">男</span></hui-checkbox>
                    <hui-checkbox val="2"><span style="font-size: 24px;">女</span></hui-checkbox>
                    <hui-checkbox val="3"><span style="font-size: 24px;">未知</span></hui-checkbox>
                </hui-checkbox-group>
            </hui-cell-item>
        </hui-cell-group>
    </hui-layout>
</template>

<script type="text/babel">
    export default {
        data() {
            return {
                checkbox1: true,
                checkbox2: 'aaa',
                checkbox3: [],
                checkbox4: ["2"],
                checkbox5: ["1"],
                checkbox6: ["1"],
                checkbox7: ["3"],
                checkbox8: ["3"],
            }
        }
    }
</script>
