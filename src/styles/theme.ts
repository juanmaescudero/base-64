import { createTheme } from "@mui/material";

export const theme = createTheme({
    palette: {
        primary: {
            main: '#d59dff'
        },
    },
    typography: {
        h1: {
            fontSize: "32px",
            fontWeight: "bold",
            color: "var(--color-dark)"
        }
    },
    components: {
        MuiButtonGroup: {
            styleOverrides: {
                root: {
                    color: "var(--color-light)"
                },
                grouped: {
                    color: "var(--color-light)"
                },
            },
        },
    },
})