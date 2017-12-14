<template>
    <img :src="src" :original="original">
</template>

<script type="text/babel">
    export default {
        name: 'hui-lightbox-img',
        props: {
            src: String,
            original: String
        }
    }
</script>
