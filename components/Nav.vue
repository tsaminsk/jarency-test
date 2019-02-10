<template lang="pug">
    .nav
        ul.nav__menu
            template( v-for="(item, i) in menu")
                li.nav__menu-item(
                    :class="{ 'is-active' : chageActiveRoute(item.link),  'is-messages' : item.messages }"
                    :key="i"
                    :data-messages="item.messages")
                    nuxt-link(:to="item.link")
                        | {{ item.name }}
        .nav__burger
            a(href="#" @click.prevent="openPopup")
                img(src="/img/svg/hamb.svg" alt="")
        .nav__logo
            nuxt-link(to="/")
                img(src="/img/svg/logo-gray.svg" alt="")
        .nav__right.is-children_dib
            .nav__icon
                a(href="#")
                    img(src="/img/svg/user-icon.svg" alt="")
            .nav__exit
                a(href="#")
                    img(src="/img/svg/exit.svg" alt="")
</template>

<script>
export default {
    data() {
        return {
            active: 0,
            menu: this.$store.getters.setMenu
        }
    },

    methods: {
        openPopup() {
            this.$emit('openPopup');
        },

        chageActiveRoute(route) {
            return this.$route.path === route
        }
    }
};
</script>

<style lang="scss">
@import './../assets/scss/variables.scss';
@import './../assets/scss/mixins.scss';

.nav {
    height: 81px;
    padding: 0 55px 0 0;
    border-bottom: 1px solid $grey3;
    background-color: $grey2;

    @include mq(1279) {
        padding: 0 35px 0 0;
    }

    @include mq(1059) {
            padding: 0 16px 0 15px;
        }

    &__menu {
        float: left;
        font-size: 0;
        padding: 0 0 0 21px;

        @include mq(1059) {
            display: none;
        }
    }

    &__menu-item {
        display: inline-block;
        vertical-align: top;
        padding: 0 13px;
        font-size: 16px;
        line-height: 79px;
        text-transform: uppercase;
        color: $grey1;

        &.is-active {
            color: $black;
            pointer-events: none;
        }

        span {
            display: none;
        }

        &.is-messages {
            position: relative;
            margin: 0 16px 0 0;

            &::after {
                content: attr(data-messages);
                position: absolute;
                top: 16px;
                right: -8px;
                display: inline-block;
                width: 16px;
                height: 16px;
                padding: 2px 0 0;
                font-size: 10px;
                line-height: 1;
                text-align: center;
                color: #fff;
                border-radius: 50%;
                background-color: #7634A8;
            }
        }
    }

    &__burger,
    &__logo {
        display: none;

        @include mq(1059) {
            display: inline-block;
            line-height: 81px;
        }
    }

    &__burger {
        @include mq(1059) {
            transform: translate3d(0, 3px,0);
        }
    }

    &__logo {
        margin: 0 0 0 calc(50% - 48px);

        @include mq(1059) {
            margin: 0 0 0 calc(50% - 59px);
            transform: translate3d(0, 4px,0);
        }
    }

    &__right {
        float: right;
    }

    &__icon,
    &__exit {
        width: 60px;
        line-height: 81px;

        @include mq(1059) {
            text-align: right;
        }
    }
}
</style>
