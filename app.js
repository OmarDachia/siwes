// const {createApp, ref} = Vue

// const app = createApp({
// 	setup() {
// 		const name = ref("Umar Dachia")
// 		return{
// 			name,
// 			first_number:0,
// 			second_number:0,
// 			result:0
// 		}
// 	}
// }).mount("#app")


const app1 = Vue.createApp({
	data(){
		// const name = ref("Umar Dachia")
		return{
			name: "Umar Dachia",
			first_number:0,
			second_number:0,
			result:0,
			qty:0,
			balance:10
		}

	},
	methods:{
		addition(){
			console.log("Fisrt Number: " + this.first_number + " Second Number:" + this.second_number);
			this.result = Number(this.first_number) + Number(this.second_number);

			// console.log(result);

		},
		add(num1, num2){
			console.log("Fisrt Number: " + num1 + " Second Number:" + num2);
			this.result = Number(num1) + Number(num2);
		},
		firstInput(num){
			this.first_number = num;
		},
		getBal(qty){
			this.balance-=Number(qty);
		}
	}
})
app1.mount("#app")