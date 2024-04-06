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


const cbe = Vue.createApp({
	data(){
      return {
        title: "e-exam",
        question_number:1,
        question_btn:[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40],
      }
    },
    methods:{
      greeting: function () {
        return "Assalamu Wa alaikum";
      },
      nextQuestion(index){
      	this.question_number = Number(index)+1;
      }

    }

})
cbe.mount("#app")