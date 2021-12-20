const app = Vue.createApp({
  data() {
    return {
      inputClass: "",
      inputBackgroundColor: "",
      paragrapthIsVisible: true,
    };
  },
  computed: {
    userClasses() {
      return {
        user1: this.inputClass === "user1",
        user2: this.inputClass === "user2",
        visible: this.paragrapthIsVisible,
        hidden: !this.paragrapthIsVisible,
      };
    },
  },
  methods: {
    toggleParagraphVisibility() {
      this.paragrapthIsVisible = !this.paragrapthIsVisible;
    },
  },
});

app.mount("#assignment");
