import { createStore } from 'vuex'
import axios from 'axios';
import {
  saveLoginStatus,
  getLoginStatus
} from '@/utils/cookie'

export default createStore({
  state: {
    loginSuccess: getLoginStatus() || false,
    loginError: false,
  },
  getters: {
    isLoggedIn: state => state.loginSuccess,
    hasLoginErrored: state => state.loginError,
  },
  mutations: {
    loginSuccess(state) {
        state.loginSuccess = true;
    },
    loginError(state) {
        state.loginError = true;
    },
  },
  actions: {
    async login({commit}, {username, password}){
        try {
            const result = await axios.post('/login',
                {
                    username: username,
                    password: password
                }
            );
            if (result.status === 200) {
                commit('loginSuccess');
                saveLoginStatus(true)
            }
        } catch (err) {
            commit('loginError');
            throw new Error(err)
        }
    }
  },
  modules: {
  }
})
