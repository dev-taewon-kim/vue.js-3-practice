const app = Vue.createApp({
  data() {
    return {
      keyDownText: "OUTPUT",
      confirmedText: "OUTPUT",
    };
  },
  methods: {
    showAlert() {
      alert("Vue.js 3 practice!");
    },
    onKeyDown(e) {
      this.keyDownText = e.target.value;
    },
    confirmText(e) {
      this.confirmedText = e.target.value;
    },
  },
});

app.mount("#assignment");
