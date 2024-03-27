import { defineStore } from "pinia";

export const useExampleStore = defineStore("exampleStore", {
  state: () => ({
    count: 0,
  }),
  actions: {
    increment() {
      this.count = this.count + 1;
    },
    reset() {
      this.count = 0;
    },
  },
  getters: {
    doubleCount: (state) => state.count * 2,
  },
});
