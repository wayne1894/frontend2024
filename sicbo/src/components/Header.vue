<template>
 <div></div>
</template>
<script>
	  import { moneyFormat} from '../assets/js/tool.js';
    export default{
        data(){
            return {
              countdown : 0,
							totalAmount: 0
            }
        },
				computed: {
					totalAmountFormat(){
						return moneyFormat(this.totalAmount);
					}
				},
    }
</script>