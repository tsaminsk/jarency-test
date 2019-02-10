<template lang="pug">
    .app
        .app__container(:class="{ 'is-sidebar_open' : sidebarOpen }")
            Nav(@openPopup="sidebarOpen = !sidebarOpen")
            nuxt
            Footer
        Sidebar(:class="{ 'is-open' : sidebarOpen }" @moveSidebar="sidebarOpen = !sidebarOpen")
</template>

<script>
export default {
    data() {
        return {
            sidebarOpen: false,
        }
    },

    mounted() {
        window.addEventListener('resize', () => this.sidebarOpen = false );
    }
}
</script>

<style lang="scss">
    @import './assets/scss/all.scss';
    @import './assets/scss/variables.scss';
    @import './assets/scss/mixins.scss';

    .app {
        position: relative;
        max-width: 1920px;
        text-align: left;
        overflow: hidden;

        &__container {
            position: relative;
            z-index: 0;
            min-height: 100vh;
            padding: 0 0 124px 6.6%;
            background-color: $grey2;
            transition: margin 0.5s;
            margin: 0 0 0 80px;

            @include mq(1279) {
                padding: 0 0 124px 20px;
            }

            @include mq(1059) {
                padding: 0 0 124px;
                margin: 0;
            }

            @include mq(767) {
                padding: 0 0 304px;
                margin: 0;
            }

            &.is-sidebar_open {
                margin: 0 0 0 256px;

                @include mq(1059) {
                    margin: 0;
                }
            }
        }
    }
</style>
