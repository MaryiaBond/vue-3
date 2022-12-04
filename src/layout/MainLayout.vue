<template lang="">
    <div>
        <the-navbar />
    </div>
    <router-view />
</template>
<script>

import TheNavbar from './../components/TheNavbar.vue'
export default {
    components: {
        TheNavbar
    }
}
</script>
<style lang="">
    
</style>