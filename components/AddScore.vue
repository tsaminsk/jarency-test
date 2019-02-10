<template lang="pug">
    .add-score
        nuxt-link.add-score__wrapp.is-children_dib(:to="params.link")
            .add-score__icon
                img(src="/img/svg/plus-krug.svg" alt="")
            .add-score__link(v-html="params.text || 'Пополнить счёт'")
</template>

<script>
    export default {
        props: {
            params: Object
        }
    }
</script>

<style lang="scss">
    @import './../assets/scss/variables.scss';

    .add-score {
        padding: 10px 0;

        &__icon {
            margin: -4px 11px 4px 0;
        }

        &__link {
            color: $blue1;
        }
    }
</style>

