import { defineStore } from 'pinia';

export const userCounterStore = defineStore('counter', {
  state: () => ({
    count: 1,
  }),
  actions: {
    accumulate() {
      this.count += 1;
    },
  },
});

export const useLoginStore = defineStore('login', {
  state: () => ({ name: '', password: '' }),
  actions: {},
});
