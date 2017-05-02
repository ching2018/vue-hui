import './styles/base.less';

import Directive from './utils/directive';

import { Alert } from './components/alert';
import { Button, ButtonGroup } from './components/button';
import { CellItem, CellGroup } from './components/cell';
import { CitySelect } from './components/cityselect';
import { Confirm } from './components/confirm';
import { CountDown } from './components/countdown';
import { Datepicker } from './components/datepicker';
import { Dialogbox } from './components/dialogbox';
import { FlexBox, FlexBoxItem } from './components/flexbox';
import { Input } from './components/input';
import { Popup } from './components/popup';
import { Prompt } from './components/prompt';
import { Scroller } from './components/scroller';
import { SendCode } from './components/sendcode';
import { Slider, SliderItem } from './components/slider';
import { Swiper, SwiperSlide } from './components/swiper';
import { Switch } from './components/switch';
import { TextArea } from './components/textarea';
import { Toast } from './components/toast';

// 全局组件
import installAlert from './components/alert/install';
import installConfirm from './components/confirm/install';
import installPrompt from './components/prompt/install';
import installToast from './components/toast/install';

window.document.addEventListener('touchstart', function(event) {
    /* Do Nothing */
}, false);

const install = function(Vue) {
    var directives = Directive(Vue);
    Object.keys(directives).forEach(name => {
        let _name = name.replace(/[A-Z](?![A-Z])/g, $0 => '-' + $0.toLowerCase());
        Vue.directive(_name, directives[name]);
    });

    Vue.component(Button.name, Button);
    Vue.component(ButtonGroup.name, ButtonGroup);
    Vue.component(CellGroup.name, CellGroup);
    Vue.component(CellItem.name, CellItem);
    Vue.component(CitySelect.name, CitySelect);
    Vue.component(CountDown.name, CountDown);
    Vue.component(Datepicker.name, Datepicker);
    Vue.component(Dialogbox.name, Dialogbox);
    Vue.component(FlexBox.name, FlexBox);
    Vue.component(FlexBoxItem.name, FlexBoxItem);
    Vue.component(Input.name, Input);
    Vue.component(Popup.name, Popup);
    Vue.component(Scroller.name, Scroller);
    Vue.component(SendCode.name, SendCode);
    Vue.component(Slider.name, Slider);
    Vue.component(SliderItem.name, SliderItem);
    Vue.component(Swiper.name, Swiper);
    Vue.component(SwiperSlide.name, SwiperSlide);
    Vue.component(Switch.name, Switch);
    Vue.component(TextArea.name, TextArea);

    // global components
    var configs = {
        name: 'HUI',
        children: [],
        components: {}
    };

    var plugins = [];

    plugins.push(installAlert(configs));
    plugins.push(installConfirm(configs));
    plugins.push(installPrompt(configs));
    plugins.push(installToast(configs));

    var children = configs.children;
    delete configs.children;
    configs.render = h => h('div', {
            attrs: {
                id: 'hui'
            }
        },
        children.map(child => h(child, { ref: child }))
    );

    var vm = new Vue(configs);
    document.body.appendChild(vm.$mount().$el);
    plugins.forEach(fn => fn(Vue, vm));
};

if (typeof window !== 'undefined' && window.Vue) {
    install(window.Vue);
}

export default {
    install
};
