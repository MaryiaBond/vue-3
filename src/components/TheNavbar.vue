<template lang="">
    <div>
        <nav>
            <ul>
                <li>
                    <router-link to="/about">Zajawki</router-link>
                </li>
                <li>
                    <router-link to="/auth">auth</router-link>
                </li>
                <li>
                    <a @click="logout">logout</a>
                </li>
            </ul>
        </nav>
    </div>
</template>
<script>
import { useRouter } from 'vue-router'
import { useStore } from 'vuex'
export default {
    setup() {
        const router = useRouter()
        const store = useStore()

        return {
            logout: () => {
                store.commit('auth/logout')
                router.push('/auth')
            }
        }
    }
}
</script>
<style lang="">
    
</style>