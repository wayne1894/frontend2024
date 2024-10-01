<template>
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
            class="sicbo-btn border-[#FD4D6C] w-full md:w-[100px] h-[73px] md:h-[100px] flex flex-col items-center justify-center relative"
          >
            <div>
              <p class="text-white text-xs md:text-xl font-bold tracking-wider">
                SMALL
              </p>
              <p class="text-[#FFFFFF66] text-xs font-bold">
                4-10
              </p>
            </div>
            <p
              class="text-[#FFFFFF66] text-xs tracking-widest font-bold mt-auto"
            >
              1:1
            </p>
          </button>
          <!-- 雙 -->
          <button
            class="sicbo-btn border-[#42A978] w-full md:w-[60px] h-[73px] md:h-[100px] flex flex-col items-center justify-center relative"
          >
            <div>
              <p class="text-white text-xs font-bold tracking-wider">
                EVEN
              </p>
            </div>
            <p
              class="text-[#FFFFFF66] text-xs tracking-widest font-bold mt-auto"
            >
              1:1
            </p>
          </button>
        </div>
        <!-- 雙骰1-3 -->
        <div
          class="col-span-1 flex flex-col md:flex-row items-center gap-0.5 md:gap-1"
        >
          <button
            class="col-span-1 sicbo-btn w-full md:w-[60px] h-[48px] md:h-[100px] flex flex-col items-center justify-center relative"
          >
            <div class="flex md:flex-col items-center gap-1">
              <img src="/dice/one.svg" class="w-3 md:w-6 h-3 md:h-6"  />
              <img src="/dice/one.svg" class="w-3 md:w-6 h-3 md:h-6"  />
            </div>
            <p
              class="text-[#FFFFFF66] text-xs tracking-widest font-bold mt-auto"
            >
              1:8
            </p>
          </button>
        </div>
        <!-- 指定豹子(1-3)手機版 -->
        <div class="col-span-1 flex md:hidden flex-col items-center gap-0.5">
          <button
            class="sicbo-btn w-full h-[48px] flex flex-col items-center justify-center relative"
          >
            <div class="flex flex-col justify-center items-center gap-0.5">
              <img src="/dice/one.svg" class="w-3 h-3"  />
              <div class="flex gap-0.5">
                <img src="/dice/one.svg" class="w-3 h-3"  />
								<img src="/dice/one.svg" class="w-3 h-3"  />
              </div>
            </div>
            <p class="text-[#FFFFFF66] text-xs tracking-widest font-bold">
              1:150
            </p>
          </button>
        </div>
        <!-- 任意豹子 -->
        <button
          class="from-[#202031] to-[#010102] bg-gradient-to-b col-span-1 bg-[#333333] md:bg-rainbow rounded-sm md:rounded-md w-full md:w-[230px] h-[148px] md:h-[100px] flex flex-col items-center justify-center p-px md:p-0.5"
        >
          <div
            class="bg-gradient-to-b w-full h-full px-2 p-0.5 rounded-sm md:rounded-md flex flex-col items-center justify-center relative"
          >
            <div>
              <p class="text-white text-xs md:text-xl font-bold tracking-wider">
                Any Triple
              </p>
              <div class="flex justify-center gap-0.5">
                <div
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
              1:23
            </p>
          </div>
        </button>
        <!-- 指定豹子(1-3)手機版 -->
        <div class="col-span-1 flex md:hidden flex-col items-center gap-0.5">
          <button
            class="sicbo-btn w-full h-[48px] flex flex-col items-center justify-center relative"
          >
            <div class="flex flex-col justify-center items-center gap-0.5">
              <img src="/dice/one.svg" class="w-3 h-3" />
              <div class="flex gap-0.5">
                <img src="/dice/one.svg" class="w-3 h-3" />
                <img src="/dice/one.svg" class="w-3 h-3" />
              </div>
            </div>
            <p class="text-[#FFFFFF66] text-xs tracking-widest font-bold">
              1:150
            </p>
          </button>
        </div>
        <!-- 雙骰4-6 -->
        <div
          class="col-span-1 flex flex-col md:flex-row items-center gap-0.5 md:gap-1"
        >
          <button
            class="col-span-1 sicbo-btn w-full md:w-[60px] h-[48px] md:h-[100px] flex flex-col items-center justify-center relative"
          >
            <div class="flex md:flex-col items-center gap-1">
              <img src="/dice/two.svg" class="w-3 md:w-6 h-3 md:h-6"  />
              <img src="/dice/two.svg" class="w-3 md:w-6 h-3 md:h-6"  />
            </div>
            <p
              class="text-[#FFFFFF66] text-xs tracking-widest font-bold mt-auto"
            >
              1:8
            </p>
          </button>
        </div>
        <!-- 大&單 -->
        <div
          class="col-span-1 flex flex-col md:flex-row-reverse items-center gap-0.5 md:gap-1"
        >
          <!-- 大 -->
          <button
            class="sicbo-btn border-[#FD4D6C] md:border-[#42A978] w-full md:w-[100px] h-[73px] md:h-[100px] flex flex-col items-center justify-center relative"
          >
            <div>
              <p class="text-white text-xs md:text-xl font-bold tracking-wider">
                BIG
              </p>
              <p class="text-[#FFFFFF66] text-xs font-bold">
                11-17
              </p>
            </div>
            <p
              class="text-[#FFFFFF66] text-xs tracking-widest font-bold mt-auto"
            >
              1:1
            </p>
          </button>
          <!-- 單 -->
          <button
            class="sicbo-btn border-[#42A978] md:border-[#FD4D6C] w-full md:w-[60px] h-[73px] md:h-[100px] flex flex-col items-center justify-center relative"
          >
            <div>
              <p class="text-white text-xs font-bold tracking-wider">
                ODD
              </p>
            </div>
            <p
              class="text-[#FFFFFF66] text-xs tracking-widest font-bold mt-auto"
            >
              1:1
            </p>
          </button>
        </div>
      </div>
      <!-- 第二排(指定豹子電腦版) -->
      <div
        class="hidden md:flex items-center gap-1 my-1.5"
      >
        <button
          class="sicbo-btn border-[#FD4D6C] w-[155px] h-[50px] flex items-center justify-center relative"
        >
          <div class="flex justify-center items-center gap-1">
            <img src="/dice/three.svg" class="w-6 h-6"  />
            <img src="/dice/three.svg" class="w-6 h-6"  />
            <img src="/dice/three.svg" class="w-6 h-6"  />
          </div>
          <p class="text-[#FFFFFF66] text-xs tracking-widest font-bold ml-4">
            1:150
          </p>
        </button>
      </div>

 
    </div>
  </div>
	</div>
</div>
</template>
  
<script>
import Header from '../components/Header.vue'

export default{
  components:{
    Header,
  }
}
</script>
  

