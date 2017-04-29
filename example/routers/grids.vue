<template>
    <hui-layout title="Grids">

        <hui-grids-group :rows="2" title="等分2列(带图标)">
            <hui-grids-item>
                <img slot="icon" src="http://static.ydcss.com/hui/img/logo.png">
                <span slot="text">image</span>
            </hui-grids-item>
            <hui-grids-item>
                <i slot="icon" class="demo-icons-cell"></i>
                <span slot="text">iconfont</span>
            </hui-grids-item>
        </hui-grids-group>

        <hui-grids-group :rows="3" title="等分3列">
            <hui-grids-item v-for="n in 6">
                <span slot="text">grids-3</span>
            </hui-grids-item>
        </hui-grids-group>

        <hui-grids-group rows="4" title="等分4列">
            <hui-grids-item v-for="n in 8">
                <span slot="text">grids-4</span>
            </hui-grids-item>
        </hui-grids-group>

        <hui-grids-group :rows="5" title="等分5列">
            <hui-grids-item v-for="n in 5">
                <span slot="text">grids-5</span>
            </hui-grids-item>
        </hui-grids-group>

    </hui-layout>
</template>
