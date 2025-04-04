<script setup lang="ts">
import { useUserStore } from "../stores/userStore";
import { useAppStore } from "../stores/appStore";

const userStore = useUserStore();
const appStore = useAppStore();

// Access state
console.log(userStore.user.name);
console.log(appStore.appName);

// Use getters
console.log(userStore.isAuthenticated);
console.log(appStore.appTitle);

function handleLogin() {
  appStore.setLoading(true);

  // Simulate API call
  setTimeout(() => {
    userStore.login();
    appStore.addNotification("User logged in successfully");
    appStore.setLoading(false);
    appStore.updateLastUpdated();
  }, 1000);
}

function handleLogout() {
  userStore.logout();
  appStore.addNotification("User logged out");
  appStore.updateLastUpdated();
}

function clearNotifications() {
  appStore.clearNotifications();
}

function toggleDarkMode() {
  userStore.toggleDarkMode();
  appStore.updateLastUpdated();
}
</script>

<template>
  <div class="user-profile card">
    <h2>{{ appStore.appTitle }}</h2>

    <div class="user-info">
      <h3>User Profile</h3>
      <p><strong>Name:</strong> {{ userStore.fullName }}</p>
      <p><strong>Email:</strong> {{ userStore.user.email }}</p>
      <p>
        <strong>Status:</strong>
        {{ userStore.isAuthenticated ? "Logged In" : "Logged Out" }}
      </p>
      <p>
        <strong>Dark Mode:</strong>
        {{ userStore.preferences.darkMode ? "Enabled" : "Disabled" }}
      </p>
    </div>

    <div class="actions">
      <button
        @click="handleLogin"
        :disabled="userStore.isAuthenticated || appStore.loading"
      >
        {{ appStore.loading ? "Loading..." : "Login" }}
      </button>
      <button @click="handleLogout" :disabled="!userStore.isAuthenticated">
        Logout
      </button>
      <button @click="toggleDarkMode">Toggle Dark Mode</button>
    </div>

    <div v-if="appStore.hasNotifications" class="notifications">
      <h3>Notifications</h3>
      <ul>
        <li
          v-for="(notification, index) in appStore.notifications"
          :key="index"
        >
          {{ notification }}
        </li>
      </ul>
      <button @click="clearNotifications">Clear Notifications</button>
    </div>

    <p class="last-updated">
      Last updated: {{ appStore.lastUpdated.toLocaleTimeString() }}
    </p>
  </div>
</template>

<style scoped>
.user-profile {
  margin-top: 2rem;
}

.user-info {
  margin: 1.5rem 0;
  text-align: left;
  padding: 1rem;
  background-color: rgba(0, 0, 0, 0.2);
  border-radius: 8px;
}

.actions {
  display: flex;
  gap: 1rem;
  justify-content: center;
  margin: 1.5rem 0;
}

.notifications {
  margin-top: 1.5rem;
  padding: 1rem;
  background-color: rgba(0, 0, 0, 0.2);
  border-radius: 8px;
  text-align: left;
}

.notifications ul {
  list-style-type: none;
  padding-left: 0;
}

.notifications li {
  padding: 0.5rem 0;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}

.last-updated {
  margin-top: 1.5rem;
  font-size: 0.8rem;
  color: #bbbbbb;
}

@media (prefers-color-scheme: light) {
  .user-info,
  .notifications {
    background-color: rgba(0, 0, 0, 0.05);
  }

  .notifications li {
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  }

  .last-updated {
    color: #424242;
  }
}
</style>
