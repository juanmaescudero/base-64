import { colors, createTheme } from "@mui/material";

export const theme = createTheme({
    palette: {
        primary: {
            main: '#d59dff'
        },
    },
    typography: {
        h1: {
            fontSize: "32px",
            fontWeight: 800,
        },
        body2: {
            fontSize: "14px"
        }
    },
    components: {
        MuiButtonGroup: {
            styleOverrides: {
                root: {
                    color: "var(--color-light)"
                },
                grouped: {
                    fontFamily: "Montserrat",
                    fontWeight: 800,
                    color: "var(--color-light)",
                    backgroundColor: "var(--color-secondary)",
                    "&.MuiButtonGroup-grouped:hover": {
                      backgroundColor: "var(--color-primary-hover) !important",
                    },
                    "&.MuiButtonGroup-grouped.Mui-checked": {
                      backgroundColor: "var(--color-primary)",
                    },
                },
            },
        },
        MuiTypography: {
            styleOverrides: {
                root: {
                    color: "var(--color-light)",
                    fontFamily: "Montserrat"
                }
            }
        }
    },
})