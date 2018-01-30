<template>
    <hui-layout title="Step">

        <hui-step current="2" class="demo-pitch">
            <hui-step-item>
                <span slot="bottom">步骤一</span>
            </hui-step-item>
            <hui-step-item>
                <span slot="bottom">步骤二</span>
            </hui-step-item>
            <hui-step-item>
                <span slot="bottom">步骤三</span>
            </hui-step-item>
            <hui-step-item>
                <span slot="bottom">步骤四</span>
            </hui-step-item>
        </hui-step>

        <hui-step theme="2" current="3" class="demo-pitch">
            <hui-step-item>
                <span slot="top">已发货</span>
                <span slot="bottom">扬州市</span>
            </hui-step-item>
            <hui-step-item>
                <span slot="top">运输中</span>
            </hui-step-item>
            <hui-step-item>
                <span slot="top">派件中</span>
            </hui-step-item>
            <hui-step-item>
                <span slot="top">已签收</span>
                <span slot="bottom">南宁市</span>
            </hui-step-item>
        </hui-step>

    </hui-layout>
</template>
