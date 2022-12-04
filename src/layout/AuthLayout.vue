<template lang="">
    <!-- <AuthApp /> -->
    <router-view />

    <the-navbar />
</template>
<script>

import TheNavbar from './../components/TheNavbar.vue'
// import AuthApp from './../views/AboutApp.vue';
export default {
    components: {
        TheNavbar
    },
    setup() {
        return {}
    }
}
</script>
<style lang="">
    
</style>