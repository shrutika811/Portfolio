module.exports = {
    purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            colors: {
                darkBackground: {
                    50: "#edf1fc",
                    100: "#d3d4e1",
                    200: "#b6b8c9",
                    300: "#989bb2",
                    400: "#7c7f9b",
                    500: "#636582",
                    600: "#4c4f66",
                    700: "#363849",
                    800: "#21222e",
                    900: "#0a0a16",
                },
                colorYellow:
                {
                  50: '#fffadb',
                  100: '#fdefaf',
                  200: '#fae581',
                  300: '#f8da51',
                  400: '#f6cf22',
                  500: '#ddb609',
                  600: '#ac8d02',
                  700: '#7b6500',
                  800: '#4a3d00',
                  900: '#1c1400',
                },
                colorBlue:
                {
                  50: '#ebeaff',
                  100: '#c5c1f4',
                  200: '#9f9ae7',
                  300: '#7871db',
                  400: '#5149cf',
                  500: '#3830b6',
                  600: '#2a258f',
                  700: '#1e1a67',
                  800: '#110f40',
                  900: '#06041b',
                }
            },
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
  };