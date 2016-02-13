<template>
  <div class="create-input-container">
    <input type="text" class="create-input" v-model="word" @keyup.enter="submit">

    <a href="{{ url }}">{{ url }}</a>
  </div>
</template>

<script>
export default {
  data () {
    return {
      word: 'baloe',
      url: ''
    };
  },

  methods: {
    submit () {
      var word = this.word.trim();
      if (word) {
        var base64 = btoa(word);
        this.url = window.location.href + base64;
      }
    }
  }
};
</script>
