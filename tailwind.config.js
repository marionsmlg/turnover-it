/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    extend: {
      colors: {
        "turnoverit-blue": "#009fff",
        "turnoverit-green": "#00cd87",
        "turnoverit-orange": "#ff5f00",
      },
    },
  },
  plugins: [],
};
