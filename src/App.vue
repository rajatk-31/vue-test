<script setup lang="ts">
// App component
</script>

<template>
  <header>
    <nav aria-label="Main navigation">
      <router-link to="/">Home</router-link> <span class="nav-divider">|</span>
      <router-link to="/about-me">About Me</router-link>
    </nav>
  </header>

  <main>
    <router-view />
  </main>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #e0e0e0;
}

nav {
  padding: 30px;
  background-color: #1e1e1e;
  margin-bottom: 20px;
}

nav a {
  font-weight: bold;
  color: #82b1ff;
  margin: 0 10px;
  text-decoration: none;
  padding: 6px 12px;
  border-radius: 4px;
  transition: background-color 0.3s;
}

nav a:hover,
nav a:focus {
  background-color: #333333;
  text-decoration: underline;
  outline: none;
}

nav a.router-link-exact-active {
  color: #ffffff;
  background-color: #2e7d32;
}

.nav-divider {
  color: #666666;
  margin: 0 5px;
}

main {
  padding: 20px;
}

@media (prefers-color-scheme: light) {
  #app {
    color: #212121;
  }

  nav {
    background-color: #f0f0f0;
  }

  nav a {
    color: #1565c0;
  }

  nav a:hover,
  nav a:focus {
    background-color: #e0e0e0;
  }

  nav a.router-link-exact-active {
    color: #ffffff;
    background-color: #2e7d32;
  }

  .nav-divider {
    color: #9e9e9e;
  }
}
</style>
