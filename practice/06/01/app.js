const app = Vue.createApp({
  data() {
    return {
      isDetailsVisible: false,
      friends: [
        {
          id: "ktw",
          name: "Taewon Kim",
          phone: "010-1234-5678",
          email: "blablabla@gmail.com",
        },
        {
          id: "jennie",
          name: "Jennie Kim",
          phone: "010-1234-5678",
          email: "blackpink@gmail.com",
        },
      ],
    };
  },
  methods: {
    toggleDetails() {
      this.isDetailsVisible = !this.isDetailsVisible;
    },
  },
});

app.mount("#app");
