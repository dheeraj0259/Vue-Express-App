const isLoaded = (store, payload) => {
    store.commit('isLoaded', payload)
  }

  module.exports = {
      isLoaded
  }