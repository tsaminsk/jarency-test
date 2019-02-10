<template lang="pug">
    .cart
        .cart__title
            h3(v-html="title")
        .cart__text(v-if="params.type === 'balans'")
            span {{ text }}
            span {{ value }} {{ valueProp }}
        .cart__text(v-else)
            span {{ text }}
            nuxt-link(:to="additionLink") {{ value }} {{ valueProp }}
        .cart__link
            AddScore(:params="linkParams")
</template>

<script>
    export default {
        props: {
            params: Object
        },

        data() {
            return {
                title: '',
                text: '',
                value: 0,
                valueProp: null,
                linkParams: {
                    link: '',
                    text: ''
                },
                additionLink: '',
                types: this.$store.getters.setCartTypes
            }
        },

        mounted() {
            this.setClientParams();
        },

        methods: {
            setClientParams() {
                this.types.forEach((item, i, arr) => {
                    if ( item.type === this.params.type ) {
                        this.title = item.title;
                        this.text = item.text;
                        this.value = this.params.value.toLocaleString();
                        this.valueProp = item.valueProp;
                        this.linkParams.link = item.link;
                        this.linkParams.text = item.linkText ? item.linkText : undefined;
                        this.additionLink = '/' + item.type;
                    }
                });
            }
        }
    }
</script>

<style lang="scss">
@import './../assets/scss/variables.scss';
@import './../assets/scss/mixins.scss';

    .cart {
        display: inline-block;
        vertical-align: top;
        width: 100%;
        max-width: 1120px;
        height: 200px;
        padding: 30px 31px;
        border-radius: 8px;
        background: #fff;
        box-shadow: 0px 0px 3px rgba(0, 0, 0, 0.16);
        margin: 0 0 32px;
        animation: fade-in 1s 1;

        &__title {
            margin: 0 0 14px;
        }

        &__text {
            letter-spacing: -0.2px;
            color: $grey1;
            margin: 0 0 16px;

            a {
                text-decoration: underline;
            }
        }

        &.is-small {
            width: calc(50% - 25px);

            @include mq(1059) {
                width: calc(50% - 16px);
            }

            @include mq(767) {
                width: 100%;
            }

            &:first-child {
                margin: 0 50px 32px 0;

                @include mq(1059) {
                    margin: 0 32px 32px 0;
                }

                @include mq(767) {
                    margin: 0 0 32px;
                }
            }
        }
    }
</style>
