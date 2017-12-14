<template>
    <router-link :to="href" class="hui-list-item" v-if="type == 'link'">
        <div class="hui-list-img">
            <slot name="img"></slot>
        </div>
        <div class="hui-list-mes">
            <div class="hui-list-title">
                <slot name="title"></slot>
            </div>
            <slot name="other"></slot>
        </div>
    </router-link>
    <a :href="href || 'javascript:;'" class="hui-list-item" v-else-if="type == 'a'">
        <div class="hui-list-img">
            <slot name="img"></slot>
        </div>
        <div class="hui-list-mes">
            <div class="hui-list-title">
                <slot name="title"></slot>
            </div>
            <slot name="other"></slot>
        </div>
    </a>
    <div class="hui-list-item" v-else>
        <div class="hui-list-img">
            <slot name="img"></slot>
        </div>
        <div class="hui-list-mes">
            <div class="hui-list-title">
                <slot name="title"></slot>
            </div>
            <slot name="other"></slot>
        </div>
    </div>
</template>

<script type="text/babel">
    export default {
        name: 'hui-list-item',
        props: {
            type: {
                type: String,
                validator (value) {
                    return ['link', 'a', 'div'].indexOf(value) > -1;
                },
                default: 'a'
            },
            href: [String, Object]
        }
    }
</script>
