<template>
  <div
    class="sticky z-10 bottom-0 bg-zinc-800 px-4 py-1 rounded-md w-full h-[80px] flex items-center gap-2 shadow-lg shadow-black md:max-w-[950px] mx-auto"
  >
    <div class="flex-1 py-1">
      <div
        class="w-full flex justify-between items-center text-white px-2 mb-1"
      >
        <p class="text-sm md:text-xs">Select Total:</p>
        <p class="text-sm tracking-widest">
          $
          <span class="ml-2 md:ml-0 font-bold text-2xl">{{total_moneyFormat}}</span>
        </p>
      </div>
      <div class="w-full flex items-center gap-1.5">
        <button
					@click="$emit('clearbet')"
          class="flex-1 rounded-full py-1 text-white text-xs md:text-base font-bold border border-[#6ECA01] bg-gradient-to-r from-[#70CE01] to-[#19161C] hover:scale-105 duration-200"
        >
          CLEAR
        </button>
        <button
					@click="$emit('returnBet')"
          class="flex-1 rounded-full py-1 text-white text-xs md:text-base font-bold border border-[#C72F1C] bg-gradient-to-r from-[#D4311C] to-[#19161C] hover:scale-105 duration-200"
        >
          RETURN
        </button>
      </div>
    </div>
    <button
      @click="openChooseBet"
      class="flex flex-col-reverse md:flex-col items-center w-[84px] md:w-[60px] group/bets relative focus:outline-none"
    >
      <img
        :src="nowBet.img"
        class="w-[68px] md:w-[60px] group-hover/bets:scale-105 duration-200"
      />
      <svg
        width="12"
        height="8"
        viewBox="0 0 12 8"
        fill="none"
        class="group-hover/bets:-translate-y-0.5 md:group-hover/bets:translate-y-0.5 duration-200 rotate-180 md:rotate-0 mt-2"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M11 4.5L6 7L1 4.5M11 0.999999L6 3.5L1 0.999999"
          stroke="white"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>

      <!-- 選擇籌碼 -->
      <div
				v-show="showBetList"
        class=" flex flex-col gap-2 absolute z-30 bottom-[calc(100%+10px)]"
      >
     		<button
          @click.stop="chooseBet(item)"
          v-for="item in bets"
          :key="item.id"
          class="flex flex-col-reverse md:flex-col items-center w-[60px] group relative"
        >
          <img
            :src="item.img"
            class="w-[50px] md:w-[60px] group-hover:scale-105 duration-200"
          />
        </button>
      </div>
    </button>
    <!-- 選擇籌碼背景模糊 -->
    <transition name="betChoosebg">
      <div
        v-show="showBetList"
        @click="closeChooseBet"
        class="fixed top-0 left-0 z-20 w-screen h-screen bg-[#1a1a1b99] backdropBlur"
      ></div>
    </transition>
  </div>
</template>

<script>
import { useMainStore } from '../stores/index.js' // 確保路徑正確
import { moneyFormat} from '../assets/js/tool.js';
export default {
	setup() {
		return {
			store : useMainStore()
		}
	},
	props: ["total"],
  data() {
    return {
			nowBet:{},
			bets: [
        { id: 1, amount: 500, img: "/bet/500bet.svg" },
        { id: 2, amount: 1000, img: "/bet/1000bet.svg" },
        { id: 3, amount: 50, img: "/bet/50bet.svg" },
        { id: 4, amount: 100, img: "/bet/100bet.svg" },
        { id: 5, amount: 5000, img: "/bet/5000bet.svg" }
      ],
			showBetList:false
    };
  },
  mounted() {
    this.nowBet = this.store.Bet;
  },
  methods: {
		chooseBet(item) {
      this.nowBet = item;
      this.showBetList = false;
    },
    openChooseBet() {
      this.showBetList = !this.showBetList;
    },
		closeChooseBet(){
			this.showBetList = false;
		}
  },
	computed:{
		total_moneyFormat(){
			return moneyFormat(this.total)
		}
	}
};
</script>

<style scoped>
.betChoosebg-enter-active,
.betChoosebg-leave-active {
  transition: all 0.2s;
}

.betChoosebg-enter,
.betChoosebg-leave-to {
  opacity: 0;
}
</style>
