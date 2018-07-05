import Vuex from 'vuex'

const createStore = () => {
  return new Vuex.Store({
    state: {
      userIdea: {}
    },
    mutations: {
      setuserIdea (state, data) {
        state.userIdea = data
      }
    }
  })
}

export default createStore