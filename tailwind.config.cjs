/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{html,js,svelte,ts}"],
	theme: {
		extend: {
			colors: {
				amber: {
					500: "#feb21e"
				},
				primary: {
					400: "#48232e",
					500: "#301925",
					900: "#1C161E"
				}
			},
			screens: {
				xs: "410px"
			}
		}
	},
	plugins: []
};
