<template>
    <transition name="modal">
      <div class="modal-mask">
        <div class="modal-wrapper">
          <div class="modal-container">
            <div class="modal-header">
              <h2>{{ header }}</h2>
              <h3>{{ subheader }}</h3>
            </div>
    
            <div class="modal-body">
              <div id="score">
                You answered
                <span class="highlight">
                  {{
                    Math.floor(
                      (score.correctlyAnsweredQuestions / score.allQuestions) *
                        100
                    )
                  }}
                  % correctly!
                </span>
                Answered
                <span class="highlight">
                  {{ score.correctlyAnsweredQuestions }} out of
                  {{ score.allQuestions }}
                </span>
                questions.
              </div>
            </div>
    
            <div class="modal-footer">
              <button
                id="play-again"
                class="button-footer"
                @click="$emit('reload')"
              >
                Play Again
              </button>
              <button
                id="close-button"
                class="button-footer"
                @click="$emit('close')"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </transition>
   </template>
    
   <script>
   export default {
    props: {
      header: String,
      subheader: String,
      score: Object,
    },
   };
   </script>