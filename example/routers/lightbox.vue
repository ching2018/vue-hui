<template>
    <hui-layout title="LightBox">

        <p style="color: #00c3f5;padding-bottom: 5px;padding-left: 5px;font-size: 15px;" class="demo-small-pitch">双瞳如小窗 佳景观历历</p>

        <hui-lightbox :num="list.length">

            <hui-flexbox style="padding-right: 5px;">
                <hui-flexbox-item v-for="(item, index) in list" v-if="index < 3">
                    <hui-lightbox-img style="width: 100%;padding-left: 5px;" :src="item.src" :original="item.original"></hui-lightbox-img>
                </hui-flexbox-item>
            </hui-flexbox>

            <hui-flexbox style="padding-right: 5px;padding-top: 5px;">
                <hui-flexbox-item v-for="(item, index) in list" v-if="index >= 3">
                    <hui-lightbox-img style="width: 100%;padding-left: 5px;" :src="item.src" :original="item.original"></hui-lightbox-img>
                </hui-flexbox-item>
            </hui-flexbox>

            <hui-lightbox-txt>
                <h1 style="font-size: 15px;margin-bottom: 8px;color: #00c3f5;text-align: right;" slot="top">双瞳如小窗 佳景观历历</h1>
                <div slot="content" style="text-align: right;">
                    <p>相机：灵犀相通，妙不可言。</p>
                    <p>设计：美不胜收，爱不释手。</p>
                    <p>体验：强劲性能，持久动力。</p>
                    <p>mCharge 4.0：上善若水，不止于快。</p>
                    <p>mTouch：指尖轻点，安全随行。</p>
                </div>
            </hui-lightbox-txt>
        </hui-lightbox>
    </hui-layout>
</template>

<script type="text/babel">
    export default {
        data() {
            return {
                list: [
                    {src: 'http://static.ydcss.com/uploads/lightbox/meizu_s1.jpg', original: 'http://static.ydcss.com/uploads/lightbox/meizu_1.jpg'},
                    {src: 'http://static.ydcss.com/uploads/lightbox/meizu_s2.jpg', original: 'http://static.ydcss.com/uploads/lightbox/meizu_2.jpg'},
                    {src: 'http://static.ydcss.com/uploads/lightbox/meizu_s3.jpg', original: 'http://static.ydcss.com/uploads/lightbox/meizu_3.jpg'},
                    {src: 'http://static.ydcss.com/uploads/lightbox/meizu_s4.jpg', original: 'http://static.ydcss.com/uploads/lightbox/meizu_4.jpg'},
                    {src: 'http://static.ydcss.com/uploads/lightbox/meizu_s5.jpg', original: 'http://static.ydcss.com/uploads/lightbox/meizu_5.jpg'},
                    {src: 'http://static.ydcss.com/uploads/lightbox/meizu_s6.jpg', original: 'http://static.ydcss.com/uploads/lightbox/meizu_6.jpg'}
                ]
            }
        }
    }
</script>
