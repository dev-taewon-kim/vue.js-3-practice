const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: "",
      confirmedName: "",
    };
  },
  methods: {
    add(n) {
      this.counter = this.counter + n;
    },
    reduce(n) {
      this.counter = this.counter - n;
    },
    submitForm(e) {
      alert("Submitted!");
    },
    confirmName() {
      this.confirmedName = this.name;
    },
    resetInput() {
      this.name = "";
    },
  },
  computed: {
    fullName() {
      return this.name ? this.name + " " + "Kim" : "";
    },
  },
});

app.mount("#events");
