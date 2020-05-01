<template>
    <div class="dashboard-content-container" data-simplebar>
        <div class="dashboard-content-inner">
            <!-- Dashboard Headline -->
            <div class="dashboard-headline">
                <h3 style="font-size: 26px;">WhavPro Onboarding</h3>
                <!-- Breadcrumbs -->
                <nav id="breadcrumbs" class="dark">
                <ul>
                    <li>
                    <a href="#">Home</a>
                    </li>
                    <li>On-boarding</li>
                </ul>
                </nav>
            </div>

            <!-- Row -->
            <div class="row">
                <!-- Dashboard Box -->
                <div class="col-lg-4 offset-lg-4"> 
                    <div class="content">
                        <h2 class="text-center mb-4">
                            Please answer the questions below to be a verified WhavPro
                        </h2>
                        <div class="questionBox" >
                            <transition :duration="{ enter: 500, leave: 300 }" enter-active-class="animated zoomIn" leave-active-class="animated zoomOut" mode="out-in">

                                <!--qusetionContainer-->
                                <div class="questionContainer" v-if="questionIndex<quiz.questions.length" v-bind:key="questionIndex">

                                    <header>
                                        <!--progress-->
                                        <div class="progressContainer">
                                            <progress class="progress is-info is-small" :value="(questionIndex/quiz.questions.length)*100" max="100">{{(questionIndex/quiz.questions.length)*100}}%</progress>
                                            <p>{{(questionIndex/quiz.questions.length)*100}}% complete</p>
                                        </div>
                                        <!--/progress-->
                                    </header>

                                    <!-- questionTitle -->
                                    <h2 class="titleContainer title">{{ quiz.questions[questionIndex].text }}</h2>

                                    <!-- quizOptions -->
                                    <div class="optionContainer">
                                        <div class="option" v-for="(response, index) in quiz.questions[questionIndex].responses" @click="selectOption(index)" :class="{ 'is-selected': userResponses[questionIndex] == index}" :key="index">
                                            {{ index | charIndex }}. {{ response.text }}
                                        </div>
                                    </div>

                                    <!--quizFooter: navigation and progress-->
                                    <footer class="questionFooter">

                                        <!--pagination-->
                                        <nav class="pagination" role="navigation" aria-label="pagination">

                                            <!-- back button -->
                                            <a class="btn btn-primary btn-md button text-white" v-on:click="prev();" :disabled="questionIndex < 1">
                                        Back
                                    </a>

                                            <!-- next button -->
                                            <a class="btn btn-primary btn-md button text-white" :class="(userResponses[questionIndex]==null)?'':'is-active'" v-on:click="next();" :disabled="questionIndex>=quiz.questions.length">
                                        {{ (userResponses[questionIndex]==null)?'Skip':'Next' }}
                                    </a>

                                        </nav>
                                        <!--/pagination-->

                                    </footer>
                                    <!--/quizFooter-->

                                </div>
                                <!--/questionContainer-->

                                <!--quizCompletedResult-->
                                <div v-if="questionIndex >= quiz.questions.length" v-bind:key="questionIndex" class="quizCompleted text-center">

                                    <!-- quizCompletedIcon: Achievement Icon -->
                                    <span class="icon">
                                        <i :class="(score() >= 3) ? 'fa fa-check-circle is-active' : 'fa fa-times-circle'"></i>
                                    </span>

                                    <!--resultTitleBlock-->
                                    <h2 class="title">
                                        You did {{ (score()>=3 ? 'an amazing' : (score() < 3 ? 'a poor':'a good')) }} job!
                                    </h2>
                                    <p class="subtitle">
                                        Total score: {{ score() }} / {{ quiz.questions.length }}
                                    </p>
                                    <br>
                                    <a v-if="score()<3" class="btn btn-primary btn-md button text-white" @click="restart()">Restart <i class="fa fa-refresh"></i></a>
                                    <a v-if="score()>=3" class="btn btn-primary btn-md button text-white" @click="verify()">Proceed <i class="fa fa-refresh"></i></a>
                                    <!--/resultTitleBlock-->

                                </div>
                                <!--/quizCompetedResult-->

                            </transition>
                        </div>
                    </div>
                </div>

            </div>
            <!-- Row / End -->

            <!-- Footer -->
            <div class="dashboard-footer-spacer"></div>
            <Footer></Footer>
            <!-- Footer / End -->
        </div>
    </div>
    
