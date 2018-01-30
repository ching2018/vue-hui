<template>
    <hui-layout title="Badge">
        <aside class="demo-tip">
            <p>badge包含默认圆形样式和方形样式</p>
            <p>五中颜色：default/primary/danger/warning/hollow</p>
        </aside>

        <div class="demo-badege">
            <div class="demo-badege-title">圆形角标：</div>
            <div class="demo-small-pitch">
                <hui-badge>1</hui-badge>
                <hui-badge type="primary">2</hui-badge>
                <hui-badge type="danger">3</hui-badge>
                <hui-badge type="warning">4</hui-badge>
                <hui-badge type="hollow">5</hui-badge>
            </div>

            <div class="demo-small-pitch">
                <hui-badge>123</hui-badge>
                <hui-badge type="primary">321</hui-badge>
                <hui-badge type="danger">333</hui-badge>
                <hui-badge type="warning">4444</hui-badge>
                <hui-badge type="hollow">55555</hui-badge>
                <hui-badge bgcolor="#000" color="#FFF">custom color</hui-badge>
            </div>

            <div class="demo-badege-title">方形角标：</div>
            <div class="demo-small-pitch">
                <hui-badge shape="square">1</hui-badge>
                <hui-badge shape="square" type="primary">2</hui-badge>
                <hui-badge shape="square" type="danger">3</hui-badge>
                <hui-badge shape="square" type="warning">4</hui-badge>
                <hui-badge shape="square" type="hollow">5</hui-badge>
            </div>

            <div class="demo-small-pitch">
                <hui-badge shape="square">123</hui-badge>
                <hui-badge shape="square" type="primary">321</hui-badge>
                <hui-badge shape="square" type="danger">333</hui-badge>
                <hui-badge shape="square" type="warning">4444</hui-badge>
                <hui-badge shape="square" type="hollow">55555</hui-badge>
                <hui-badge shape="square" bgcolor="#000" color="#FFF">custom color</hui-badge>
            </div>

        </div>

    </hui-layout>
</template>
