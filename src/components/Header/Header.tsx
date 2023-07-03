"use client"

import { Box, Typography } from "@mui/material"
import i18n from "../../i18n/en.json"
import styles from "./header.module.css"

export default function Header () {

    return (
        <Box className={styles.header}>
            <Typography variant={"h1"}>{i18n.app.name}</Typography>
        </Box>
    )
}