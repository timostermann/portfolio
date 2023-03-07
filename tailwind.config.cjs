/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{html,js,svelte,ts}"],
	theme: {
		colors: {
			amber: {
				500: "#feb21e"
			}
		},
		extend: {
			colors: {
				primary: {
					400: "#48232e",
					500: "#301925",
					900: "#1C161E"
				}
			}
		}
	},
	plugins: []
};
