<template>
    <div
    class="w-full sticky z-[999] top-0 h-[40px] md:h-20 bg-zinc-800 flex flex-col md:flex-row justify-start md:justify-between items-center px-0 md:px-5 md:px-10"
  >
    <div
      class="flex justify-between items-center gap-1 text-base h-[40px] md:text-lg w-full px-3 md:px-0 md:max-w-[950px] mx-auto"
    >
      <div class="flex items-center gap-4 relative">
				<RouterLink to="/" class="text-[#fff]">
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6 md:size-8">
						<path d="M11.47 3.841a.75.75 0 0 1 1.06 0l8.69 8.69a.75.75 0 1 0 1.06-1.061l-8.689-8.69a2.25 2.25 0 0 0-3.182 0l-8.69 8.69a.75.75 0 1 0 1.061 1.06l8.69-8.689Z" />
						<path d="m12 5.432 8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 0 1-.75-.75v-4.5a.75.75 0 0 0-.75-.75h-3a.75.75 0 0 0-.75.75V21a.75.75 0 0 1-.75.75H5.625a1.875 1.875 0 0 1-1.875-1.875v-6.198a2.29 2.29 0 0 0 .091-.086L12 5.432Z" />
					</svg>
				</RouterLink>
        <div
					v-if="$route.name != 'home'"
          class=" text-white text-base md:text-[25px] font-bold flex justify-center items-center bg-black w-[32px] h-[32px] md:w-12 md:h-12 rounded-full border-[2px] md:border-[5px] border-[#F422B9] "
        >
         <span>{{ store.countdown || 0 }}</span>
        </div>
      </div>
      <div
        class="rounded-full bg-black px-2.5 md:px-4 py-0.5 md:py-1 flex items-center justify-between gap-2"
      >
        <p class="text-white font-bold text-base md:text-2xl">
          <span class="mr-1 md:mr-2.5">$</span>
          <span>{{ store.totalAmountFormat }}</span>
        </p>
        <button  class="flex justify-center items-center w-5 h-5">
          <svg
            width="19"
            height="17"
            viewBox="0 0 19 17"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M16.653 9C16.653 10.1867 16.2565 11.3467 15.5136 12.3334C14.7707 13.3201 13.7149 14.0892 12.4796 14.5433C11.2442 14.9974 9.8849 15.1162 8.57348 14.8847C7.26206 14.6532 6.05744 14.0818 5.11196 13.2426C4.16648 12.4035 3.5226 11.3344 3.26174 10.1705C3.00088 9.00666 3.13477 7.80026 3.64646 6.7039C4.15815 5.60754 5.02467 4.67047 6.13643 4.01118C7.2482 3.35189 8.55529 3 9.8924 3C11.7854 3 13.5957 3.66667 14.9553 4.82667L16.653 6.33333M16.653 6.33333L16.653 3M16.653 6.33333H12.8971"
              stroke="white"
              stroke-opacity="0.4"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </button>
      </div>
    </div>
  </div>
</template>
<script>
	  import { useMainStore } from '../stores/index.js'
	  import { moneyFormat} from '../assets/js/tool.js';
    export default{
				setup() {
					return {
						store : useMainStore()
					}
				},
        data(){
            return {
              countdown : 0,
							totalAmount: 0
            }
        },
			  created(){
					this.updateStatus()
				},
				computed: {
					totalAmountFormat(){
						return moneyFormat(this.totalAmount);
					}
				},
			  methods:{
					async updateStatus() {
							const fullApiUrl = `${this.store.api}/checkUserStatus`;
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
									throw new Error(
										`Network response was not ok: ${response.statusText}`
									);
								}
								const data = await response.json();
								if (data.status != 1) throw new Error(`data.status != 0`);
								this.totalAmount = data.info.balance
								this.store.setTotalAmount(data.info.balance);
							} catch (err) {
								console.error("发生错误:", err);
							}
					}
			  }
    }
</script>