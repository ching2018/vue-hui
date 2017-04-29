/**
 * User: yxp-qingcheng
 * Date: 16/9/21
 * Time: 下午1:16
 */

import confirmOptions from './src/confirm.vue'

export default {
    install(Vue, options = {}) {

        var confirmConstructor = Vue.extend(confirmOptions),
            confirmInstance = null;

        Vue.prototype.$confirm = function(config) {

            return new Promise(function(resolve, reject) {
                if (confirmInstance) return;

                confirmInstance = new confirmConstructor({
                    el: document.createElement('div'),
                    data() {
                        return {
                            title: config.title || options.title || '',
                            message: config.message || options.message || '',
                            confirmTxt: config.confirmTxt || options.confirmTxt || 'YES',
                            cancelTxt: config.cancelTxt || options.cancelTxt || 'NO',
                            confirmColor: config.confirmColor || options.confirmColor || '',
                            cancelColor: config.cancelColor || options.cancelColor || '',
                            icon: config.icon || options.icon || '',
                            confirmWidth: config.confirmWidth || options.confirmWidth || ''
                        }
                    },
                    methods: {
                        onConfirm() {
                            confirmInstance.$el.remove();
                            confirmInstance = null;
                            resolve();
                        },
                        onCancel() {
                            confirmInstance.$el.remove();
                            confirmInstance = null;
                            reject && reject();
                        }
                    }
                });

                document.body.appendChild(confirmInstance.$el);
                var confirmDiv = confirmInstance.$el.querySelector(".m-confirm");
                var w = confirmInstance.$el.querySelector(".m-confirm").offsetWidth;
                var h = confirmInstance.$el.querySelector(".m-confirm").offsetHeight;
                confirmDiv.style.marginLeft = -(w / 2) + "px";
                confirmDiv.style.marginTop = -(h / 2) + "px";
            });

        }
    }
}
