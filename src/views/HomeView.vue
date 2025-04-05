<template>
  <div class="min-h-screen bg-white dark:bg-gray-900">
    <!-- Main Content -->
    <!-- Hero Section -->
    <section class="py-20 px-6 md:px-12">
      <div class="max-w-4xl mx-auto text-center">
        <h1
          class="text-4xl md:text-6xl font-bold text-gray-800 dark:text-white mb-4"
        >
          Alex Johnson
        </h1>
        <h2 class="text-2xl md:text-3xl text-blue-600 dark:text-blue-400 mb-6">
          Full Stack Developer
        </h2>
        <p
          class="text-lg text-gray-700 dark:text-gray-300 mb-8 max-w-2xl mx-auto"
        >
          Building modern web applications with cutting-edge technologies.
          Specializing in both frontend and backend development.
        </p>
        <div class="flex flex-wrap gap-4 justify-center">
          <a
            href="#contact"
            class="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors"
          >
            Contact Me
          </a>
          <a
            href="#projects"
            class="px-6 py-3 bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600 text-gray-800 dark:text-white font-medium rounded-lg transition-colors"
          >
            View Projects
          </a>
        </div>
      </div>
    </section>

    <!-- About Me Section -->
    <section id="about" class="py-16 px-6 bg-gray-100 dark:bg-gray-800">
      <div
        class="max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-8"
      >
        <div class="md:w-1/3 flex justify-center">
          <div
            class="w-48 h-48 rounded-full overflow-hidden bg-gradient-to-b from-blue-400 to-blue-600 flex items-center justify-center text-white text-4xl font-bold"
          >
            AJ
          </div>
        </div>
        <div class="md:w-2/3">
          <h2 class="text-3xl font-bold text-gray-800 dark:text-white mb-4">
            About Me
          </h2>
          <p class="text-gray-700 dark:text-gray-300 mb-4">
            I'm a full stack developer with 5+ years of experience creating web
            applications. I specialize in building scalable solutions that solve
            real business problems.
          </p>
          <p class="text-gray-700 dark:text-gray-300">
            With a background in computer science and a passion for learning, I
            stay current with the latest web development technologies and best
            practices.
          </p>
        </div>
      </div>
    </section>

    <!-- Skills Section -->
    <section id="skills" class="py-16 px-6">
      <div class="max-w-4xl mx-auto">
        <h2
          class="text-3xl font-bold text-center text-gray-800 dark:text-white mb-10"
        >
          My Skills
        </h2>

        <div class="grid grid-cols-2 md:grid-cols-4 gap-6">
          <!-- Frontend -->
          <div class="bg-white dark:bg-gray-700 p-4 rounded-lg shadow-md">
            <h3
              class="text-lg font-semibold text-gray-800 dark:text-white mb-3"
            >
              Frontend
            </h3>
            <ul class="space-y-1 text-sm">
              <li class="text-gray-600 dark:text-gray-300">React / Vue</li>
              <li class="text-gray-600 dark:text-gray-300">
                JavaScript / TypeScript
              </li>
              <li class="text-gray-600 dark:text-gray-300">Tailwind CSS</li>
            </ul>
          </div>

          <!-- Backend -->
          <div class="bg-white dark:bg-gray-700 p-4 rounded-lg shadow-md">
            <h3
              class="text-lg font-semibold text-gray-800 dark:text-white mb-3"
            >
              Backend
            </h3>
            <ul class="space-y-1 text-sm">
              <li class="text-gray-600 dark:text-gray-300">
                Node.js / Express
              </li>
              <li class="text-gray-600 dark:text-gray-300">Python / Django</li>
              <li class="text-gray-600 dark:text-gray-300">GraphQL / REST</li>
            </ul>
          </div>

          <!-- Database -->
          <div class="bg-white dark:bg-gray-700 p-4 rounded-lg shadow-md">
            <h3
              class="text-lg font-semibold text-gray-800 dark:text-white mb-3"
            >
              Database
            </h3>
            <ul class="space-y-1 text-sm">
              <li class="text-gray-600 dark:text-gray-300">MongoDB</li>
              <li class="text-gray-600 dark:text-gray-300">PostgreSQL</li>
              <li class="text-gray-600 dark:text-gray-300">Redis</li>
            </ul>
          </div>

          <!-- DevOps -->
          <div class="bg-white dark:bg-gray-700 p-4 rounded-lg shadow-md">
            <h3
              class="text-lg font-semibold text-gray-800 dark:text-white mb-3"
            >
              DevOps
            </h3>
            <ul class="space-y-1 text-sm">
              <li class="text-gray-600 dark:text-gray-300">Docker</li>
              <li class="text-gray-600 dark:text-gray-300">AWS / Azure</li>
              <li class="text-gray-600 dark:text-gray-300">CI/CD</li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- Projects Section -->
    <section id="projects" class="py-16 px-6 bg-gray-100 dark:bg-gray-800">
      <div class="max-w-4xl mx-auto">
        <h2
          class="text-3xl font-bold text-center text-gray-800 dark:text-white mb-10"
        >
          Projects
        </h2>

        <div class="grid md:grid-cols-2 gap-8">
          <!-- Project 1 -->
          <div
            class="bg-white dark:bg-gray-700 rounded-xl overflow-hidden shadow-lg"
          >
            <div
              class="h-40 bg-gradient-to-r from-blue-500 to-indigo-600 flex items-center justify-center"
            >
              <span class="text-white font-bold text-xl"
                >E-Commerce Platform</span
              >
            </div>
            <div class="p-6">
              <p class="text-gray-600 dark:text-gray-300 mb-4">
                Full-stack e-commerce solution with payment processing and
                inventory management.
              </p>
              <div class="flex flex-wrap gap-2 mb-4">
                <span
                  class="px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-xs rounded-full"
                  >React</span
                >
                <span
                  class="px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-xs rounded-full"
                  >Node.js</span
                >
                <span
                  class="px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-xs rounded-full"
                  >MongoDB</span
                >
              </div>
              <a
                href="#"
                class="text-blue-600 dark:text-blue-400 text-sm font-medium hover:underline"
                >View Project →</a
              >
            </div>
          </div>

          <!-- Project 2 -->
          <div
            class="bg-white dark:bg-gray-700 rounded-xl overflow-hidden shadow-lg"
          >
            <div
              class="h-40 bg-gradient-to-r from-green-500 to-teal-600 flex items-center justify-center"
            >
              <span class="text-white font-bold text-xl"
                >Task Management App</span
              >
            </div>
            <div class="p-6">
              <p class="text-gray-600 dark:text-gray-300 mb-4">
                Collaborative task management with real-time updates and team
                permissions.
              </p>
              <div class="flex flex-wrap gap-2 mb-4">
                <span
                  class="px-2 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 text-xs rounded-full"
                  >Vue</span
                >
                <span
                  class="px-2 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 text-xs rounded-full"
                  >Express</span
                >
                <span
                  class="px-2 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 text-xs rounded-full"
                  >Socket.io</span
                >
              </div>
              <a
                href="#"
                class="text-green-600 dark:text-green-400 text-sm font-medium hover:underline"
                >View Project →</a
              >
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Contact Section -->
    <section id="contact" class="py-16 px-6">
      <div class="max-w-4xl mx-auto">
        <h2
          class="text-3xl font-bold text-center text-gray-800 dark:text-white mb-10"
        >
          Contact Me
        </h2>

        <div class="bg-white dark:bg-gray-700 p-6 rounded-xl shadow-lg">
          <form class="space-y-4">
            <div class="grid md:grid-cols-2 gap-4">
              <div>
                <input
                  type="text"
                  placeholder="Name"
                  class="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <input
                  type="email"
                  placeholder="Email"
                  class="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>
            <div>
              <input
                type="text"
                placeholder="Subject"
                class="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <textarea
                placeholder="Message"
                rows="4"
                class="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              ></textarea>
            </div>
            <button
              type="submit"
              class="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <footer class="py-6 bg-gray-900 text-gray-400 text-center text-sm">
      <p>&copy; 2023 Alex Johnson. All rights reserved.</p>
    </footer>
  </div>
</template>
