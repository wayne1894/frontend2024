import { defineStore } from 'pinia'

export const useMainStore = defineStore('main', {
  state: () => ({
    demo: 1
  }),
  getters: {
    demoGet: (state) => state.demo + "get"
  },
  actions: {
		demoAction(){
			this.demo = 333
		}
  }
})