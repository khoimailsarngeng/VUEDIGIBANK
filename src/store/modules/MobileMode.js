const MobileMode = {
  namespaced: true,
  state: {
    mobileMode: true,
    window: {
      width: 0,
      height: 0
    }
  },
  getters: {
    mobileMode: state => state.mobileMode
  },
  mutations: {
    deviceCheck(state, payload) {
      state.mobileMode = payload;
    },
    SET_WINDOW_RESIZE(state) {
      state.window = {
        width: window.innerWidth,
        height: window.innerHeight
      };
    }
  },
  actions: {
    deviceCheck({ commit }, payload) {
      commit('deviceCheck', payload);
    }
  }
};

export default MobileMode;
