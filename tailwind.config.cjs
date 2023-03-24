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
			},
			boxShadow: {
				shine: "0 0 10px 0 rgb(0 0 0 / 0.5)"
			},
			backgroundImage: {
				"gradient-radial": "radial-gradient(var(--tw-gradient-stops))"
			}
		}
	},
	plugins: []
};
