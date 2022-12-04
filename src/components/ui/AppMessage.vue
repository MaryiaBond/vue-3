<template lang="">
    <div v-if="message">
        <h3>Warning!!! <small>x</small></h3>
        <p>
           {{message}}
        </p>
    </div>
</template>
<script>
import { computed } from '@vue/runtime-core'
import { useStore } from 'vuex'
export default {
    setup() {
        const store = useStore()
        const message = computed(() => store.state.message)

        return {message}
    }
}
</script>
<style lang="">
    
</style>