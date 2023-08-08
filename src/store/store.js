import { defineStore } from "pinia";

export const useStore = defineStore("store", {
  state: () => ({
    lightTheme: true,
  }),
  getters: {},
  actions: {
    switchColorTheme() {
      this.lightTheme = !this.lightTheme;
      if (this.lightTheme === true) {
        document.body.classList.add("bg__white");
        document.body.classList.remove("bg__black");
      } else {
        document.body.classList.add("bg__black");
        document.body.classList.remove("bg__white");
      }
    },
  },
});
