const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: "",
      lastName: "",
    };
  },
  methods: {
    add(n) {
      this.counter = this.counter + n;
    },
    reduce(n) {
      this.counter = this.counter - n;
    },
    resetInput() {
      this.name = "";
    },
  },
  watch: {
    counter(value) {
      if (value > 50) {
        const that = this;
        setTimeout(() => {
          that.counter = 0;
        }, 1000);
      }
    },
  },
  computed: {
    getFullName() {
      if (this.name === "" || this.lastName === "") {
        return "";
      } else {
        return this.name + " " + this.lastName;
      }
    },
  },
});

app.mount("#events");
