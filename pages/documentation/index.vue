<template lang="pug">
    .documentation.container
        .documentation__title
            h1 documentation page
            p Сделано по
                a(href="https://www.figma.com/file/Fy26PKlS9oRPWv0TTmBvNx/Mandarin-%D0%92%D0%B5%D1%80%D1%81%D1%82%D0%BA%D0%B0?node-id=22%3A87" target="_blank")
                    |&nbsp;этому макету
</template>

<script>
export default {};
</script>

<style lang="scss">
    .documentation {
        margin: 0;
        animation: fade-in 1s 1;

        a {
            color: green;
        }
    }
</style>
