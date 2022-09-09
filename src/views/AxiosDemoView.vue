<template>

<v-container fluid>
   <v-card color="#008080">
 <v-container>

    <h1>Axios Demo</h1>
    <v-col cols="" sm="" align="center" justify="center">
    <v-btn class="" @click="getQuestions">Get Post</v-btn>
    </v-col>
  <v-list-item 
   v-for="question in questions"
   :key="question.id"
   >
<v-card color="#FFA07A  ">
 <v-container>

   <v-list-item-title>{{ question.question }}</v-list-item-title>
   <v-list-item>
      {{question.correct_answer}}
   </v-list-item>

    </v-container>
    </v-card>   

  </v-list-item>
    </v-container>
    </v-card>
</v-container>

</template>

<script setup>
  import { ref } from 'vue';
  import axios from 'axios'

  const questions=ref([])

  async function getQuestions () {
    axios.get('https://opentdb.com/api.php?amount=10&category=21&difficulty=hard').then( response => {
    questions.value=(response.data.results)
    })
  }
</script>