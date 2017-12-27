import './styles/base.less';

import Directive from './utils/directive';

import { ActionSheet } from './components/actionsheet';
import { Alert } from './components/alert';
import { BackTop } from './components/backtop';
import { Button, ButtonGroup } from './components/button';
import { Card } from './components/card';
import { CellItem, CellGroup } from './components/cell';
import { CheckBox, CheckBoxGroup } from './components/checkbox';
import { CheckList, CheckListItem } from './components/checklist';
import { CitySelect } from './components/cityselect';
import { Confirm } from './components/confirm';
import { CountDown } from './components/countdown';
import { Datepicker } from './components/datepicker';
import { DateTime } from './components/datetime';
import { Dialogbox } from './components/dialogbox';
import { FlexBox, FlexBoxItem } from './components/flexbox';
import { GridsItem, GridsGroup } from './components/grids';
import { InfiniteScroll } from './components/infinitescroll';
import { Input } from './components/input';
import { KeyBoard } from './components/keyboard';
import { LightBox, LightBoxImg, LightBoxTxt } from './components/lightbox';
import { ListTheme, ListItem, ListOther } from './components/list';
import { Number } from './components/number';
import { Popup } from './components/popup';
import { Prompt } from './components/prompt';
import { PullRefresh } from './components/pullrefresh';
import { Radio, RadioGroup } from './components/radio';
import { Rate } from './components/rate';
import { Scroller } from './components/scroller';
import { ScrollTab, ScrollTabPanel } from './components/scrolltab';
import { SendCode } from './components/sendcode';
import { Slider, SliderItem } from './components/slider';
import { Swiper, SwiperSlide } from './components/swiper';
import { Switch } from './components/switch';
import { TextArea } from './components/textarea';
import { Toast } from './components/toast';
import { Upload } from './components/upload';

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

    Vue.component(ActionSheet.name, ActionSheet);
    Vue.component(BackTop.name, BackTop);
    Vue.component(Button.name, Button);
    Vue.component(ButtonGroup.name, ButtonGroup);
    Vue.component(Card.name, Card);
    Vue.component(CellGroup.name, CellGroup);
    Vue.component(CellItem.name, CellItem);
    Vue.component(CheckBoxGroup.name, CheckBoxGroup);
    Vue.component(CheckBox.name, CheckBox);
    Vue.component(CheckList.name, CheckList);
    Vue.component(CheckListItem.name, CheckListItem);
    Vue.component(CitySelect.name, CitySelect);
    Vue.component(CountDown.name, CountDown);
    Vue.component(Datepicker.name, Datepicker);
    Vue.component(DateTime.name, DateTime);
    Vue.component(Dialogbox.name, Dialogbox);
    Vue.component(FlexBox.name, FlexBox);
    Vue.component(FlexBoxItem.name, FlexBoxItem);
    Vue.component(GridsItem.name, GridsItem);
    Vue.component(GridsGroup.name, GridsGroup);
    Vue.component(InfiniteScroll.name, InfiniteScroll);
    Vue.component(Input.name, Input);
    Vue.component(KeyBoard.name, KeyBoard);
    Vue.component(LightBox.name, LightBox);
    Vue.component(LightBoxImg.name, LightBoxImg);
    Vue.component(LightBoxTxt.name, LightBoxTxt);
    Vue.component(ListTheme.name, ListTheme);
    Vue.component(ListItem.name, ListItem);
    Vue.component(ListOther.name, ListOther);
    Vue.component(Number.name, Number);
    Vue.component(Popup.name, Popup);
    Vue.component(PullRefresh.name, PullRefresh);
    Vue.component(Radio.name, Radio);
    Vue.component(RadioGroup.name, RadioGroup);
    Vue.component(Rate.name, Rate);
    Vue.component(Scroller.name, Scroller);
    Vue.component(ScrollTab.name, ScrollTab);
    Vue.component(ScrollTabPanel.name, ScrollTabPanel);
    Vue.component(SendCode.name, SendCode);
    Vue.component(Slider.name, Slider);
    Vue.component(SliderItem.name, SliderItem);
    Vue.component(Swiper.name, Swiper);
    Vue.component(SwiperSlide.name, SwiperSlide);
    Vue.component(Switch.name, Switch);
    Vue.component(TextArea.name, TextArea);
    Vue.component(Upload.name, Upload);

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
