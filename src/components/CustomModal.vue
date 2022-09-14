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
  
  <style scoped>
  .modal-mask {
    position: fixed;
    z-index: 9998;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(78, 253, 244, 0.527);
    display: table;
    transition: opacity 0.3s ease;
  }
  
  .modal-wrapper {
    display: table-cell;
    vertical-align: middle;
  }
  
  .modal-container {
    width: 90vw;
    max-width: 650px;
    margin: 0px auto;
    padding: 20px 30px;
    background-color: rgb(255, 73, 1);
    border-radius: 6px;
    box-shadow: 0 2px 8px rgba(155, 59, 55, 0.33);
    transition: all 0.3s ease;
  }
  
  .modal-header {
    text-align: center;
  }
  
  .modal-header h2 {
    color: rgb(228, 137, 85);
  }
  
  .modal-header h3 {
    color: rgb(255, 44, 7);
  }
  
  .modal-body {
    display: flex;
    flex-direction: column;
    margin: 20px 0;
    line-height: 3rem;
  }
  
  .modal-body > * {
    margin: 1rem 0;
    padding: 0.25rem 0.5rem;
  }
  
  .modal-footer {
    display: flex;
    justify-content: space-between;
  }
  
  /*
   Modal Transition
   */
  
  .modal-enter {
    opacity: 0;
  }
  
  .modal-leave-active {
    opacity: 0;
  }
  
  .modal-enter .modal-container,
  .modal-leave-active .modal-container {
    -webkit-transform: scale(1.1);
    transform: scale(1.1);
  }
  
  .button-footer {
    padding: 1rem 2rem;
    background: linear-gradient(
      210deg,
      rgba(216, 11, 11, 0.8),
      rgba(151, 28, 28, 0.6)
    );
    border-radius: 7px;
    border: none;
  }
  
  .anchor-footer {
    color: rgb(252, 8, 191);
    text-decoration: none;
    cursor: default;
  }
  
  .button-footer:active,
  .button-footer:focus {
    outline: none;
  }
  
  .button-footer:hover {
    transform: scale(1.02);
  }
  
  .highlight {
    border-radius: 4px;
    background-color: rgba(209, 163, 35, 0.3);
    padding: 0.25rem 0.5rem;
  }
  
  #score {
    background-color: rgb(75, 3, 3);
    border-radius: 5px;
    box-shadow: 2px 3px 9px rgb(3, 2, 43);
  }
  
  #chooseCategory {
    text-align: center;
  }
  </style>