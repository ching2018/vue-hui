<template>
    <div style="display: none;">
        <slot name="top"></slot>
        <div class="hui-lightbox-scroller">
            <slot name="content"></slot>
        </div>
        <slot name="bottom"></slot>
    </div>
</template>

<script type="text/babel">
    export default {
        name: 'hui-lightbox-txt'
    }
</script>
