<template>
    <hui-layout>
        <hui-navbar slot="navbar" title="Radio">
            <router-link to="/cr" slot="left">
                <hui-navbar-back-icon></hui-navbar-back-icon>
            </router-link>
        </hui-navbar>

        <hui-cell-group class="demo-small-pitch">
            <div class="hui-cell-title">值和标签一致 - 【值：{{radio1}}】</div>
            <hui-cell-item>
                <hui-radio-group v-model="radio1" slot="left">
                    <hui-radio val="啦啦啦"></hui-radio>
                    <hui-radio val="啊啊啊"></hui-radio>
                    <hui-radio val="喔喔喔"></hui-radio>
                </hui-radio-group>
            </hui-cell-item>
        </hui-cell-group>

        <hui-cell-group>
            <div class="hui-cell-title">值和标签不同 - 【值：{{radio2}}】</div>
            <hui-cell-item>
                <hui-radio-group v-model="radio2" slot="left">
                    <hui-radio val="1">啦啦啦</hui-radio>
                    <hui-radio val="2">啊啊啊</hui-radio>
                    <hui-radio val="3">喔喔喔</hui-radio>
                </hui-radio-group>
            </hui-cell-item>
        </hui-cell-group>

        <hui-cell-group title="禁用">
            <hui-cell-item>
                <hui-radio-group v-model="radio3" slot="left">
                    <hui-radio val="啦啦啦"></hui-radio>
                    <hui-radio val="啊啊啊"></hui-radio>
                    <hui-radio val="喔喔喔" disabled></hui-radio>
                </hui-radio-group>
            </hui-cell-item>
        </hui-cell-group>

        <hui-cell-group title="自定义图标颜色">
            <hui-cell-item>
                <hui-radio-group v-model="radio4" color="#F00" slot="left">
                    <hui-radio val="啦啦啦"></hui-radio>
                    <hui-radio val="啊啊啊"></hui-radio>
                    <hui-radio val="喔喔喔"></hui-radio>
                </hui-radio-group>
            </hui-cell-item>
        </hui-cell-group>

        <hui-cell-group title="自定义图标大小">
            <hui-cell-item>
                <hui-radio-group v-model="radio5" size="30" slot="left">
                    <hui-radio val="1"><span style="font-size: 24px;">男</span></hui-radio>
                    <hui-radio val="2"><span style="font-size: 24px;">女</span></hui-radio>
                    <hui-radio val="3"><span style="font-size: 24px;">未知</span></hui-radio>
                </hui-radio-group>
            </hui-cell-item>
        </hui-cell-group>
    </hui-layout>
</template>

<script type="text/babel">
    export default {
        data() {
            return {
                radio1: '啦啦啦',
                radio2: 2,
                radio3: '喔喔喔',
                radio4: '啊啊啊',
                radio5: 2
            }
        }
    }
</script>
