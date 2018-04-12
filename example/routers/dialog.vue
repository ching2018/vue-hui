<template>
    <hui-layout title="Dialog">

        <hui-button-group>

            <hui-button @click.native="openConfrim" size="large">Confirm</hui-button>

            <hui-button @click.native="openCustomConfrim" size="large">Confirm->Custom</hui-button>

            <hui-button @click.native="openAlert" size="large" type="hollow">Alert</hui-button>

            <hui-button @click.native="toastSuccess" size="large" type="danger">Toast->Success</hui-button>

            <hui-button @click.native="toastError" size="large" type="danger">Toast->Error</hui-button>

            <hui-button @click.native="toastNone" size="large" type="danger">Toast->None</hui-button>

            <hui-button @click.native="openLoading" size="large" type="hollow">Loading</hui-button>

            <hui-button @click.native="openNotify" size="large" type="hollow">Notify</hui-button>

        </hui-button-group>

    </hui-layout>
</template>

<script type="text/babel">
    export default {
        methods: {
            openConfrim() {
                this.$dialog.confirm({
                    title: '选填标题',
                    mes: '我有一个小毛驴我从来也不骑！',
                    opts: () => {
                        this.$dialog.toast({mes: '你点了确定', timeout: 1000});
                    }
                });
            },
            openCustomConfrim() {
                this.$dialog.confirm({
                    title: '选填标题',
                    mes: '我有一个小毛驴我从来也不骑！',
                    opts: [
                        {
                            txt: '取消',
                            color: false,
                            callback: () => {
                                this.$dialog.toast({mes: '你点了取消', timeout: 1000});
                            }
                        },
                        {
                            txt: '犹豫一下',
                            stay: true,
                            color: '#CCC',
                            callback: () => {
                                this.$dialog.toast({mes: '别犹豫了', timeout: 1000});
                            }
                        },
                        {
                            txt: '确定',
                            color: true,
                            callback: () => {
                                this.$dialog.toast({mes: '你点了确定', timeout: 1000});
                            }
                        }
                    ]
                });
            },
            openAlert() {
                this.$dialog.alert({mes: '消息一出，休想滚动屏幕[移动终端]！'});
            },
            toastSuccess() {
                this.$dialog.toast({
                    mes: '鼠标不错哟！',
                    timeout: 1500,
                    icon: 'success'
                });
            },
            toastError() {
                this.$dialog.toast({
                    mes: '别乱点啊！',
                    timeout: 1500,
                    icon: 'error',
                    callback: () => {
                        this.$dialog.alert({mes: '给你一次重来的机会！'});
                    }
                });
            },
            toastNone() {
                this.$dialog.toast({
                    mes: '一个没有任何图标的提示！',
                    timeout: 1500
                });
            },
            openLoading() {
                this.$dialog.loading.open('很快加载好了');

                setTimeout(() => {
                    this.$dialog.loading.close();
                }, 2000);
            },
            openNotify() {
                this.$dialog.notify({
                    mes: '5秒后自动消失，点我也可以消失！',
                    timeout: 5000,
                    callback: () => {
                        console.log('我走咯！');
                    }
                });
            }
        }
    }
</script>
