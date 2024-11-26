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
         spacing: { 
            'spacing-none' :'0',
            'xs': '15px',
            's': '20px',
            'sm': '30px', 
            'm': '42px',
            'ml':'49px',
            'lg':'60px',
            'xl':'75px',
            '1xl':'88px',
            '2xl': '96px',
            '3xl':'107px',
            '4xl':'120px',
            '5xl':'132px',
            '6xl':'148px',
            '7xl':'152px',
            '8xl':'162px',
         },

        /* Tilføj fonte herunder - husk også at tilføje webfonte i head-sektionen i MainLayout  */
         fontFamily: {
            onest: ['Onest-Black', 'sans-serif'], // Standard sans-serif skrifttype
            albert: ['Albert Sans', 'sans-serif'], // Til specifikke elementer
            londrina: ['Londrina Solid', 'black'], // Til cards
         },

        /* Tilføj dit typografiske hierarki herunder */
        fontSize: {
            'xs': ['0.8125rem', { lineHeight: '1rem' }], // 13px
            'sm': ['0.9375rem', { lineHeight: '1.25rem' }], // 15px
            'base': ['1.125rem', { lineHeight: '1.5rem' }], // 18px
            'lg': ['1.25rem', { lineHeight: '1.75rem' }], // 20px
            'xl': ['1.5rem', { lineHeight: '2rem' }], // 24px
            '2xl': ['2rem', { lineHeight: '2.5rem' }], // 32px
            '3xl': ['2.25rem', { lineHeight: '2.75rem' }], // 36px
            '4xl': ['2.5rem', { lineHeight: '3rem' }], // 40px
            '5xl': ['2.75rem', { lineHeight: '3.25rem' }], // 44px
            '6xl': ['2.8125rem', { lineHeight: '3.375rem' }], // 45px
            '7xl': ['3.25rem', { lineHeight: '4rem' }], // 52px
            '8xl': ['4rem', { lineHeight: '5rem' }], // 64px
            '9xl': ['5.625rem', { lineHeight: '6.75rem' }], // 90px
          },

        /* Tilføj dit fontvægt-hierarki nedenfor */
           fontWeight: {
             regular: '400',
            
           },

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