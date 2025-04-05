<script setup lang="ts">
// App component
import logo from "./assets/logo-transparent.png";

const scrollToHome = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};
</script>

<template>
  <div class="min-h-screen bg-white dark:bg-gray-900">
    <!-- Fixed Navigation Bar -->
    <header
      class="fixed top-0 left-0 right-0 w-full z-50 bg-white dark:bg-[#91946d] !py-2 !px-8"
    >
      <nav class="flex justify-between items-center !text-white">
        <div>
          <div class="!rounded-xl cursor-pointer" @click="scrollToHome">
            <img :src="logo" alt="Logo" class="w-24" />
          </div>
        </div>
        <div>
          <div>
            <div href="#home" class="!text-white">Home</div>
          </div>
        </div>
      </nav>
    </header>

    <!-- Main Content with padding-top to account for fixed header -->
    <main class="!pt-20">
      <router-view />
    </main>
  </div>
</template>

<style></style>
