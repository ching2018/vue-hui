<template>
    <hui-layout title="Preview">

        <hui-preview class="demo-small-pitch" :buttons="btns">
            <hui-preview-header>
                <div slot="left">付款金额</div>
                <div slot="right">¥2400.00</div>
            </hui-preview-header>

            <hui-preview-item>
                <div slot="left">商品</div>
                <div slot="right">啦啦啦啦啦啦啦</div>
            </hui-preview-item>
            <hui-preview-item>
                <div slot="left">商品</div>
                <div slot="right">啦啦啦啦啦啦啦</div>
            </hui-preview-item>
            <hui-preview-item>
                <div slot="left">商品商品</div>
                <div slot="right">啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦</div>
            </hui-preview-item>
        </hui-preview>

    </hui-layout>
</template>

<script type="text/babel">
    export default {
        data() {
            return {
                btns: [
                    {
                        text: '辅助操作',
                        click: () => {
                            alert('辅助操作');
                        }
                    },
                    {
                        color: '#F00',
                        text: '跳转首页',
                        link: {path: '/'}
                    }
                ]
            }
        }
    }
</script>
