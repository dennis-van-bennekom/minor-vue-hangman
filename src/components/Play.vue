<template>
  <div class="play-container">
    <div>{{ result }}</div>

    <input type="text" class="guess" v-model="guess" @keyup.enter="guessLetter">

    <div>{{ turn }}</div>

    <div>
      <span v-for="letter in sortedWrongGuesses">{{ letter }}</span>
    </div>
  </div>
</template>

<script>
import uniq from 'lodash.uniq';

export default {
  data () {
    var word = atob(this.$route.params.word).toLowerCase();
    var correct = uniq(word.split('')).sort();

    return {
      word: word,
      correct: correct,
      correctGuesses: [],
      wrongGuesses: [],
      guess: '',
      turn: 0
    };
  },

  methods: {
    guessLetter () {
      var guess = this.guess.trim().toLowerCase();

      if (guess) {
        // Guess is correct
        if (this.correct.indexOf(guess) > -1) {
          // Guess is not guessed before
          if (this.correctGuesses.indexOf(guess) <= -1) {
            this.correctGuesses.push(guess);
            console.log('Goed: ' + guess);

            // You win
            if (this.correct.length === this.correctGuesses.length) {
              console.log('gewonnen!');
            }
          }
          // Guess is wrong
        } else if (this.wrongGuesses.indexOf(guess) <= -1) {
          this.wrongGuesses.push(guess);
          this.turn += 1;
        }
      }

      this.guess = '';
    }
  },

  computed: {
    sortedWrongGuesses () {
      return this.wrongGuesses.sort();
    },

    result () {
      var wordArray = this.word.split('');
      return wordArray.map(character => {
        return this.correctGuesses.indexOf(character) > -1 ? character : '_';
      }).join('');
    }
  }
};
</script>