</template>

<script>

import Vue from 'vue'
import $ from 'jquery';
import jQuery from '../../mixins/jqueryHelper';
import Footer from '../../components/Includes/User/Footer.vue'
import GeneralTags from "./../../mixins/gtm.js";

    var quiz = {
      user: "WhavPro",
      questions: [
         {
            text: "In what order would you clean these surfaces in the bathroom?",
            responses: [
               { text: "clean the floor, wash the bathtub, wipe the walls" },
               { text: "wash the bathtub, wipe down the walls,  clean the floor", correct: true }
            ]
         },
         {
            text: "What would you use to clean a floor stained with oil or grease?",
            responses: [
               { text: "Degreaser", correct: true },
               { text: "Water" },
               { text: "Bleach" }
            ]
         },
         {
            text: "What would you do if a client cancels his request ?",
            responses: [
               { text: "Tell client to reschedule", correct: true },
               { text: "Request for transport", correct: true },
               { text: "Notify whavit admin" },
            ]
         },
         {
            text: "What are the basic materials required for home cleaning?",
            responses: [
               { text: "Mop,  bucket, detergent, washing machine, degreaser" },
               { text: "Vacuum cleaner, mop,  bucket, rake, detergent" },
               { text: "Vacuum cleaner, mop and bucket, detergent and napkin", correct: true }
            ]
         },
         {
            text: "If your client asks you to do task outside original task,  what would you do? ",
            responses: [
               { text: "Yes, I will do it ", correct: true },
               { text: "No, I won't do it", correct: true },
               { text: "I will do it and request for extra payment" }
            ]
         },
      ]
   },
   userResponseSkelaton = Array(quiz.questions.length).fill(null);

export default {
  name: "Questions",
  components : {
    Footer
  },
  data() {
      return {
        base_url: this.$store.state.base_url,
        token: localStorage.getItem("token"),
        quiz: quiz,
        questionIndex: 0,
        userResponses: userResponseSkelaton,
        isActive: false
      }
    },
    filters: {
        charIndex: function(i) {
            return String.fromCharCode(97 + i);
        }
    },
  methods: {
        restart: function(){
            this.questionIndex=0;
            this.userResponses=Array(this.quiz.questions.length).fill(null);
        },
      selectOption: function(index) {
         Vue.set(this.userResponses, this.questionIndex, index);
         //console.log(this.userResponses);
      },
      next: function() {
         if (this.questionIndex < this.quiz.questions.length)
            this.questionIndex++;
      },

      prev: function() {
         if (this.quiz.questions.length > 0) this.questionIndex--;
      },
      // Return "true" count in userResponses
      score: function() {
         var score = 0;
         for (let i = 0; i < this.userResponses.length; i++) {
            if (
               typeof this.quiz.questions[i].responses[
                  this.userResponses[i]
               ] !== "undefined" &&
               this.quiz.questions[i].responses[this.userResponses[i]].correct
            ) {
               score = score + 1;
            }
         }
         return score;

         //return this.userResponses.filter(function(val) { return val }).length;
      },
      verify: function() {
        this.user  = this.$cookies.get('user')
        let vendorId = this.user.id;

        let url =
            this.base_url +
            "vendor/verify/" +
            vendorId +
            "?token=" +
            this.token;

        const loader = this.$loading.show({
            backgroundColor: "#000000",
            zIndex: 99999
        });
        this.$http({
                url: url
            })
            .then(res => {
                this.$store.dispatch("profileUpdate", res.data.data)
                .then(() => {
                    loader.hide();
                    this.$swal.fire({
                        type: "success",
                        text: "Vendor Qualification Test Passed"
                    });
                    if(this.user.status !== true) {
                        this.$router.push("/vendor/waiting-list")
                    } else {
                        this.$router.push("/vendor/dashboard");
                    }
                })
                .catch(() => {}); 
                
            })
            .catch(err => {
                loader.hide();
                this.$swal.fire({
                    type: "error",
                    text: "Error Occured, try again"
                });
            });
      }
   },
  created() {
    jQuery($);
 
  },
  mounted() {
    GeneralTags();

    this.url = this.$store.state.base_url + "auth/register";
    const token = localStorage.getItem("token");
    const user = this.$cookies.get("user");
  }
};
</script>


