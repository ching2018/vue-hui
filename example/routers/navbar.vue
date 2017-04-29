<template>
    <hui-layout>

        <hui-navbar slot="navbar" title="NavBar">
            <router-link to="/asidebar" slot="left">
                <hui-navbar-back-icon></hui-navbar-back-icon>
            </router-link>
        </hui-navbar>

        <hui-navbar title="NavBar1" class="demo-small-pitch"></hui-navbar>

        <hui-navbar title="NavBar2" class="demo-small-pitch">
            <router-link to="/asidebar" slot="left">
                <hui-navbar-back-icon></hui-navbar-back-icon>
            </router-link>

            <router-link to="/asidebar" slot="right">
                <hui-navbar-next-icon></hui-navbar-next-icon>
            </router-link>
        </hui-navbar>

        <hui-navbar class="demo-small-pitch">
            <router-link to="/asidebar" slot="left">
                <hui-navbar-back-icon>返回</hui-navbar-back-icon>
            </router-link>

            <img slot="center" src="http://static.ydcss.com/www/img/logo.png" alt="">

            <router-link to="/asidebar" slot="right">
                <hui-navbar-next-icon>前进</hui-navbar-next-icon>
            </router-link>
        </hui-navbar>

        <hui-navbar title="什么鬼，这个标题怎么那么长啊" class="demo-small-pitch">
            <router-link to="/asidebar" slot="left">
                <i class="demo-icons-discover"></i>
            </router-link>

            <router-link to="/asidebar" slot="right">
                <i class="demo-icons-me"></i>
            </router-link>
            <router-link to="/asidebar" slot="right">
                <i class="demo-icons-me"></i>
            </router-link>
            <router-link to="/asidebar" slot="right">
                <i class="demo-icons-me"></i>
            </router-link>
        </hui-navbar>

    </hui-layout>
</template>
