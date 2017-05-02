<script type="text/jsx">
    import Overlay from '../../overlay/src/overlay.vue';

    export default {
        name: 'hui-dialogbox',
        components: {
            'hui-overlay': Overlay
        },
        props: {
            show: Boolean
        },
        render(h) {
            var children = {
                header: null,
                content: null,
                footer: null
            };
            var className = {
                header: 'dialog-head',
                content: 'dialog-body vmc-1px-top',
                footer: 'dialog-foot vmc-1px-top'
            };
            var slots = this.$slots.default;
            if (slots && slots.length) {
                slots.forEach(vNode => {
                    var name = vNode.data && vNode.data.attrs && vNode.data.attrs.name;
                    if (name && children[name] !== undefined) {
                        var data = vNode.data;
                        var staticClass = data.staticClass;

                        staticClass = staticClass ? ' ' + staticClass : '';
                        staticClass = className[name] + staticClass;

                        data = Object.assign({}, data, { staticClass });

                        children[name] = h(vNode.tag, data, vNode.children);
                    }
                });
            }

            return (
                    <div class="vmc-dialog-wrapper" v-show={this.show}>
                        <hui-overlay></hui-overlay>
                        <div class="vmc-dialog">
                            {children.header}
                            {children.content}
                            {children.footer}
                        </div>
                    </div>
            );
        }
    }
</script>
<style lang="less">
@import '../../../styles/components/dialogbox.less';
</style>
