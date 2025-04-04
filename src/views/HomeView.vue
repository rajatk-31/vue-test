<script setup lang="ts">
import HelloWorld from "../components/HelloWorld.vue";
</script>

<template>
  <div class="logos">
    <a href="https://vite.dev" target="_blank" aria-label="Visit Vite website">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a
      href="https://vuejs.org/"
      target="_blank"
      aria-label="Visit Vue.js website"
    >
      <img src="../assets/vue.svg" class="logo vue" alt="Vue logo" />
    </a>
  </div>
  <HelloWorld msg="Vite + Vue" />
</template>

<style scoped>
.logos {
  display: flex;
  justify-content: center;
  gap: 2rem;
  margin-bottom: 2rem;
}

.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
  border-radius: 8px;
}

.logo:hover {
  filter: drop-shadow(0 0 2em #82b1ffaa);
}

.logo.vue:hover {
  filter: drop-shadow(0 0 2em #4caf50aa);
}

@media (prefers-reduced-motion: reduce) {
  .logo {
    transition: none;
  }
}
</style>
