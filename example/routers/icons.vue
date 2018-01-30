<template>
    <hui-layout title="Icons">

        <hui-grids-group class="demo-small-pitch">
            <hui-grids-item v-for="item in list">
                <hui-icon slot="icon" :name="item" color="#FF685D" size=".6rem"></hui-icon>
                <span slot="text">{{item}}</span>
            </hui-grids-item>
        </hui-grids-group>

    </hui-layout>
</template>

<script type="text/babel">
    export default {
        data() {
            return {
                list: [
                    'home', 'home-outline', 'shopcart', 'shopcart-outline', 'ucenter',
                    'ucenter-outline', 'star', 'star-outline', 'error', 'error-outline', 'warn',
                    'warn-outline', 'shield', 'shield-outline', 'like', 'like-outline', 'weibo', 'weixin',
                    'tencent-weibo', 'qq', 'phone1', 'phone2', 'phone3', 'share1', 'share2',
                    'share3', 'order', 'prev', 'play', 'next', 'good', 'bad', 'feedback', 'compose',
                    'discount', 'verifycode', 'download', 'footmark', 'refresh', 'search', 'time',
                    'setting', 'delete', 'more', 'checkoff', 'video', 'clock', 'type', 'discover',
                    'qrscan', 'location', 'question'
                ]
            }
        }
    }
</script>