<style lang="scss" scoped>
$trans_duration: 0.3s;
$primary_color: #3D5AFE;


.button {
   transition: $trans_duration;
}


.questionBox {
	
	max-width: 30rem;
	width: 50rem;
	min-height: 30rem;
	
	background: #FAFAFA;
	
	border-radius: 0.5rem;
	overflow: hidden;
	
	header{
		background:rgba(0,0,0,0.025);
		padding: 1.5rem;
		text-align: center;
		border-bottom: 1px solid rgba(0,0,0,0.1);
		
		h1{
			font-weight: bold;
			margin-bottom: 1rem !important;
		}
		 .progressContainer {
            width: 30%;
			 margin: 0 auto;
			 >progress{
				 margin:0;
				 border-radius: 5rem;
				 overflow: hidden;
				 border:none;
				 
				 color:$primary_color;
				&::-moz-progress-bar { background: $primary_color; }
				&::-webkit-progress-value { background: $primary_color; }
			 }
			 >p{
				 margin:0;
				 margin-top: 0.5rem;
			 }
         }
	}
   .titleContainer {
		 text-align: center;
		 margin: 0 auto;
		 padding: 1.5rem;

      }

   .quizForm {
    //   display: block;
    //   white-space: normal;

    //   height: 100%;
    //   width: 100%;

      .quizFormContainer {
        //  height: 100%;
        //  margin: 15px 18px;

         .field-label {
            text-align: left;
            margin-bottom: 0.5rem;
         }
      }
   }
   .quizCompleted {
      width: 100%;
      padding: 1rem;
		 text-align:center;
		 
		 > .icon{
			 color: #FF5252;
			 font-size: 5rem;
			 
			 .is-active{
				 color: #00E676;
			 }
		 }
   }
   .questionContainer {
    //   white-space: normal;

    //   height: 100%;
    //   width: 100%;

      .optionContainer {
        //  margin-top: 12px;
        //  flex-grow: 1;
         .option {
            border-radius: 290486px;
            padding: 9px 18px;
            margin: 0 18px;
            margin-bottom: 12px;
            transition: $trans_duration;
            cursor: pointer;
            background-color: rgba(0, 0, 0, 0.05);
					 color: rgba(0,0,0,0.85);
            border: transparent 2px solid;

            &.is-selected {
               border-color: rgba(#1181dd,1.25);
               background-color: white;
            }
            &:hover {
               background-color: rgba(0, 0, 0, 0.1);
            }
            &:active {
               transform: scaleX(0.9);
            }
         }
      }

      .questionFooter {
		// 		background:rgba(0,0,0,0.025);
		// 		border-top: 1px solid rgba(0,0,0,0.1);
        //  width: 100%;
        //  align-self: flex-end;

         .pagination {
            //padding: 10px 15px;
            margin: 15px 25px;
         }
      }
   }
}
.pagination{
	display: flex;
	justify-content: space-between;
}
.button{
	padding: 0.5rem 1rem;
	border: 1px solid rgba(0,0,0,0.25);
	border-radius: 5rem;
	margin: 0 0.25rem;
	
	transition:0.3s;
	
	&.is-active{
		background: $primary_color;
		color: white;
		border-color: transparent;
		
		&:hover{
			background: darken($primary_color,10%);
			
		}
	}
}
</style>