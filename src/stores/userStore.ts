import { defineStore } from "pinia";

export interface User {
  id: number;
  name: string;
  email: string;
  isLoggedIn: boolean;
}

export const useUserStore = defineStore("user", {
  state: () => ({
    user: {
      id: 1,
      name: "John Doe",
      email: "john@example.com",
      isLoggedIn: false,
    } as User,
    preferences: {
      darkMode: true,
      notifications: true,
    },
  }),

  getters: {
    // Get the user's full name
    fullName: (state) => state.user.name,

    // Check if user is authenticated
    isAuthenticated: (state) => state.user.isLoggedIn,

    // Get user profile data
    profile: (state) => state.user,
  },

  actions: {
    // Login the user
    login() {
      this.user.isLoggedIn = true;
    },

    // Logout the user
    logout() {
      this.user.isLoggedIn = false;
    },

    // Update user information
    updateUserInfo(userData: Partial<User>) {
      this.user = { ...this.user, ...userData };
    },

    // Toggle dark mode
    toggleDarkMode() {
      this.preferences.darkMode = !this.preferences.darkMode;
    },
  },
});
