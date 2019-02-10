<template lang="pug">
    .sidebar
        .sidebar__container
            .sidebar__logo
                nuxt-link(to="/")
                    img(src="/img/svg/logo.svg" alt="")
            .sidebar__point(:class="{ 'is-open' : selectOpen }" @click="selectOpen = !selectOpen")
                .sidebar__point-icon
                    img(src="/img/svg/map-marker.svg" alt="")
                .sidebar__select
                    .sidebar__select-title {{ selectList[selected] }}
                    .sidebar__select-list
                        ul
                            template(v-for="(item, i) in selectList")
                                li(v-if="selected != i" :key="`select-${i}`" @click="selected = i") {{ item }}
            ul.sidebar__nav
                li.sidebar__nav-item.is-children_dib(v-for="(item, i) in nav" :key="i")
                    .sidebar__nav-icon
                        img(:src="item.src" :alt="item.alt")
                    .sidebar__nav-text
                        a(:href="item.link") {{ item.text }}
            ul.sidebar__menu
                template(v-for="(item, i) in menu")
                    li.sidebar__menu-item(:key="i" @click="moveSidebar(); open = false")
                        nuxt-link(:to="item.link") {{ item.name }}
        .sidebar__move(@click="moveSidebar(); open = !open")
            span(v-if="open")  &#8249;
            span(v-else) &#8250;
        .sidebar__close
            a(href="#" @click="moveSidebar(); open = false")
                img(src="/img/svg/close.svg" alt="")
</template>



<script>
    export default {
        name: 'Sidebar',
        data() {
            return {
                open: true,
                selectList:  this.$store.getters.setSidebarSelectList,
                selected: 0,
                selectOpen: false,
                nav: this.$store.getters.setSideBarNav,
                menu: this.$store.getters.setMenu
            }
        },
        methods: {
            moveSidebar() {
                this.$emit('moveSidebar');
            }
        }
    }
</script>

<style lang="scss">
@import './../assets/scss/variables.scss';
@import './../assets/scss/mixins.scss';

    .sidebar {
        position: fixed;
        top: 0;
        left: -176px;
        width: 256px;
        min-height: 100vh;
        padding: 20px 20px 50px 198px;
        text-align: left;
        background: linear-gradient(to right, $dark-blue, $blue2);
        transition: left 0.5s, padding 0.5s, margin 0.5s;

        @include mq(1059) {
            left: -100vw;
            width: 100vw;
            padding: 0;
            overflow-y: auto;

            .sidebar__container {
                position: absolute;
                top: 0;
                left: calc(50% - 128px);
                padding: 24px 20px 50px;
                width: 256px;
                margin: 0 auto;
            }
        }

        div {
            transition: margin 0.5s;
        }

        &.is-open {
            padding: 20px 29px 0 25px;
            left: 0;

            @include mq(1059) {
                padding: 0;
            }

            .sidebar__point-icon {
                margin: 0 10px 0 0;
            }

            .sidebar__select {
                display: inline-block;
                vertical-align: top;
            }

            .sidebar__logo {
                margin: 0 80px 64px 0;
            }

            .sidebar__nav-icon {
                margin: 0 15px 0 0;

                @include mq(1059) {
                    margin: 10px 15px 0 0;
                }
            }

            .sidebar__nav-text a {
                font-size: 12px;
                line-height: 17px;
                font-weight: 600;
            }
        }

        &__logo {
            text-align: right;
            margin: 0 0 64px;

            img {
                width: 38px;
            }
        }

        &__point {
            height: 30px;
            margin: 0 0 41px;
            border-bottom: 1px solid rgba(255, 255, 255, 0.48);

            &.is-open {
                margin: 0 0 140px;

                .sidebar__select-list {
                    display: block;
                }

                .sidebar__select::after {
                    transform: rotate(-135deg);
                }
            }
        }

        &__point-icon {
            display: inline-block;
            vertical-align: top;
            width: 32px;
            text-align: center;
            margin: 0;
        }

        &__select {
            position: relative;
            display: none;
            width: calc(100% - 50px);
            font-size: 12px;
            line-height: 24px;
            font-weight: 600;
            color: rgba(255, 255, 255, 0.48);

            &::after {
                content: '';
                position: absolute;
                top: 6px;
                right: 0;
                display: block;
                width: 10px;
                height: 10px;
                border-bottom: 2px solid #fff;
                border-right: 2px solid #fff;
                transform: rotate(45deg);
                transition: transform 0.25s;
            }
        }

        &__select-title {
            cursor: pointer;
        }

        &__select-list {
            display: none;
            padding: 30px 0 10px;

            li {
                margin: 0 0 12px;
                cursor: pointer;
            }
        }

        &__nav {
            margin: 0 0 40px;
        }

        &__nav-item {
            margin: 0 0 23px;
        }

        &__nav-icon {
            width: 32px;
            height: 32px;
            background: center center no-repeat;
            margin: 3px 0 -3px 0;
        }

        &__nav-text {
            width: calc(100% - 50px);
            text-decoration: none;
            text-transform: uppercase;
            color: #fff;

            a {
                font-size: 0;
                transition: font-size 0.5s,
            }
        }

        &__menu {
            display: none;
            padding: 40px 0 0;
            border-top: 1px solid rgba(255, 255, 255, 0.24);

            @include mq(1059) {
                display: block;
            }
        }

        &__menu-item {
            font-size: 16px;
            text-transform: uppercase;
            color: #fff;
            margin: 0 0 16px;
        }

        &__move {
            position: absolute;
            z-index: 2;
            top: calc(50% - 20px);
            right: -16px;
            width: 18px;
            height: 40px;
            padding: 0 0 0 3px;
            border-radius: 0px 2px 2px 0px;
            background-color: $blue2;
            cursor: pointer;

            @include mq(1059) {
                display: none;
            }

            span {
                display: block;
                width: 8px;
                height: 8px;
                font-size: 25px;
                font-weight: 100;
                color: #fff;
            }
        }

        &__close {
            display: none;
            position: absolute;
            top: 34px;
            left: 16px;

            @include mq(1059) {
                display: block;
            }
        }
    }
</style>
