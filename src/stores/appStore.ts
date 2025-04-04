import { defineStore } from "pinia";

export const useAppStore = defineStore("app", {
  state: () => ({
    appName: "Vue Test App",
    version: "1.0.0",
    loading: false,
    notifications: [] as string[],
    lastUpdated: new Date(),
  }),

  getters: {
    appTitle: (state) => `${state.appName} v${state.version}`,
    isLoading: (state) => state.loading,
    hasNotifications: (state) => state.notifications.length > 0,
  },

  actions: {
    setLoading(value: boolean) {
      this.loading = value;
    },

    addNotification(message: string) {
      this.notifications.push(message);
    },

    clearNotifications() {
      this.notifications = [];
    },

    updateLastUpdated() {
      this.lastUpdated = new Date();
    },
  },
});
