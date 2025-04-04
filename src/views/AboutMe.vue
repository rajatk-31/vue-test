<script setup lang="ts">
import UserProfile from "../components/UserProfile.vue";
</script>

<template>
  <div class="about-me">
    <h1>About Me</h1>
    <p>This is the about me page. Welcome to my Vue application!</p>

    <UserProfile />
  </div>
</template>

<style scoped>
.about-me {
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem;
  text-align: center;
  background-color: #1e1e1e;
  border-radius: 8px;
}

h1 {
  color: #ffffff;
  margin-bottom: 1rem;
}

p {
  font-size: 1.2rem;
  line-height: 1.6;
  color: #e0e0e0;
}

@media (prefers-color-scheme: light) {
  .about-me {
    background-color: #f5f5f5;
  }

  h1 {
    color: #212121;
  }

  p {
    color: #424242;
  }
}
</style>
