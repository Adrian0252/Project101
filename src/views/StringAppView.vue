<template>
     <v-card width="1000" class="ma-20 pa-100" elevation="200 ">
<v-container fluid>
<v-card color="#008080">
     <v-container>
  <v-card-title> String Manipulator </v-card-title>

   <v-text-field label="Enter a String" v-model="text"></v-text-field>

   <v-card-actions  >
   <v-btn @click="doResult" >
        Results
   </v-btn>
   </v-card-actions>
     
Vowels: {{ vowels }} <br>
                         Numbers: {{ numbers }} <br>
                         Consonants: {{ consonants }} <br>
                         Converted: {{ converted }} <br>
     </v-container>

 </v-card>  
</v-container>
 
</v-card>
</template>

<script setup>
import { ref } from 'vue'

const text = ref()
const vowels = ref(0)
const numbers = ref(0)
const consonants = ref(0)
const converted = ref()

function doResult() {
     vowels.value = text.value.match(/[aeiou]/gi).length; // match to AEIOU
     numbers.value = text.value.match(/\d/g)?.length || 0; //match to digits otherwise 0
     consonants.value = text.value.match(/[bcdfghjklmnpqrstvwxyz]/gi).length; //match to consonant
     converted.value = text.value.replace(/[aeiou]/gi, '*');
     return vowels.value, numbers.value, consonants.value, converted.value
}


</script>
