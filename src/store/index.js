import { createStore } from 'vuex'
import { login } from '@/api/auth'
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
    authFail(state){
      state.loginSuccess = false 
    }
  },
  actions: {
    authFail({commit}){
      commit('authFail')
      saveLoginStatus(false)
      console.log('인증 실패!!')
    },
    async userLogin({ commit }, userData){
      const response = await login(userData);
      console.log(response)
      commit('loginSuccess')
      saveLoginStatus(true)
      return response
    }
  },
  
  modules: {
  }
})
