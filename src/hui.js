import './styles/base.less';

import { Alert } from './components/alert';
import { Button, ButtonGroup } from './components/button';
import { CellItem, CellGroup } from './components/cell';
import { CitySelect } from './components/cityselect';
import { Confirm } from './components/confirm';
import { CountDown } from './components/countdown';
import { Datepicker } from './components/datepicker';
import { FlexBox, FlexBoxItem } from './components/flexbox';
import { Input } from './components/input';
import { Overlay } from './components/overlay';
import { Popup } from './components/popup';
import { Scroller } from './components/scroller';
import { SendCode } from './components/sendcode';
import { Slider, SliderItem } from './components/slider';
import { Spinner } from './components/spinner';
import { Switch } from './components/switch';
import { TextArea } from './components/textarea';
import { Toast } from './components/toast';

window.document.addEventListener('touchstart', function(event) {
    /* Do Nothing */
}, false);

const install = function(Vue) {
    Vue.component(Button.name, Button);
    Vue.component(ButtonGroup.name, ButtonGroup);
    Vue.component(CellGroup.name, CellGroup);
    Vue.component(CellItem.name, CellItem);
    Vue.component(CitySelect.name, CitySelect);
    Vue.component(CountDown.name, CountDown);
    Vue.component(Datepicker.name, Datepicker);
    Vue.component(FlexBox.name, FlexBox);
    Vue.component(FlexBoxItem.name, FlexBoxItem);
    Vue.component(Input.name, Input);
    Vue.component(Overlay.name, Overlay);
    Vue.component(Popup.name, Popup);
    Vue.component(Scroller.name, Scroller);
    Vue.component(SendCode.name, SendCode);
    Vue.component(Slider.name, Slider);
    Vue.component(SliderItem.name, SliderItem);
    Vue.component(Spinner.name, Spinner);
    Vue.component(Switch.name, Switch);
    Vue.component(TextArea.name, TextArea);
};

if (typeof window !== 'undefined' && window.Vue) {
    install(window.Vue);
}

export default {
    install
};
