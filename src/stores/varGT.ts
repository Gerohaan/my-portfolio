import { defineStore } from 'pinia';

export const useVarGTStore = defineStore('varGT', {
  state: () => ({
    tab: 'main-tab',
  }),
  getters: {},
  actions: {
    changeTab(action = '') {
      this.tab = action;
    },
  },
});
