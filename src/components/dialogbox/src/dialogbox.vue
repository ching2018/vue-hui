<script>
import Overlay from '../../overlay/src/overlay.vue';

export default {
    name: 'hui-dialogbox',
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

                    data = Object.assign({}, data, {
                        staticClass
                    });

                    children[name] = h(vNode.tag, data, vNode.children);
                }
            });
        }

        return h(
            'div', {
                'class': 'vmc-dialog-wrapper',
                directives: [{
                    name: 'show',
                    value: this.show
                }]
            }, [h(
                Overlay,
                null, []
            ), h(
                'div', {
                    'class': 'vmc-dialog'
                }, [children.header, children.content, children.footer]
            )]
        );
    }
}
</script>
<style lang="less">
@import '../../../styles/components/dialogbox.less';
</style>
