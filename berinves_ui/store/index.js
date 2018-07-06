import Vuex from 'vuex'

const createStore = () => {
  return new Vuex.Store({
    state: {
      userIdea: {},
      token: null,
      user: null
    },
    mutations: {
      setuserIdea (state, data) {
        state.userIdea = data
      },
      setToken (state, token) {
        state.token = token
      },
      setUser (state, user) {
        state.user = user
      }
    },
    actions: {
      setToken ({commit}, token) {
        commit('setToken', token)
      },
      setUser ({commit}, user) {
        commit('setUser', user) 
      }
    }
  })
}

export default createStore