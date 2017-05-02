const merge = require('webpack-merge');
const distCommonWebpackConfig = require('./webpack.dist.common.conf');
const StringReplacePlugin = require("string-replace-webpack-plugin");
module.exports = merge(distCommonWebpackConfig, {
    entry: {
        "/lib.px/alert/index": "./src/components/alert/index.js", //提示弹窗
        "/lib.px/button/index": "./src/components/button/index.js", //按钮
        "/lib.px/cell/index": "./src/components/cell/index.js", //表单
        "/lib.px/cityselect/index": "./src/components/cityselect/index.js", //省市县级联
        "/lib.px/confirm/index": "./src/components/confirm/index.js", //确认弹窗
        "/lib.px/countdown/index": "./src/components/countdown/index.js", //时间倒计时
        "/lib.px/datepicker/index": "./src/components/datepicker/index.js", //时间选择器
        "/lib.px/flexbox/index": "./src/components/flexbox/index.js", //布局
        "/lib.px/input/index": "./src/components/input/index.js", //输入框
        "/lib.px/overlay/index": "./src/components/overlay/index.js", //遮罩层
        "/lib.px/popup/index": "./src/components/popup/index.js", //弹层
        "/lib.px/prompt/index": "./src/components/prompt/index.js", //对话框
        "/lib.px/scroller/index": "./src/components/scroller/index.js", //上拉加载与下拉刷新
        "/lib.px/sendcode/index": "./src/components/sendcode/index.js", //发送验证码
        "/lib.px/slider/index": "./src/components/slider/index.js", //图片轮播
        "/lib.px/spinner/index": "./src/components/spinner/index.js", //spinner
        "/lib.px/swiper/index": "./src/components/swiper/index.js", //图片轮播
        "/lib.px/switch/index": "./src/components/switch/index.js", //开关
        "/lib.px/textarea/index": "./src/components/textarea/index.js", //多行文本框
        "/lib.px/toast/index": "./src/components/toast/index.js", //提示窗
    },
    module: {
        loaders: [{
            test: /\.vue$/,
            loader: StringReplacePlugin.replace({
                replacements: [{
                    pattern: /(\d*\.?\d+)rem/g,
                    replacement: function(match, p1) {
                        return parseInt(p1 * 50) + 'px';
                    }
                }]
            })
        }]
    },
    vue: {
        postcss: [require('./rem2px')(50)]
    },
    plugins: [
        new StringReplacePlugin()
    ]
});