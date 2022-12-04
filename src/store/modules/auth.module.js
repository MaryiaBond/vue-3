import axios from 'axios'

export default {
    namespaced: true,
    state() {
        return {
            token: localStorage.getItem('jwt-token'),
        }
    },
    mutations: {
        setToken(state, token) {
            state.token = token;
            localStorage.setItem('jwt-token', token)
        },
        logout(state) {
            state.token = null;
            localStorage.removeItem('jwt-token')
        },

    },
    actions: {
        async login({ commit, dispatch }, payload) {
            try {
                console.log(payload, 'payload')
                const { data } = await axios.post(`https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${process.env.VUE_APP_FB_KEY}`, { ...payload, returnSecureToken: true })
                commit('setToken', data.idToken)
            } catch(error) {
                dispatch('setMessage', {
                    value: 'errror',
                    type: 'danger'
                }, { root: true })
                console.log(error)
            }
            //   t@gmail.com
        }

    },
    getters: {
        token(state) {
            return state.token
        },
        isAuthenticated(_, getters) {
            return !!getters.token
        }
    }
}