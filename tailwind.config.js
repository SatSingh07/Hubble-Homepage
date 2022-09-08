/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
	mode: 'jit',
	theme: {
		extend: {
			screens: {
				'2xl': '1400px',
			},
			container: {
				center: true,
				padding: '1rem',
				screens: {
					xl: "1232px",
				},
			},
			colors: {
				purple: "#8655FF",
				purple2: "#6743C2",
				darkBlue: "#0A1628",
				paleBlue: "#EAFFFF",
			},
			animation: {
				marquee: "marquee 50s linear infinite",
				marquee2: "marquee2 50s linear infinite",
			},
			keyframes: {
				marquee: {
					"0%": { transform: "translateX(0%)" },
					"100%": { transform: "translateX(-100%)" },
				},
				marquee2: {
					"0%": { transform: "translateX(100%)" },
					"100%": { transform: "translateX(0%)" },
				},
			},
			boxShadow: {
				soft: "0px 0px 40px rgba(234, 255, 255, 0.03)",
				medium: "0px 0px 25px rgba(234, 255, 255, 0.1)"
			}
		},
	},
	plugins: [],
};
