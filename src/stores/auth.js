import {defineStore} from 'pinia'
import router from '../router';


const useAuthStore = defineStore('auth', {
    state: () => ({
        token: localStorage.getItem('access_token') || null,
    }),
    actions: {
        sign_in(token) {
            localStorage.setItem('access_token', token)
            this.token = token
        },
        
        sign_out() {
            localStorage.removeItem('access_token')
            this.token = null;
        },
    },
    getters: {
        is_auth: (state) => !!state.token
    },
});


export default useAuthStore;