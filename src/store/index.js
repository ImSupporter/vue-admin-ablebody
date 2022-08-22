import { createStore } from 'vuex'
import axios from 'axios';

export default createStore({
  state: {
    loginSuccess: false,
    loginError: false,
    sessionId: "",
  },
  getters: {
    isLoggedIn: state => state.loginSuccess,
    hasLoginErrored: state => state.loginError,
    getSessionId: state => state.sessionId,
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
            }
        } catch (err) {
            commit('loginError', {});
            throw new Error(err)
        }
    }
  },
  modules: {
  }
})
