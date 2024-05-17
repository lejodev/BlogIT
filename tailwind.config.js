/**
 * @type {import('@types/tailwindcss/tailwind-config').TailwindConfig}
 */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',

    // "./node_modules/flowbite-react/lib/**/*.js",
    // "./pages/**/*.{ts,tsx}",
    // "./public/**/*.html",
  ],
  plugins: [
    require("flowbite/plugin")
  ],
  theme: {},
};