import { createStore } from 'vuex'

export default createStore({
  state: () => ({
    defaultEmail: "dontu",
    defaultPassword: "costea",
    logged: false
  }),
  getters: {
  },
  mutations: {
    changePassword(state, payload) {
      state.defaultPassword = payload
    },
    loggedStatus(state, payload) {
      state.logged = payload
    }
  },
  actions: {
  },
  modules: {
  }
})
