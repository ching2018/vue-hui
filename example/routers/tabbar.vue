<template>
    <hui-layout>
        <hui-navbar slot="navbar" title="TabBar">
            <router-link to="/asidebar" slot="left">
                <hui-navbar-back-icon></hui-navbar-back-icon>
            </router-link>
        </hui-navbar>

        <hui-tabbar class="demo-small-pitch">
            <hui-tabbar-item title="微信" link="/asidebar">
                <i slot="icon" class="demo-icons-weixin"></i>
            </hui-tabbar-item>
            <hui-tabbar-item title="通讯录" link="/asidebar">
                <i slot="icon" class="demo-icons-contact"></i>
            </hui-tabbar-item>
            <hui-tabbar-item title="发现" link="/asidebar">
                <i slot="icon" class="demo-icons-discover"></i>
            </hui-tabbar-item>
        </hui-tabbar>

        <hui-tabbar class="demo-small-pitch">
            <hui-tabbar-item title="微信" link="/asidebar" active>
                <i slot="icon" class="demo-icons-weixin"></i>
                <hui-badge slot="badge" type="danger">2</hui-badge>
            </hui-tabbar-item>
            <hui-tabbar-item title="通讯录" link="/asidebar">
                <i slot="icon" class="demo-icons-contact"></i>
            </hui-tabbar-item>
            <hui-tabbar-item title="发现" link="/asidebar" dot>
                <i slot="icon" class="demo-icons-discover"></i>
            </hui-tabbar-item>
            <hui-tabbar-item title="图片" link="/asidebar">
                <img slot="icon" src="http://static.ydcss.com/hui/img/logo.png"/>
            </hui-tabbar-item>
        </hui-tabbar>

        <hui-tabbar slot="tabbar">
            <hui-tabbar-item title="微信" link="/tabbar" active>
                <i slot="icon" class="demo-icons-weixin"></i>
                <hui-badge slot="badge" type="danger">2</hui-badge>
            </hui-tabbar-item>
            <hui-tabbar-item title="通讯录" link="/asidebar">
                <i slot="icon" class="demo-icons-contact"></i>
            </hui-tabbar-item>
            <hui-tabbar-item title="发现" link="/asidebar" dot>
                <i slot="icon" class="demo-icons-discover"></i>
            </hui-tabbar-item>
            <hui-tabbar-item title="我" link="/asidebar">
                <i slot="icon" class="demo-icons-me"></i>
            </hui-tabbar-item>
            <hui-tabbar-item title="图片" link="/asidebar">
                <img slot="icon" src="http://static.ydcss.com/hui/img/logo.png" />
            </hui-tabbar-item>
        </hui-tabbar>

    </hui-layout>
</template>
