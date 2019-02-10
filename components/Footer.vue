<template  lang="pug">
    .footer
        .footer__container
            .footer__left.is-children_dib
                .footer__logo
                    nuxt-link(to="/")
                        img(src="/img/svg/logo-gray.svg" alt="")
                .footer__adress(v-html="info.adress")

                .footer__mail
                    a(:href="`mailto:${info.mail}`") {{ info.mail }}
                    br
                    a(:href="`tel:${info.phone.split(' ').join('')}`") {{ info.phone }}
            .footer__right
                .footer__copy
                    |&copy;
                    a(:href="`//${info.www}`" target="_blank" v-html="info.name")
</template>

<script>
    export default {
        data() {
            return {
                info: this.$store.getters.setFooterInfo
            }
        }
    }
</script>

<style lang="scss">
    @import './assets/scss/all.scss';

    .footer {
        position: absolute;
        bottom: 0;
        left: 6.6%;
        width: calc(100% - 30px);
        padding: 10px 20px 62px;

        @include clearfix;

        @include mq(1279) {
            left: 20px;
            padding: 10px 20px 62px 0;
        }

        @include mq(1059) {
            padding: 10px 0 62px;
        }

        @include mq(767) {
            padding: 10px 0 36px;
        }

        &__container {
            width: 100%;
            max-width: 1245px;
            padding: 0 95px 0 30px;

            @include mq(1279) {
                padding: 0 55px 0 30px;
            }

            @include mq(1059) {
                padding: 0;
            }
        }

        &__left {
            float: left;

            @include mq(767) {
                float: none;

                > div {
                    display: block;
                    width: auto;
                    text-align: center;
                }
            }
        }

        &__logo {
            margin: 0 24px 0 4px;

            @include mq(1060, 1279) {
                margin: 0 12px 0 4px;
            }

            @include mq(767) {
                margin: 0 22px 17px 0;
            }
        }

        &__adress {
            width: 180px;
            margin: 0 21px 0 0;

            @include mq(1060, 1279) {
                margin: 0 10px 0 0;
            }

            @include mq(767) {
                padding: 0 calc(50% - 100px);
                margin: 0 0 22px 0;
            }
        }

        &__mail {
            width: 190px;

            @include mq(767) {
                padding: 0 calc(50% - 95px);
                line-height: 22px;
                margin: 0 0 23px;
            }
        }

        &__right {
            float: right;
            padding: 2px 12px 0 0;

            @include mq(767) {
                float: none;
                padding: 0;
                text-align: center;
            }
        }

        &__copy {
            font-size: 12px;
        }
    }
</style>
