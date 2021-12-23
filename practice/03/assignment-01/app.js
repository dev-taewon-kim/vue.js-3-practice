const app = Vue.createApp({
  data() {
    return {
      tasks: [],
      enteredTaskValue: "",
      isTaskListVisible: true,
    };
  },
  methods: {
    addTask() {
      this.tasks.push(this.enteredTaskValue);
    },
    toggleTaskListVisibility() {
      this.isTaskListVisible = !this.isTaskListVisible;
    },
  },
  computed: {
    buttonCaption() {
      return this.isTaskListVisible ? "Hide List" : "Show List";
    },
  },
});

app.mount("#assignment");
