<template>
    <v-card width="1000" class="ma-20 pa-100" elevation="200 ">
    <v-card
      class="mx-auto"
      max-width="344"
    >
    <v-img
    alignment="justify-center" 
    lazy-src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/Calculator_icon.svg/2048px-Calculator_icon.svg.png"
    max-height="350"
    max-width="250"
    src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/Calculator_icon.svg/2048px-Calculator_icon.svg.png"
  ></v-img>
  
      <v-card-title>
          Calculator
      </v-card-title>
      
      <v-card-actions>
        <v-btn
          color="orange lighten-2"
          text
        >
          Description:
        </v-btn>
  
        <v-spacer></v-spacer>
  
        <v-btn
          icon
          @click="show = !show"
        >
          <v-icon>{{ show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
        </v-btn>
      </v-card-actions>
  
      <v-expand-transition>
        <div v-show="show">
          <v-divider></v-divider>
  
          <v-card-text>
            A Simple Calculator is a device that performs arithmetic operations on numbers. Basic calculators can do only 
            addition, subtraction, multiplication and division mathematical calculations.
          </v-card-text>
    
        </div>
      </v-expand-transition>
    </v-card>
    <v-card
      class="mx-auto"
      max-width="344"
    >
    <v-img
    alignment="justify-center" 
    lazy-src="https://us.123rf.com/450wm/derin30/derin302004/derin30200400070/144870671-vowel-balloons-vector-illustration-education-concept.jpg?ver=6"
    max-height="350"
    max-width="250"
    src="https://us.123rf.com/450wm/derin30/derin302004/derin30200400070/144870671-vowel-balloons-vector-illustration-education-concept.jpg?ver=6"
  ></v-img>
  
      <v-card-title>
          String Manipulator
      </v-card-title>
      
      <v-card-actions>
        <v-btn
          color="orange lighten-2"
          text
        >
          Description:
        </v-btn>
  
        <v-spacer></v-spacer>
  
        <v-btn
          icon
          @click="show = !show"
        >
          <v-icon>{{ show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
        </v-btn>
      </v-card-actions>
  
      <v-expand-transition>
        <div v-show="show">
          <v-divider></v-divider>
  
          <v-card-text>
            String manipulation basically refers to the process of handling and analyzing strings. 
            It involves various operations concerned with modification and parsing of strings to use and change its data.
          </v-card-text>
    
        </div>
      </v-expand-transition>
    </v-card>
     <v-card
      class="mx-auto"
      max-width="344"
    >
    <v-img
    alignment="justify-center" 
    lazy-src="https://www.kids-world-travel-guide.com/images/geography_ball_300.jpg"
    max-height="350"
    max-width="250"
    src="https://www.kids-world-travel-guide.com/images/geography_ball_300.jpg"
  ></v-img>
  
      <v-card-title>
          Quiz App (Geography)
      </v-card-title>
      
      <v-card-actions>
        <v-btn
          color="orange lighten-2"
          text
        >
          Description:
        </v-btn>
  
        <v-spacer></v-spacer>
  
        <v-btn
          icon
          @click="show = !show"
        >
          <v-icon>{{ show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
        </v-btn>
      </v-card-actions>
  
      <v-expand-transition>
        <div v-show="show">
          <v-divider></v-divider>
  
          <v-card-text>
            Geography is the study of places and the relationships between people and their environments. 
            Geographers explore both the physical properties of Earth's surface and the human societies spread across it.
          </v-card-text>
    
        </div>
      </v-expand-transition>
    </v-card>
</v-card>
  </template>
  
  <script>
      export default {
        data: () => ({
          show: false,
        }),
      }
    </script>