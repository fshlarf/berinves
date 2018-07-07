import Vuex from 'vuex'

const createStore = () => {
  return new Vuex.Store({
    state: {
      userIdea: {},
      token: null,
      user: null,
      isUserLoggedIn: false
    },
    mutations: {
      setuserIdea (state, data) {
        state.userIdea = data
      },
      setToken (state, token) {
        state.token = token
        // if (token) {
        //   state.isUserLoggedIn = true
        // } else {
        //   state.isUserLoggedIn = false
        // }
      },
      setUser (state, user) {
        state.user = user
      }
    },
    actions: {
      setuserIdea ({commit}, data) {
        commit('setuserIdea', data)
      },
      setToken ({commit}, token) {
        commit('setToken', token)
      },
      setUser ({commit}, user) {
        commit('setUser', user) 
      }
    },
    
  })
}

export default createStore