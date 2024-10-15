import { defineStore } from 'pinia'
import { moneyFormat} from '../assets/js/tool.js';

export const useMainStore = defineStore('main', {
  state: () => ({
		api: "http://localhost:3000/api",
		totalAmount: 0,
    demo: 1,
		setCountdown:0
  }),
  getters: {
		totalAmountFormat: (state) => moneyFormat(state.totalAmount), //取得並計算資料(computed)
    demoGet: (state) => state.demo + "get"
  },
  actions: {
		setCountdown(payload){
			this.countdown = payload;
		},
		setTotalAmount(payload){ //更改資料，也可做ajax(mounted)
			this.totalAmount = payload;
		},
		demoAction(){
			this.demo = 333
		}
  }
})