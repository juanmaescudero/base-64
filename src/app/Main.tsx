"use client"

import { theme } from '@/styles/theme';
import { ThemeProvider } from '@mui/material';

interface IMain {
    children: React.ReactNode
}

export default function Main (props: IMain) {
    const { children } = props

    return (
        <ThemeProvider theme={theme}>
            {children}
        </ThemeProvider>
    )
}