<template>
    <hui-layout title="FlexBox">
        <div style="padding: 0 .12rem;">
            <h2 class="demo-flexbox-title">Horizontal</h2>
            <hui-flexbox class="demo-flexbox">
                <hui-flexbox-item>
                    <div class="demo-flexbox-text">&lt;hui-flexbox-item&gt;</div>
                </hui-flexbox-item>
                <hui-flexbox-item>
                    <div class="demo-flexbox-text">&lt;hui-flexbox-item&gt;</div>
                </hui-flexbox-item>
            </hui-flexbox>
            <hui-flexbox class="demo-flexbox">
                <hui-flexbox-item>
                    <div class="demo-flexbox-text">&lt;hui-flexbox-item&gt;</div>
                </hui-flexbox-item>
                <hui-flexbox-item>
                    <div class="demo-flexbox-text">&lt;hui-flexbox-item&gt;</div>
                </hui-flexbox-item>
                <hui-flexbox-item>
                    <div class="demo-flexbox-text">&lt;hui-flexbox-item&gt;</div>
                </hui-flexbox-item>
            </hui-flexbox>
            <hui-flexbox class="demo-flexbox">
                <div class="demo-flexbox-text" style="background-color:#BBB;">&lt;div&gt;</div>
                <hui-flexbox-item>
                    <div class="demo-flexbox-text">&lt;hui-flexbox-item&gt;</div>
                </hui-flexbox-item>
            </hui-flexbox>
            <hui-flexbox class="demo-flexbox">
                <div class="demo-flexbox-text" style="background-color:#BBB;">&lt;div&gt;</div>
                <hui-flexbox-item>
                    <div class="demo-flexbox-text">&lt;hui-flexbox-item&gt;</div>
                </hui-flexbox-item>
                <div class="demo-flexbox-text" style="background-color:#BBB;">&lt;div&gt;</div>
            </hui-flexbox>

            <h2 class="demo-flexbox-title">Vertical</h2>
            <hui-flexbox direction="vertical" class="demo-flexbox">
                <hui-flexbox-item style="margin-bottom: 8px;">
                    <div class="demo-flexbox-text">&lt;hui-flexbox-item&gt;</div>
                </hui-flexbox-item>
                <hui-flexbox-item style="margin-bottom: 8px;">
                    <div class="demo-flexbox-text">&lt;hui-flexbox-item&gt;</div>
                </hui-flexbox-item>
                <hui-flexbox-item>
                    <div class="demo-flexbox-text">&lt;hui-flexbox-item&gt;</div>
                </hui-flexbox-item>
            </hui-flexbox>

            <div style="height: 300px;">
                <hui-flexbox direction="vertical" class="demo-flexbox">
                    <div class="demo-flexbox-text" style="width: 100%;background-color:#BBB;margin-bottom: 8px;">&lt;div&gt;</div>
                    <hui-flexbox-item style="margin-bottom: 8px;background-color:#DCDCDC;">
                        <div class="demo-flexbox-text">&lt;hui-flexbox-item&gt;</div>
                    </hui-flexbox-item>
                    <div class="demo-flexbox-text" style="width: 100%;background-color:#BBB;">&lt;div&gt;</div>
                </hui-flexbox>
            </div>
        </div>
    </hui-layout>
</template>
