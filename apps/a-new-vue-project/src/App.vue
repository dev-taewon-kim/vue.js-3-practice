<template>
  <section>
    <h2>My Friends</h2>
    <ul>
      <friend-contact></friend-contact>
      <friend-contact></friend-contact>
    </ul>
  </section>
</template>

<script>
import FriendContact from "./components/FriendContact.vue";
export default {
  components: { FriendContact },
  data() {
    return {
      friends: [
        {
          id: "ktw",
          name: "Taewon Kim",
          phone: "010 1234 5678",
          email: "blabla@gmail.com",
        },
        {
          id: "jennie",
          name: "Jennie Kim",
          phone: "010 0000 0000",
          email: "blackpink@gmail.com",
        },
      ],
    };
  },
};
</script>
