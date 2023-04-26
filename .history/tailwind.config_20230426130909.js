/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'gradient-orange-purple': 'radial-gradient(, #f97316, #805ad5)',
        // Replace the above with the following for a radial gradient
        // 'gradient-orange-purple': 'radial-gradient(circle, #f97316, #805ad5)',
      },
    },
  },
  plugins: [],
}
