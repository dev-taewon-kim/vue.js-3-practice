const app = Vue.createApp({
  data() {
    return {
      num: 0,
      message: "",
    };
  },
  methods: {
    add(n) {
      this.num = this.num + n;
    },
  },
  computed: {
    result() {
      if (this.num < 37) {
        return "Not there yet!";
      } else if (this.num === 37) {
        return this.num;
      } else {
        return "Too much!";
      }
    },
  },
  watch: {
    result() {
      const that = this;
      console.log(`[*] Watcher: this.num = ${this.num}`);

      setTimeout(() => {
        that.num = 0;
      }, 5000);
    },
  },
});

app.mount("#assignment");
