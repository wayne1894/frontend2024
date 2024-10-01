import { defineStore } from 'pinia'

export const useMainStore = defineStore('main', {
  state: () => ({
		bet: {
      id: 1,
      amount: 50,
      img: "/bet/50bet.svg"
    },
    demo: 1
  }),
  getters: {
		Bet: (state) => state.bet,
    demoGet: (state) => state.demo + "get"
  },
  actions: {
		demoAction(){
			this.demo = 333
		}
  }
})