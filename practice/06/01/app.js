const app = Vue.createApp({
  data() {
    return {
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
});

app.component("friend-contact", {
  template: `
    <li>
      <h2>{{ friend.name }}</h2>
      <button @click="toggleDetails()">{{ isDetailsVisible ? "Hide" : "Show" }}</button>
      <ul v-if="isDetailsVisible">
        <li><strong>Phone:</strong> {{ friend.phone }}</li>
        <li><strong>Email:</strong> {{ friend.email }}</li>
      </ul>
    </li>
  `,
  data() {
    return {
      isDetailsVisible: false,
      friend: {
        id: "ktw",
        name: "Taewon Kim",
        phone: "010-1234-5678",
        email: "blablabla@gmail.com",
      },
    };
  },
  methods: {
    toggleDetails() {
      this.isDetailsVisible = !this.isDetailsVisible;
    },
  },
});

app.mount("#app");
