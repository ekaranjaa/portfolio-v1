export const state = () => ({
  menu: false,
  modal: {
    active: false,
    content: null
  },
  theme: null
});

export const getters = {
  menu: (state) => state.menu,
  modal: (state) => state.modal,
  theme: (state) => state.theme
};

export const mutations = {
  TOGGLE_MENU(state) {
    state.menu = !state.menu;
  },
  CLOSE_MENU(state) {
    state.menu = false;
  },
  OPEN_MODAL(state, payload) {
    state.modal = payload;
  },
  CLOSE_MODAL(state, payload) {
    state.modal = payload;
  },
  SET_THEME(state, payload) {
    state.theme = payload;
  }
};

export const actions = {
  toggleMenu({ commit }) {
    document.body.classList.toggle('overflow-hidden');
    commit('TOGGLE_MENU');
  },

  closeMenu({ commit }) {
    document.body.classList.remove('overflow-hidden');
    commit('CLOSE_MENU');
  },

  openModal({ commit }, payload) {
    document.body.classList.add('overflow-hidden');

    commit('OPEN_MODAL', {
      active: true,
      ...payload
    });
  },

  closeModal({ commit }) {
    document.body.classList.remove('overflow-hidden');

    commit('CLOSE_MODAL', {
      active: false,
      content: null
    });
  },

  setTheme({ commit }, theme = null) {
    if (process.browser) {
      let currentTheme = 'light';

      if (localStorage.getItem('theme') !== null) {
        currentTheme = localStorage.getItem('theme');
      } else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
        currentTheme = 'dark';
      }

      if (theme === null) {
        theme = currentTheme;
      }

      if (theme === 'dark') {
        document
          .querySelector('meta[name=theme-color]')
          .setAttribute('content', '#171717');
        document.documentElement.classList.add('dark');
      } else {
        document
          .querySelector('meta[name=theme-color]')
          .setAttribute('content', '#ffffff');
        document.documentElement.classList.remove('dark');
      }

      commit('SET_THEME', theme);
      localStorage.setItem('theme', theme);
    }
  }
};
