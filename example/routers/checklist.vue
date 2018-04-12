<template>
    <hui-layout title="CheckList">

        <div style="padding-left:12px;margin-bottom: 10px;" class="demo-small-pitch">
            <hui-checkbox v-model="isCheckAll" shape="circle" :change="checkAll">全选 {{isCheckAll}} - <span style="font-size: 12px;">结合hui-checkbox组件实现全选</span></hui-checkbox>
        </div>
        <hui-checklist v-model="checklist1" ref="checklistDemo" :callback="change">
            <hui-checklist-item val="1">
                <div style="height: 50px;line-height: 50px;">1 -- 值：{{checklist1}}</div>
            </hui-checklist-item>
            <hui-checklist-item val="2">
                <div style="height: 50px;line-height: 50px;">2</div>
            </hui-checklist-item>
            <hui-checklist-item val="3">
                <div style="height: 50px;line-height: 50px;">3</div>
            </hui-checklist-item>
        </hui-checklist>

        <hui-checklist v-model="checklist2" class="demo-small-pitch" :label="false">
            <hui-checklist-item val="aaa">
                <hui-flexbox style="padding: 15px 0;">
                    <img src="//img12.360buyimg.com/n1/jfs/t2122/170/1006550413/171711/de099a6f/56399d01N67907749.jpg" class="demo-checklist-img">
                    <hui-flexbox-item align="top">
                        [aaa] 类似购物车 / 类似购物车<br/>
                        <span style="color: blue;">点击这边的内容是禁止选中的</span><br/>
                        <p style="color:#F00;">选中值：{{checklist2}}</p>
                    </hui-flexbox-item>
                </hui-flexbox>
            </hui-checklist-item>
            <hui-checklist-item val="bbb">
                <hui-flexbox style="padding: 15px 0;">
                    <img src="//img10.360buyimg.com/n1/jfs/t6925/75/2382158459/437865/f3931d24/598be5b1N24d949fe.jpg" class="demo-checklist-img">
                    <hui-flexbox-item align="top">
                        [bbb] 南非进口红西柚 6个 单果重约300-330g 新鲜水果
                    </hui-flexbox-item>
                </hui-flexbox>
            </hui-checklist-item>
            <hui-checklist-item val="ccc">
                <hui-flexbox style="padding: 15px 0;">
                    <img src="//img14.360buyimg.com/n1/jfs/t3232/69/539717695/176729/cf1ff3d8/57baa5d1N901ffea5.jpg" class="demo-checklist-img">
                    <hui-flexbox-item align="top">
                        [ccc] 展卉 越南进口红心火龙果 3个装中果 单果约300~350g 新鲜水果
                    </hui-flexbox-item>
                </hui-flexbox>
            </hui-checklist-item>
        </hui-checklist>

    </hui-layout>
</template>

<script type="text/babel">
    export default {
        data() {
            return {
                checklist1: [1],
                checklist2: [],
                isCheckAll: false
            }
        },
        methods: {
            change(value, isCheckAll) {
                this.isCheckAll = isCheckAll;
            },
            checkAll() {
                this.isCheckAll = !this.isCheckAll;
                this.$refs.checklistDemo.$emit('hui.checklist.checkall', this.isCheckAll);
            }
        }
    }
</script>
