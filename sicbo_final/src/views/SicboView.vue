<template>
<Header></Header>
<div class="pt-[5%]">
  <div class="md:flex md:items-end md:px-[20px] md:justify-center md:gap-5">
  <div
    class="select-none flex flex-col justify-between md:justify-start items-center md:pt-0 px-1 md:px-0 md:pb-4 relative md:max-w-screen-lg"
  >
    <!-- 下注區 -->
    <div
      class="w-full max-w-[640px] md:max-w-[950px] mb-0.5 md:mb-0 md:h-full md:px-[20px]"
    >

      <!-- 第一、二排 -->
      <div class="grid md:flex grid-cols-7 md:grid-cols-6 gap-0.5 md:gap-1">
        <!-- 小&雙 -->
        <div
          class="col-span-1 flex flex-col md:flex-row items-center gap-0.5 md:gap-1"
        >
          <!-- 小 -->
          <button
						@click="handBet('small')"
            class="sicbo-btn border-[#FD4D6C] w-full md:w-[100px] h-[73px] md:h-[100px] flex flex-col items-center justify-center relative"
          >
            <Bet :show="playSicbo.small.moneyBet > 0 && (betShow || playSicbo.small.win)" :amount="playSicbo.small.moneyBet" :win = "playSicbo.small.win"></Bet>
            <div>
              <p class="text-white text-xs md:text-xl font-bold tracking-wider">
                {{ playSicbo.small.name }}
              </p>
              <p class="text-[#FFFFFF66] text-xs font-bold">
                {{ playSicbo.small.betCommand }}
              </p>
            </div>
            <p
              class="text-[#FFFFFF66] text-xs tracking-widest font-bold mt-auto"
            >
              1:{{ playSicbo.small.odds }}
            </p>
          </button>
          <!-- 雙 -->
          <button
            @click="handBet('even')"
            class="sicbo-btn border-[#42A978] w-full md:w-[60px] h-[73px] md:h-[100px] flex flex-col items-center justify-center relative"
          >
            <Bet :show="playSicbo.even.moneyBet > 0 && (betShow || playSicbo.even.win)" :amount="playSicbo.even.moneyBet" :win = "playSicbo.even.win"></Bet>
            <div>
              <p class="text-white text-xs font-bold tracking-wider">
                {{ playSicbo.even.betCommand }}
              </p>
            </div>
            <p
              class="text-[#FFFFFF66] text-xs tracking-widest font-bold mt-auto"
            >
              1:{{ playSicbo.even.odds }}
            </p>
          </button>
        </div>
        <!-- 雙骰1-3 -->
        <div
          class="col-span-1 flex flex-col md:flex-row items-center gap-0.5 md:gap-1"
        >
          <button
            @click="handBet('doubleDice', item.id)"
            v-for="item in playSicbo.doubleDice.filter(e => e.id <= 3)"
            :key="item.id"
            :class="{
              'border-[#FD4D6C] md:border-[#42A978]' : item.id % 2 == 0,
              'border-[#42A978] md:border-[#FD4D6C]' : item.id % 2 != 0,
            }"
            class="col-span-1 sicbo-btn w-full md:w-[60px] h-[48px] md:h-[100px] flex flex-col items-center justify-center relative"
          >
            <Bet :show="item.moneyBet > 0 && (betShow || item.win)" :amount="item.moneyBet" :win = "item.win"></Bet>
            <div class="flex md:flex-col items-center gap-1">
              <img :src="item.img" class="w-3 md:w-6 h-3 md:h-6"  />
              <img :src="item.img" class="w-3 md:w-6 h-3 md:h-6"  />
            </div>
            <p
              class="text-[#FFFFFF66] text-xs tracking-widest font-bold mt-auto"
            >
              1:{{ item.odds }}
            </p>
          </button>
        </div>
        <!-- 指定豹子(1-3)手機版 -->
        <div class="col-span-1 flex md:hidden flex-col items-center gap-0.5">
          <button
            @click="handBet('specifyTripleDice', item.id)"
            v-for="item in playSicbo.specifyTripleDice.filter(e => e.id <= 3)"
            :key="item.id"
            :class="{
              'border-[#42A978]' : item.id % 2 == 0,
              'border-[#FD4D6C]' : item.id % 2 != 0,
            }"
            class="sicbo-btn w-full h-[48px] flex flex-col items-center justify-center relative"
          >
            <Bet :show="item.moneyBet > 0 && (betShow || item.win)" :amount="item.moneyBet" :win = "item.win"></Bet>
            <div class="flex flex-col justify-center items-center gap-0.5">
              <img :src="item.img" class="w-3 h-3"  />
              <div class="flex gap-0.5">
                <img :src="item.img" class="w-3 h-3"  />
                <img :src="item.img" class="w-3 h-3"  />
              </div>
            </div>
            <p class="text-[#FFFFFF66] text-xs tracking-widest font-bold">
              1:{{ item.odds }}
            </p>
          </button>
        </div>
        <!-- 任意豹子 -->
        <button
          @click="handBet('anyTriple')"
          class="from-[#202031] to-[#010102] bg-gradient-to-b col-span-1 bg-[#333333] md:bg-rainbow rounded-sm md:rounded-md w-full md:w-[230px] h-[148px] md:h-[100px] flex flex-col items-center justify-center p-px md:p-0.5"
        >
          <Bet :show="playSicbo.anyTriple.moneyBet > 0 && (betShow || playSicbo.anyTriple.win)" :amount="playSicbo.anyTriple.moneyBet" :win = "playSicbo.anyTriple.win"></Bet>
          <div
            class="bg-gradient-to-b w-full h-full px-2 p-0.5 rounded-sm md:rounded-md flex flex-col items-center justify-center relative"
          >
            <div>
              <p class="text-white text-xs md:text-xl font-bold tracking-wider">
                {{ playSicbo.anyTriple.betCommand }}
              </p>
              <div class="flex justify-center gap-0.5">
                <div
									v-for="n in 3"
									:class="{'md:hidden':n>1}"
                  class="flex flex-col md:flex-row justify-center gap-0.5 md:gap-1 mt-1"
                >
                  <img class="w-3 md:w-6 h-3 md:h-6" src="/dice/one.svg">
                  <img class="w-3 md:w-6 h-3 md:h-6" src="/dice/two.svg">
                  <img class="w-3 md:w-6 h-3 md:h-6" src="/dice/three.svg">
                  <img class="w-3 md:w-6 h-3 md:h-6" src="/dice/four.svg">
                  <img class="w-3 md:w-6 h-3 md:h-6" src="/dice/five.svg">
                  <img class="w-3 md:w-6 h-3 md:h-6" src="/dice/six.svg">
                </div>
              </div>
            </div>
            <p
              class="text-[#FFFFFF66] text-xs tracking-widest font-bold mt-auto"
            >
              1:{{ playSicbo.anyTriple.odds }}
            </p>
          </div>
        </button>
        <!-- 指定豹子(1-3)手機版 -->
        <div class="col-span-1 flex md:hidden flex-col items-center gap-0.5">
          <button
            @click="handBet('specifyTripleDice', item.id)"
            v-for="item in playSicbo.specifyTripleDice.filter(e => e.id > 3)"
            :key="item.id"
            :class="{
              'border-[#FD4D6C]' : item.id % 2 == 0,
              'border-[#42A978]' : item.id % 2 != 0,
            }"
            class="sicbo-btn w-full h-[48px] flex flex-col items-center justify-center relative"
          >
            <Bet :show="item.moneyBet > 0 && (betShow || item.win)" :amount="item.moneyBet" :win = "item.win"></Bet>
            <div class="flex flex-col justify-center items-center gap-0.5">
              <img :src="item.img" class="w-3 h-3" />
              <div class="flex gap-0.5">
                <img :src="item.img" class="w-3 h-3" />
                <img :src="item.img" class="w-3 h-3" />
              </div>
            </div>
            <p class="text-[#FFFFFF66] text-xs tracking-widest font-bold">
              1:{{ item.odds }}
            </p>
          </button>
        </div>
        <!-- 雙骰4-6 -->
        <div
          class="col-span-1 flex flex-col md:flex-row items-center gap-0.5 md:gap-1"
        >
          <button
           @click="handBet('doubleDice', item.id)"
            v-for="item in playSicbo.doubleDice.filter(e => e.id > 3)"
            :key="item.id"
            :class="{
              'border-[#42A978]' : item.id % 2 == 0,
              'border-[#FD4D6C]' : item.id % 2 != 0,
            }"
            class="col-span-1 sicbo-btn w-full md:w-[60px] h-[48px] md:h-[100px] flex flex-col items-center justify-center relative"
          >
            <Bet :show="item.moneyBet > 0 && (betShow || item.win)" :amount="item.moneyBet" :win = "item.win"></Bet>
            <div class="flex md:flex-col items-center gap-1">
              <img :src="item.img" class="w-3 md:w-6 h-3 md:h-6"  />
              <img :src="item.img" class="w-3 md:w-6 h-3 md:h-6"  />
            </div>
            <p
              class="text-[#FFFFFF66] text-xs tracking-widest font-bold mt-auto"
            >
              1:{{ item.odds }}
            </p>
          </button>
        </div>
        <!-- 大&單 -->
        <div
          class="col-span-1 flex flex-col md:flex-row-reverse items-center gap-0.5 md:gap-1"
        >
          <!-- 大 -->
          <button
            @click="handBet('big')"
            class="sicbo-btn border-[#FD4D6C] md:border-[#42A978] w-full md:w-[100px] h-[73px] md:h-[100px] flex flex-col items-center justify-center relative"
          >
            <Bet :show="playSicbo.big.moneyBet > 0 && (betShow || playSicbo.big.win)" :amount="playSicbo.big.moneyBet" :win = "playSicbo.big.win"></Bet>
            <div>
              <p class="text-white text-xs md:text-xl font-bold tracking-wider">
                {{ playSicbo.big.name }}
              </p>
              <p class="text-[#FFFFFF66] text-xs font-bold">
                {{ playSicbo.big.betCommand }}
              </p>
            </div>
            <p
              class="text-[#FFFFFF66] text-xs tracking-widest font-bold mt-auto"
            >
              1:{{ playSicbo.big.odds }}
            </p>
          </button>
          <!-- 單 -->
          <button
            @click="handBet('odd')"
            class="sicbo-btn border-[#42A978] md:border-[#FD4D6C] w-full md:w-[60px] h-[73px] md:h-[100px] flex flex-col items-center justify-center relative"
          >
            <Bet :show="playSicbo.odd.moneyBet > 0 && (betShow || playSicbo.odd.win)" :amount="playSicbo.odd.moneyBet" :win = "playSicbo.odd.win"></Bet>
            <div>
              <p class="text-white text-xs font-bold tracking-wider">
                {{ playSicbo.odd.betCommand }}
              </p>
            </div>
            <p
              class="text-[#FFFFFF66] text-xs tracking-widest font-bold mt-auto"
            >
              1:{{ playSicbo.odd.odds }}
            </p>
          </button>
        </div>
      </div>
      <!-- 第二排(指定豹子電腦版) -->
      <div
        class="hidden md:flex items-center gap-1 my-1.5"
      >
        <button
          @click="handBet('specifyTripleDice', item.id)"
          v-for="item in playSicbo.specifyTripleDice"
          :key="item.id"
          class="sicbo-btn border-[#FD4D6C] w-[155px] h-[50px] flex items-center justify-center relative"
        >
          <Bet :show="item.moneyBet > 0 && (betShow || item.win)" :amount="item.moneyBet" :win = "item.win"></Bet>
          <div class="flex justify-center items-center gap-1">
            <img :src="item.img" class="w-6 h-6"  />
            <img :src="item.img" class="w-6 h-6"  />
            <img :src="item.img" class="w-6 h-6"  />
          </div>
          <p class="text-[#FFFFFF66] text-xs tracking-widest font-bold ml-4">
            1:{{ item.odds }}
          </p>
        </button>
      </div>
       <!-- 第三排(指定點數) -->
      <div
        class="flex flex-wrap gap-0.5 md:gap-1 items-center justify-between my-0.5 md:my-1.5"
      >
        <button
          @click="handBet('specifyPoints', point.id)"
          v-for="point in playSicbo.specifyPoints"
          :class="{
              'border-[#FD4D6C]' : point.id % 2 === 0,
              'border-[#42A978]' : point.id % 2 !== 0,
          }"
          :key="point.id"
          class="sicbo-btn md:sicbo-btn-full flex-1 basis-[48px] md:w-[60px] h-[48px] md:h-[60px] flex flex-col items-center justify-center relative"
        >
          <Bet :show="point.moneyBet > 0 && (betShow || point.win)" :amount="point.moneyBet" :win = "point.win"></Bet>
          <div class="flex justify-center items-center">
            <p
              class="text-white text-base md:text-2xl font-bold tracking-wider"
            >
              {{ point.id }}
            </p>
          </div>
          <p class="text-[#FFFFFF66] text-xs tracking-widest font-bold">
            1:{{ point.odds }}
          </p>
        </button>
      </div>
      <!-- 第四排 -->
      <div
        class="flex flex-col md:flex-row items-center justify-around gap-0.5 md:mt-1.5"
      >
        <!-- 骰子組合 -->
        <div class="grid grid-cols-5 gap-0.5 md:gap-1 w-full md:w-[579px]">
          <button
            @click="handBet('diceCouple', item.id)"
            v-for="item in playSicbo.diceCouple"
            :key="item.id"
            :class="{
                'border-[#42A978]' : item.id % 2 === 0,
                'border-[#FD4D6C]' : item.id % 2 !== 0,
            }"
            class="col-span-1 text-white sicbo-btn md:border-[#42A978] flex flex-col md:flex-row items-center justify-center relative"
          >
            <Bet :show="item.moneyBet > 0 && (betShow || item.win)" :amount="item.moneyBet" :win = "item.win"></Bet>
            <div class="flex justify-center items-center gap-1">
              <img
                v-for="img in item.couple.split(',')"
                :key="img"
                :src="`/dice/${img}.svg`"
                class="w-3 md:w-6 h-3 md:h-6"
              />
            </div>
            <p
              class="text-[#FFFFFF66] text-xs tracking-widest font-bold md:ml-4"
            >
              1:{{ item.odds }}
            </p>
          </button>
        </div>
        <!-- 骰子玩法賠率 -->
        <div
          class="w-full md:w-[112px] h-[24px] md:h-[140px] sicbo-btn border-[#333333] md:border-[#FD4D6C] flex md:flex-col justify-between md:justify-center items-center gap-2"
        >
          <div class="text-center flex md:block">
            <p class="text-white font-bold text-xs tracking-widest">
              Dice Single
            </p>
            <p
              class="text-[#FFFFFF66] text-xs tracking-widest font-bold ml-1 md:ml-0"
            >
              1:{{ playSicbo.diceSingleOdds }}
            </p>
          </div>
          <div class="text-center flex md:block">
            <p class="text-white font-bold text-xs tracking-widest">
              Dice Double
            </p>
            <p
              class="text-[#FFFFFF66] text-xs tracking-widest font-bold ml-1 md:ml-0"
            >
              1:{{ playSicbo.diceDoubleOdds }}
            </p>
          </div>
          <div class="text-center flex md:block">
            <p class="text-white font-bold text-xs tracking-widest">
              Dice Triple
            </p>
            <p
              class="text-[#FFFFFF66] text-xs tracking-widest font-bold ml-1 md:ml-0"
            >
              1:{{ playSicbo.diceTirpleOdds }}
            </p>
          </div>
        </div>
        <!-- 指定出現骰子 -->
        <div
          class="grid grid-cols-6 md:grid-cols-3 gap-0.5 md:gap-1 w-full md:w-[251px]"
        >
          <button
            @click="handBet('specifyDice', item.id)"
            v-for="item in playSicbo.specifyDice"
            :key="item.id"
            :class="{
                'border-[#42A978]' : item.id % 2 == 0,
                'border-[#FD4D6C]' : item.id % 2 !== 0,
            }"
            class="col-span-1 text-white sicbo-btn md:border-[#FD4D6C] h-[48px] md:h-[68px] flex items-center justify-center relative"
          >
            <Bet :show="item.moneyBet > 0 && (betShow || item.win)" :amount="item.moneyBet" :win = "item.win"></Bet>
            <img :src="item.img" class="w-6 md:w-8 h-6 md:h-8"  />
          </button>
        </div>
      </div>

    </div>
  </div>
	</div>
	<div class="fixed w-full bottom-0 z-50">
		<!-- 下注控制 -->
		<BetControl
			:total="BetTotal"
			:isDrawing = "isDrawing"
			@setBetAmount = "setBetAmount"
			@clearBet = "clearBet"
			@returnBet = "returnBet"
		></BetControl>
  </div>
