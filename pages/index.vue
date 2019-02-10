<template lang="pug">
    .home
        .home__container
            .home__title
                .home__user
                    .home__user-name
                        h3(v-text="params.userData.name")
                    .home__user-mail(v-text="params.userData.mail")
            .home__content
                Cart(
                    v-for="(item, i) in params.cartsParams"
                    :key="`cart-${i}`"
                    :class="{ 'is-small' : item.isSmall }"
                    :params="item")
</template>

<script>
export default {
    data() {
        return {
            params: this.$store.getters.setUserParams
        }
    }
}
</script>

<style lang="scss">
    @import './assets/scss/mixins.scss';

    .home {
        &__container {
            width: 100%;
            max-width: 1245px;
            padding: 0 95px 0 30px;

            @include mq(1059) {
                padding: 0 20px;
            }

            @include mq(767) {
                padding: 0 16px;
            }
        }

        &__title {
            padding: 31px 0 29px;
        }

        &__user-mail {
            padding: 0 0 0 31px;

            @include mq(1279) {
                padding: 0;
            }
        }
    }
</style>
