const merge = require('webpack-merge');
const distCommonWebpackConfig = require('./webpack.dist.common.conf');
module.exports = merge(distCommonWebpackConfig, {
    entry: {
        "/lib.rem/alert/index": "./src/components/alert/index.js", //提示弹窗
        "/lib.rem/button/index": "./src/components/button/index.js", //按钮
        "/lib.rem/cell/index": "./src/components/cell/index.js", //表单
        "/lib.rem/cityselect/index": "./src/components/cityselect/index.js", //省市县级联
        "/lib.rem/confirm/index": "./src/components/confirm/index.js", //确认弹窗
        "/lib.rem/countdown/index": "./src/components/countdown/index.js", //时间倒计时
        "/lib.rem/datepicker/index": "./src/components/datepicker/index.js", //时间选择器
        "/lib.rem/flexbox/index": "./src/components/flexbox/index.js", //布局
        "/lib.rem/input/index": "./src/components/input/index.js", //输入框
        "/lib.rem/overlay/index": "./src/components/overlay/index.js", //遮罩层
        "/lib.rem/popup/index": "./src/components/popup/index.js", //弹层
        "/lib.rem/prompt/index": "./src/components/prompt/index.js", //对话框
        "/lib.rem/scroller/index": "./src/components/scroller/index.js", //上拉加载与下拉刷新
        "/lib.rem/sendcode/index": "./src/components/sendcode/index.js", //发送验证码
        "/lib.rem/slider/index": "./src/components/slider/index.js", //图片轮播
        "/lib.rem/spinner/index": "./src/components/spinner/index.js", //spinner
        "/lib.rem/swiper/index": "./src/components/swiper/index.js", //图片轮播
        "/lib.rem/switch/index": "./src/components/switch/index.js", //开关
        "/lib.rem/textarea/index": "./src/components/textarea/index.js", //多行文本框
        "/lib.rem/toast/index": "./src/components/toast/index.js", //提示窗
    }
});
