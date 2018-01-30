<template>
    <hui-layout title="CitySelect">

        <hui-cell-group title="默认调用" class="demo-small-pitch">
            <hui-cell-item arrow>
                <span slot="left">所在地区：</span>
                <input slot="right" type="text" @click.stop="show1 = true" v-model="model1" readonly placeholder="请选择收货地址">
            </hui-cell-item>
        </hui-cell-group>

        <hui-cell-group title="设置默认值">
            <hui-cell-item arrow>
                <span slot="left">所在地区：</span>
                <input slot="right" type="text" @click.stop="show2 = true" v-model="model2" readonly placeholder="请选择收货地址">
            </hui-cell-item>
        </hui-cell-group>

        <hui-cityselect v-model="show1" :callback="result1" :items="district"></hui-cityselect>

        <hui-cityselect v-model="show2" :callback="result2" :items="district" provance="新疆" city="乌鲁木齐市" area="天山区"></hui-cityselect>

    </hui-layout>
</template>

<script type="text/babel">
    import District from 'hui-district/dist/jd_province_city_area_id';

    export default {
        data() {
            return {
                show1: false,
                show2: false,
                model1: '',
                model2: '新疆 乌鲁木齐市 天山区',
                district: District
            }
        },
        methods: {
            result1(ret) {
                console.log(ret);
                this.model1 = ret.itemName1 + ' ' + ret.itemName2 + ' ' + ret.itemName3;
            },
            result2(ret) {
                console.log(ret);
                this.model2 = ret.itemName1 + ' ' + ret.itemName2 + ' ' + ret.itemName3;
            }
        }
    }
</script>
