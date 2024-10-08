<template>
    <transition name="dropdown">
      <div v-if="amount>0" class="absolute overflow-hidden z-10">
        <img :src="imgBg" class="w-[40px] md:w-[50px] max-w-max pointer-events-none" />
        <p
          class="numberFont absolute top-[calc(50%-2px)]  md:top-[calc(50%-3px)] -translate-y-[50%] left-[50%] text-black -translate-x-[50%] text-[9px] md:text-[10px] font-[900]">
          <span>
            {{ amount }}
          </span>
        </p>
      </div>
    </transition>
  </template>
  
  <script>
  export default {
    props: {
      amount: {
        type: Number,
        default: 0
      }
    },
    data() {
      return {
        winTotalAnimation: 0,
        bets: [
          { id: 1, img: "/bet/500bet.svg" },
          { id: 2, img: "/bet/1000bet.svg" },
          { id: 3, img: "/bet/50bet.svg" },
          { id: 4, img: "/bet/100bet.svg" },
          { id: 5, img: "/bet/5000bet.svg" }
        ]
      };
    },
    methods: {
    },
    watch: {
  
    },
    computed: {
      imgBg() {
        let amount = this.amount;
        if (amount < 100) return "/bet_null/50bet.svg";
        if (amount < 500 && amount >= 100) return "/bet_null/100bet.svg";
        if (amount < 1000 && amount >= 500) return "/bet_null/500bet.svg";
        if (amount < 5000 && amount >= 1000) return "/bet_null/1000bet.svg";
        return "/bet_null/5000bet.svg";
      }
    }
  };
  </script>
  
  <style scoped>
  .dropdown-enter-active,
  .dropdown-leave-active {
    transition: all 0.2s;
  }
  
  .dropdown-enter-from,
  .dropdown-leave-to {
    transform: translateY(-20px);
  }
  
  .dropup-enter-active,
  .dropup-leave-active {
    transition: all 0.3s;
    position: absolute;
    z-index: 400;
    transition-timing-function: ease-out;
    opacity: 1;
  }
  
  .dropup-enter-from,
  .dropup-leave-to {
    transform: translateY(20px);
    opacity: 0;
    z-index: 400;
  }
  
  .numberFont {
    font-family: "Anton", sans-serif;
  }
  </style>
  
  