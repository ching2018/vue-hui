<template>
    <div class="hui-cell-box">
        <div class="hui-cell">
            <div class="hui-cell-title" v-if="title">{{title}}</div>
            <slot></slot>
        </div>
        <slot name="bottom"></slot>
    </div>
</template>

<script type="text/babel">
    export default{
        name: 'hui-cell-group',
        props: {
            title: String
        }
    }
</script>
