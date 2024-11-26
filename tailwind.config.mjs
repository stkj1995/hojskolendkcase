/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],

    /* Vil du overskrive eller extende tailwinds indstillinger?  */

	theme: {

        /* Tilføj din egen farvepalette nedenfor */
         colors: {
            transparent: 'transparent',
            current: 'currentColor',
            'orange': {
                50: "#FFF1E5", //beige
                100: "#FFE2CC",
                200: "#FFC599",
                300: "#FFA866",
                400: "#FF8B33",
                500: "#FF6E00", //orange
                600: "#CC5800",
                700: "#994200",
                800: "#662C00",
                900: "#331600",
            },
            'blue': {
                50: "#F2F5F8",
                100: "#E5EBF0", //lightblue
                200: "#C8D4DF",
                300: "#AEC0D0",
                400: "#91A9BF",
                500: "#7794B0", //blue
                600: "#567694",
                700: "#425A71",
                800: "#2B3B4A",
                900: "#161F27",
                },
            'white': '#fff', //white
            'black': '#000', //black
         },

         /* Tilføj din egen spacing nedenfor */
        // spacing: {
        //     'm': '40px',
        // },

        /* Tilføj fonte herunder - husk også at tilføje webfonte i head-sektionen i MainLayout  */
        // fontFamily: {
        //     sans: ['Prompt', 'sans-serif'],
        //     'display': ['Courier', 'monospace'], /* eksempel på ekstra font */
        // },

        /* Tilføj dit typografiske hierarki herunder */
        // fontSize: {
        //     base: ['1rem', { lineHeight: '1.5rem' }],
        //     large: ['2.5rem', { lineHeight: '3.75rem' }],
        //   },

        /* Tilføj dit fontvægt-hierarki nedenfor */
        //   fontWeight: {
        //     regular: '400',
        //   },

        /* Borders - borderstørrelser herunder */
        // borderWidth: {
        //     DEFAULT: '1px',
        //     0: '0px',
        //     2: '2px',
        // },

        /* Border radius størrelser herunder */
        // borderRadius: {
        //     DEFAULT: '1.25rem',
        //     none: '0px',
        // },

        /* Box shadows herunder */
        // boxShadow: {
        //     drop25: '4px 4px 4px 0 rgb(0 0 0 / 0.25)', /* x y blur spread farve / opacity */  
        // },

		extend: {
        },
	},
	plugins: [
        require('@tailwindcss/typography'),
        require('@tailwindcss/forms'),
        require('@tailwindcss/aspect-ratio'),
        require('@tailwindcss/container-queries'),
    ],
}