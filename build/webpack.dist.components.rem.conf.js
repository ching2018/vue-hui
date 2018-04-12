const merge = require('webpack-merge');
const distCommonWebpackConfig = require('./webpack.dist.common.conf');
module.exports = merge(distCommonWebpackConfig, {
    entry: {
        "/lib.rem/actionsheet/index": "./src/components/actionsheet/index.js", //上拉菜单
        "/lib.rem/alert/index": "./src/components/alert/index.js", //提示弹窗
        "/lib.rem/backtop/index": "./src/components/backtop/index.js", //回到顶部
        "/lib.rem/button/index": "./src/components/button/index.js", //按钮
        "/lib.rem/card/index": "./src/components/card/index.js", //卡片
        "/lib.rem/cell/index": "./src/components/cell/index.js", //表单
        "/lib.rem/checkbox/index": "./src/components/checkbox/index.js", //多选
        "/lib.rem/checklist/index": "./src/components/checklist/index.js", //多选列表
        "/lib.rem/cityselect/index": "./src/components/cityselect/index.js", //省市县级联
        "/lib.rem/confirm/index": "./src/components/confirm/index.js", //确认弹窗
        "/lib.rem/countdown/index": "./src/components/countdown/index.js", //时间倒计时
        "/lib.rem/datepicker/index": "./src/components/datepicker/index.js", //时间选择器
        "/lib.rem/datetime/index": "./src/components/datetime/index.js", //时间选择器
        "/lib.rem/editor/index": "./src/components/editor/index.js", //html5编辑器
        "/lib.rem/flexbox/index": "./src/components/flexbox/index.js", //布局
        "/lib.rem/grids/index": "./src/components/grids/index.js", //网格
        "/lib.rem/infinitescroll/index": "./src/components/infinitescroll/index.js", //滚动加载
        "/lib.rem/input/index": "./src/components/input/index.js", //输入框
        "/lib.rem/keyboard/index": "./src/components/keyboard/index.js", //安全键盘
        "/lib.rem/lightbox/index": "./src/components/lightbox/index.js", //图片预览
        "/lib.rem/list/index": "./src/components/list/index.js", //列表
        "/lib.rem/number/index": "./src/components/number/index.js", //数字加减
        "/lib.rem/overlay/index": "./src/components/overlay/index.js", //遮罩层
        "/lib.rem/popup/index": "./src/components/popup/index.js", //弹层
        "/lib.rem/preview/index": "./src/components/preview/index.js", //表单预览
        "/lib.rem/prompt/index": "./src/components/prompt/index.js", //对话框
        "/lib.px/pullrefresh/index": "./src/components/pullrefresh/index.js", //下拉刷新
        "/lib.rem/radio/index": "./src/components/radio/index.js", //单选框
        "/lib.rem/rate/index": "./src/components/rate/index.js", //评分
        "/lib.rem/rollnotice/index": "./src/components/rollnotice/index.js", //滚动公告
        "/lib.rem/scroller/index": "./src/components/scroller/index.js", //上拉加载与下拉刷新
        "/lib.rem/scrolltab/index": "./src/components/scrolltab/index.js", //滚动选项卡
        "/lib.rem/sendcode/index": "./src/components/sendcode/index.js", //发送验证码
        "/lib.rem/slider/index": "./src/components/slider/index.js", //图片轮播
        "/lib.rem/spinner/index": "./src/components/spinner/index.js", //spinner
        "/lib.rem/swiper/index": "./src/components/swiper/index.js", //图片轮播
        "/lib.rem/switch/index": "./src/components/switch/index.js", //开关
        "/lib.rem/tab/index": "./src/components/tab/index.js", //选项卡
        "/lib.rem/textarea/index": "./src/components/textarea/index.js", //多行文本框
        "/lib.rem/toast/index": "./src/components/toast/index.js", //提示窗
        "/lib.rem/upload/index": "./src/components/upload/index.js", //上传
    }
});
