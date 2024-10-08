import { defineStore } from 'pinia'
import { moneyFormat} from '../assets/js/tool.js';

export const useMainStore = defineStore('main', {
  state: () => ({
    demo: 1,
    totalAmount: 100.41455,
    api: "http://localhost:3000/api"
  }),
  getters: {
    demoGet: (state) => state.demo + "get",
    totalAmountFormat: (state) => {
      return moneyFormat(state.totalAmount)
    }
  },
  actions: {
		demoAction(){
			this.demo = 333
		},
    setTotalAmount(amount){
      this.totalAmount = amount;
    }
  }
})