</div>
</template>
  
<script>
import Header from '../components/Header.vue'
import BetControl from '../components/BetControl.vue'
import Bet from '../components/Bet.vue'
	
import { useMainStore } from '../stores/index.js'

export default{
	setup() {
		return {
			store : useMainStore()
		}
	},
  data(){
    return {
			betShow: true,
			playSicbo: {
				big: {//大小
					name: "BIG",
					betCommand: "11-17",
					odds: 1,
					moneyBet: 0,
					win:false
				},
				small: {
					name: "SMALL",
					betCommand: "4-10",
					odds: 1,
					moneyBet: 0,
					win:false
				},
				even: { //單雙
					betCommand: "EVEN",
					odds: 1,
					moneyBet: 0,
					win:false
				},
				odd: {
					betCommand: "ODD",
					odds: 1,
					moneyBet: 0,
					win:false
				},
				doubleDiceOdds: 8, //雙骰
				doubleDice: [
					{ id: 1, img: "/dice/one.svg", moneyBet: 0 ,odds:8,win:false },
					{ id: 2, img: "/dice/two.svg", moneyBet: 0 ,odds:8,win:false},
					{ id: 3, img: "/dice/three.svg", moneyBet: 0 ,odds:8,win:false},
					{ id: 4, img: "/dice/four.svg", moneyBet: 0 ,odds:8,win:false},
					{ id: 5, img: "/dice/five.svg", moneyBet: 0 ,odds:8,win:false},
					{ id: 6, img: "/dice/six.svg", moneyBet: 0 ,odds:8,win:false}
				],
				anyTriple: { //任意豹子
					betCommand: "Any Triple",
					odds: 23,
					moneyBet: 0,
					win: false
				},
				specifyTripleDiceOdds: 150, 
				specifyTripleDice: [ //指定豹子
					{ id: 1, img: "/dice/one.svg", moneyBet: 0,odds:150 ,win:false },
					{ id: 2, img: "/dice/two.svg", moneyBet: 0 ,odds:150 ,win:false},
					{ id: 3, img: "/dice/three.svg", moneyBet: 0 ,odds:150 ,win:false},
					{ id: 4, img: "/dice/four.svg", moneyBet: 0 ,odds:150 ,win:false},
					{ id: 5, img: "/dice/five.svg", moneyBet: 0 ,odds:150 ,win:false},
					{ id: 6, img: "/dice/six.svg", moneyBet: 0 ,odds:150 ,win:false}
				],
				specifyPoints: [ //指定點數
					{ id: 4, odds: 50, moneyBet: 0 ,win:false},
					{ id: 5, odds: 18, moneyBet: 0 ,win:false},
					{ id: 6, odds: 14, moneyBet: 0 ,win:false},
					{ id: 7, odds: 12, moneyBet: 0 ,win:false},
					{ id: 8, odds: 8, moneyBet: 0 ,win:false},
					{ id: 9, odds: 6, moneyBet: 0 ,win:false},
					{ id: 10, odds: 6, moneyBet: 0 ,win:false},
					{ id: 11, odds: 6, moneyBet: 0 ,win:false},
					{ id: 12, odds: 6, moneyBet: 0 ,win:false},
					{ id: 13, odds: 8, moneyBet: 0 ,win:false},
					{ id: 14, odds: 12, moneyBet: 0 ,win:false},
					{ id: 15, odds: 14, moneyBet: 0 ,win:false},
					{ id: 16, odds: 18, moneyBet: 0 ,win:false},
					{ id: 17, odds: 50, moneyBet: 0 ,win:false}
				],
				diceCoupleOdds: 5, //骰子組合
				diceCouple: [
					{ id: "1,2", couple: "one,two", moneyBet: 0 ,odds:5,win:false},
					{ id: "1,3", couple: "one,three", moneyBet: 0 ,odds:5,win:false},
					{ id: "1,4", couple: "one,four", moneyBet: 0 ,odds:5,win:false},
					{ id: "1,5", couple: "one,five", moneyBet: 0 ,odds:5,win:false},
					{ id: "1,6", couple: "one,six", moneyBet: 0 ,odds:5,win:false},
					{ id: "2,3", couple: "two,three", moneyBet: 0 ,odds:5,win:false},
					{ id: "2,4", couple: "two,four", moneyBet: 0 ,odds:5,win:false},
					{ id: "2,5", couple: "two,five", moneyBet: 0 ,odds:5,win:false},
					{ id: "2,6", couple: "two,six", moneyBet: 0 ,odds:5,win:false},
					{ id: "3,4", couple: "three,four", moneyBet: 0 ,odds:5,win:false},
					{ id: "3,5", couple: "three,five", moneyBet: 0 ,odds:5,win:false},
					{ id: "3,6", couple: "three,six", moneyBet: 0 ,odds:5,win:false},
					{ id: "4,5", couple: "four,five", moneyBet: 0 ,odds:5,win:false},
					{ id: "4,6", couple: "four,six", moneyBet: 0 ,odds:5,win:false},
					{ id: "5,6", couple: "five,six", moneyBet: 0 ,odds:5,win:false}
				],
				/**骰子玩法賠率 */
				diceSingleOdds: 1,
				diceDoubleOdds: 2,
				diceTirpleOdds: 3,
				specifyDice: [ //指定出現骰子
					{ id: 1, img: "/dice/one.svg", moneyBet: 0 ,win:false},
					{ id: 2, img: "/dice/two.svg", moneyBet: 0 ,win:false},
					{ id: 3, img: "/dice/three.svg", moneyBet: 0 ,win:false},
					{ id: 4, img: "/dice/four.svg", moneyBet: 0 ,win:false},
					{ id: 5, img: "/dice/five.svg", moneyBet: 0 ,win:false},
					{ id: 6, img: "/dice/six.svg", moneyBet: 0 ,win:false}
				]
			},
			BetTotal: 0,
			isDrawing: false,
			BetAmount: 0,
			countdownAll:0,
    }
  },
	created(){
		this.getNewCycleInfo(); //骰子遊戲開發 - 倒數計時器
	},
	methods:{
		 setWinFalse(){
				//把之前的 win 全變 false
				for (const key in this.playSicbo) {
					if (Array.isArray(this.playSicbo[key])) {
						// 如果是陣列，表示是 diceCouple、specifyDice 等
						for (const item of this.playSicbo[key]) {
							item.win = false;
						}
					} else if (typeof this.playSicbo[key] === 'object') {
						// 如果是物件，表示是 doubleDice、anyTriple、specifyTripleDice 等
						this.playSicbo[key].win = false;
					}
				}

				// 處理 specifyPoints
				for (const item of this.playSicbo.specifyPoints) {
					item.win = false;
				}
				
			},

		async setWinInfo(resultPoints){
				this.setWinFalse()
				const totalPoints = resultPoints.reduce((acc, val) => acc + val, 0); // 計算總點數
				if (totalPoints >= 11 && totalPoints <= 17) {
					this.playSicbo.big.win = true;
				} else if (totalPoints >= 4 && totalPoints <= 10) {
					this.playSicbo.small.win = true;
				}
				if (totalPoints % 2 === 0) {
					this.playSicbo.even.win = true;
				} else {
					this.playSicbo.odd.win = true;
				}

				// 檢查是否為雙骰
					const hasDuplicate = resultPoints.some((num, index, arr) => arr.indexOf(num) !== index);

					// 更新 doubleDice 陣列的 win 屬性
					if (hasDuplicate) {
						const duplicateNumber = resultPoints.find((num, index, arr) => arr.indexOf(num) !== index);

						for (const dice of this.playSicbo.doubleDice) {
							if (dice.id === duplicateNumber) {
								dice.win = true;
							}
						}
						//console.log(`兩個數字一樣的是：${duplicateNumber}`);
					}

			 // 檢查是否三個數字都相同
					const isTriple = resultPoints.every((num, index, arr) => num === arr[0]);

				if (isTriple) {
					this.playSicbo.anyTriple.win = true;
				}



				// 檢查是否為指定豹子
				for (let i = 0; i < this.playSicbo.specifyTripleDice.length; i++) {
					if (resultPoints[0] === resultPoints[1] && resultPoints[1] === resultPoints[2] && resultPoints[0] === this.playSicbo.specifyTripleDice[i].id) {
						this.playSicbo.specifyTripleDice[i].win = true;
						break;
					}
				}

				// 計算三個點數的加總
				const sum = resultPoints.reduce((acc, num) => acc + num, 0);
				const matchedId = this.playSicbo.specifyPoints.find(item => item.id === sum);
				if (matchedId) {
					matchedId.win = true;
				} 

				 // 產生所有可能的排序組合
					const allCombinations = [];
					for (let i = 0; i < resultPoints.length; i++) {
						for (let j = 0; j < resultPoints.length; j++) {
							if (i !== j) {
								const combination = [resultPoints[i], resultPoints[j]];
								// 排序並加入組合列表
								allCombinations.push(combination.sort((a, b) => a - b));
							}
						}
					}
					// 移除重複的組合
					const uniqueCombinations = Array.from(new Set(allCombinations.map(JSON.stringify)), JSON.parse);

					// 過濾掉相反數的組合
					const nonReversedCombinations = uniqueCombinations.filter((combo) => {
						const reversedCombo = combo.slice().reverse();
						return !uniqueCombinations.some((c) => c[0] === reversedCombo[0] && c[1] === reversedCombo[1]);
					});

					// 排序組合
					const sortedCombinations = nonReversedCombinations.sort((a, b) => {
						if (a[0] !== b[0]) {
							return a[0] - b[0];
						}
						return a[1] - b[1];
					});

					// 將組合轉換成字串
					const stringCombinations = sortedCombinations.map(combo => combo.join(','));
					// diceCouple 的 id 陣列
					const diceCoupleIds = this.playSicbo.diceCouple.map(item => item.id);

					// 檢查是否有匹配的 id
					diceCoupleIds.forEach((id, index) => {
						if (stringCombinations.includes(id)) {
							// 找到匹配的 id，將對應的 win 設為 true
							this.playSicbo.diceCouple[index].win = true;
						}
					});

				// 判斷指定出現骰子是否中獎
				for (let i = 0; i < this.playSicbo.specifyDice.length; i++) {
					const specifiedNumbers = this.playSicbo.specifyDice[i].id;
					const isWin = resultPoints.includes(specifiedNumbers);
					if (isWin) {
						this.playSicbo.specifyDice[i].win = true;
						if(resultPoints[0] == resultPoints[1] == resultPoints [2]){
							this.playSicbo.specifyDice[i].odds = 3;
						}else if(resultPoints[0] == resultPoints[1] || resultPoints[0] == resultPoints[2]){  
							this.playSicbo.specifyDice[i].odds = 2
						}else{
							this.playSicbo.specifyDice[i].odds = 1  
						}
						continue;
					}
				} 
				this.betShow = false;
				console.log(this.playSicbo,"this.playSicbo")

			},

		async getLastOpenInfo(){
				const fullApiUrl = `${this.store.api}/getLastOpenInfo`;
				const requestOptions = {
					method: "POST",
					headers: {
						"Content-Type": "application/json"
					},
					body: JSON.stringify({})
				};
				try {
					const response = await fetch(fullApiUrl, requestOptions);
					if (!response.ok) {
						throw new Error(`Network response was not ok: ${response.statusText}`);
					}
					const data = await response.json();
					if(data.status != 1) throw new Error(`data.status != 0`);
					//alert(data.info.result_number)
					this.setWinInfo(data.info.result_number)
				}catch(err){
					console.error("发生错误:", err);
					//this.$router.push({ path: '/' });
				}
			},
		async getNewCycleInfo(){
			this.clearTimer("public_timer");

			if(this.$route.path.indexOf("sicbo") == -1) return //如果在其他頁就不執行(避免切換頁面執行到)

			const fullApiUrl = `${this.store.api}/getNewCycleInfo`;
			const requestOptions = {
				method: "POST",
				headers: {
					"Content-Type": "application/json"
				},
				body: JSON.stringify({})
			};
			try {
					const response = await fetch(fullApiUrl, requestOptions);
					if (!response.ok) {
						throw new Error(`Network response was not ok: ${response.statusText}`);
					}
					const data = await response.json();

					if(data.status != 1) throw new Error(`data.status != 0`);
					console.log("_____取得新期數_____")

					this.countdownAll = (data.info.start_time - data.info.server_time);
					if(this.countdownAll<0){
						this.clearTimer("public_timer");
						this.getNewCycleInfo()
						return
					}

					this.isDrawing = false;

					if(this.countdownAll>60) this.countdownAll = this.countdownAll - 60

					if (this.countdownAll<=60 && this.countdownAll>=30){//代表在下注時間

					}
					if(this.countdownAll<30 && this.countdownAll>0){//代表在非開獎時間
							this.store.setCountdown(0);
							this.isDrawing = true; // 開始計時開獎時間
					}
					window.public_timer = setInterval(async () => {

						if (this.countdownAll<=60 && this.countdownAll>=30){
							//代表下注期間
							this.store.setCountdown(this.countdownAll - 30);
							if(this.store.countdown == 0) this.isDrawing = true;
						}
						if(this.countdownAll==28) { //第28秒時開將
							this.getLastOpenInfo(); //取的開獎結果
						}
						if(this.countdownAll<=4) {
							this.handClearbet()
							this.store.setCountdown(this.countdownAll - 1);
						}
						this.countdownAll--;
						if (this.countdownAll <= 0) {
							this.store.setCountdown(30)
							this.getNewCycleInfo()
						}

					},1000)	

			}catch(err){
				console.error("发生错误:", err);
			}
		},
		handClearbet() {
				this.playSicbo.big.moneyBet = 0;
				this.playSicbo.small.moneyBet = 0;
				this.playSicbo.even.moneyBet = 0;
				this.playSicbo.odd.moneyBet = 0;
				this.playSicbo.anyTriple.moneyBet = 0;
				this.playSicbo.doubleDice.forEach(e => (e.moneyBet = 0));
				this.playSicbo.specifyTripleDice.forEach(e => (e.moneyBet = 0));
				this.playSicbo.specifyPoints.forEach(e => (e.moneyBet = 0));
				this.playSicbo.diceCouple.forEach(e => (e.moneyBet = 0));
				this.playSicbo.specifyDice.forEach(e => (e.moneyBet = 0));
			},
		clearTimer(id){
				clearInterval(window[id]) //清除原本的倒計時
				window[id] = null
			},
		setBetAmount(amount){
			this.BetAmount = amount;
			console.log(this.BetAmount,"this.BetAmount")
		},
		clearBet(){
			console.log("clearBet")
		},
		returnBet(){
			console.log("returnBet")
		},
		generateBet(bet){
				 let game_type_id = [];
				 let bet_info = [];
				 let bet_balance = [];

				 for(var i=0;i<bet.length;i++){

					 var _data = bet[i].dice ? {[bet[i].type]:{[bet[i].dice]: this.BetAmount}} : {[bet[i].type]: this.BetAmount};
					 let {big,small,even,odd,anyTriple,doubleDice,specifyTripleDice,specifyPoints,diceCouple,specifyDice} = _data

						// 迭代 specifyPoints 物件
						for (let point in specifyPoints) {
							if (specifyPoints[point] > 0) {
								// 如果投注金額大於0，將對應的和值 id 加入 game_type_id
								game_type_id.push(1);

								// 將投注內容和金額分別加入 bet_info 和 bet_balance
								bet_info.push(parseInt(point));
								bet_balance.push(specifyPoints[point]);
							}
						}

						// 檢查 anyTriple 變數
						if (anyTriple > 0) {
							// 如果 anyTriple 大於0，將對應的遊戲 id、投注內容和金額加入相應的陣列
							game_type_id.push(2);
							bet_info.push('any');
							bet_balance.push(anyTriple);
						}

						// 迭代 specifyTripleDice 物件
						for (let dice in specifyTripleDice) {
							if (specifyTripleDice[dice] > 0) {
								// 如果投注金額大於0，將對應的遊戲 id、投注內容和金額加入相應的陣列
								game_type_id.push(3);
								bet_info.push(parseInt(dice));
								bet_balance.push(specifyTripleDice[dice]);
							}
						}

						// 迭代 doubleDice 物件
						for (let dice in doubleDice) {
							if (doubleDice[dice] > 0) {
								// 如果投注金額大於0，將對應的遊戲 id、投注內容和金額加入相應的陣列
								game_type_id.push(7);
								bet_info.push(parseInt(dice));
								bet_balance.push(doubleDice[dice]);
							}
						}

						// 迭代 diceCouple 物件
						for (let combination in diceCouple) {
							if (diceCouple[combination] > 0) {
								// 如果投注金額大於0，將對應的遊戲 id、投注內容和金額加入相應的陣列
								game_type_id.push(9);
								bet_info.push(combination);
								bet_balance.push(diceCouple[combination]);
							}
						}

						// 檢查 big 變數
						if (big > 0) {
							// 如果 big 大於0，將對應的遊戲 id、投注內容和金額加入相應的陣列
							game_type_id.push(12);
							bet_info.push('big');
							bet_balance.push(big);
						}

						// 檢查 small 變數
						if (small > 0) {
							// 如果 small 大於0，將對應的遊戲 id、投注內容和金額加入相應的陣列
							game_type_id.push(12);
							bet_info.push('small');
							bet_balance.push(small);
						}

						// 檢查 even 變數
						if (even > 0) {
							// 如果 even 大於0，將對應的遊戲 id、投注內容和金額加入相應的陣列
							game_type_id.push(12);
							bet_info.push('even');
							bet_balance.push(even);
						}

						// 檢查 odd 變數
						if (odd > 0) {
							// 如果 odd 大於0，將對應的遊戲 id、投注內容和金額加入相應的陣列
							game_type_id.push(12);
							bet_info.push('odd');
							bet_balance.push(odd);
						}

						// 迭代 specifyDice 物件
						for (let dice in specifyDice) {
							if (specifyDice[dice] > 0) {
								// 如果投注金額大於0，將對應的遊戲 id、投注內容和金額加入相應的陣列
								game_type_id.push(13);
								bet_info.push(parseInt(dice));
								bet_balance.push(specifyDice[dice]);
							}
						}
				 }
				 return { 
					 game_type_id :JSON.stringify(game_type_id), bet_info:JSON.stringify(bet_info) , bet_balance:JSON.stringify(bet_balance) 
				 };

			 },	
		async addOrder(bet){
				if(!this.BetTotal) return //沒有下注金額 
				const fullApiUrl = `${this.store.api}/addOrder`;
				const requestOptions = {
					method: "POST",
					headers: {
						"Content-Type": "application/json"
					},
					body: JSON.stringify({
						...this.generateBet(bet)
					})
				};
				const response = await fetch(fullApiUrl, requestOptions);
				if (!response.ok) throw new Error(`Network response was not ok: ${response.statusText}`);
				return await response.json();
		},
		async handBet(type, dice) {
			this.BetTotal = this.BetTotal + this.BetAmount;
			
			//這後面講
			if (dice) {
				const index = this.playSicbo[type].findIndex(e => e.id == dice);
				this.playSicbo[type][index].moneyBet += this.BetAmount;
			} else {
				this.playSicbo[type].moneyBet += this.BetAmount;
			}
			
			
			
			//打 api
			try {
				let _data = await this.addOrder([{
					type,
					dice,
					BetAmount : this.BetAmount
				}]);
				this.store.setTotalAmount(_data.info.balance);
			}catch(err){
				console.log(err,"err")
			}
			
			
		}
		
	},
  components:{
    Header,
		BetControl,
		Bet
  }
}
</script>
  

