<template>
  <v-card >
  
    <div id="app">
      
      <quiz @quiz-completed="handleQuizCompleted" :key="quizKey" />
      <custom-modal
        v-show="showModal"
        header="Congratulations!"
        subheader="You've completed your Quiz!"
        :score="score"
        @reload="updateQuiz"
        @close="showModal = false"
        
      
      />
   
    </div>
  </v-card>
  </template>
  
  <script>
  import CustomModal from "../components/CustomModal.vue";
  import Quiz from "../components/Quiz.vue";
  
  export default {
    components: { Quiz, CustomModal },
    name: "App",
    data() {
      return {
        quizKey: 0,
        showModal: false,
        score: {
          allQuestions: 0,
          answeredQuestions: 0,
          correctlyAnsweredQuestions: 0,
        },
      };
    },
    methods: {
      handleQuizCompleted(score) {
        this.score = score;
        this.showModal = true;
      },
      updateQuiz() {
        this.showModal = false;
        this.quizKey++;
      },
    },
  };
  </script>
  
  <style>
  * {
    box-sizing: border-box;
  }
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #f5f2f1;
    line-height: 1.6;
  }
  </style>
  