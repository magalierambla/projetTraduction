export default ({
  namespaced: true,
  state: {
    sourcePage: null,
    pageContent: null,
  },

  mutations: {
    SET_SOURCE (state, data) {
      state.sourcePage = data
    },

    SET_PAGE_CONTENT (state, data) {
      state.pageContent = data
    },

    DELETE_SOURCE (state) {
      state.sourcePage = null
    },

    DELETE_PAGE_CONTENT (state) {
      state.pageContent = null
    },

  },

  getters: {
    sourcePage: state => {
      return state.sourcePage
    },

    pageContent: state => {
      return state.pageContent
    },
  },

  actions: {
    savePage ({ commit }, data) {
      /*
      Data have the following schema:
      {
        source: "name of the source vue",
        content: {} // content of the page
      }
      */

      commit('SET_SOURCE', data.source)
      commit('SET_PAGE_CONTENT', data.content)
    },

    reset ({ commit }) {
      commit('DELETE_SOURCE')
      commit('DELETE_PAGE_CONTENT')
    },
  },
})
