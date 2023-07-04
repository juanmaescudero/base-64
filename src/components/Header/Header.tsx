import { Box, Typography } from "@mui/material";
import i18n from "../../i18n/en.json";
import styles from "./header.module.css";
import Link from "next/link";
import { useState, useEffect } from "react"

export default function Header() {
    const [ pathName, setPathName ] = useState<string>("")

    useEffect(() => {
        if (typeof window !== "undefined") {
            setPathName(window.location.pathname)
        }
    }, [])

    return (
        <Box className={styles.header}>
            <Typography variant={"h1"}>{i18n.app.name}</Typography>
            <Typography variant={"body1"}>{i18n.app.slogan}</Typography>
            <nav className={styles.nav}>
                <Link href={"/"}>
                    <Typography
                        variant={"body1"}
                        className={pathName === "/" ? styles.active : ""}
                    >
                        {i18n.app.routes.base}
                    </Typography>
                </Link>
                <Link href={"/json-formatter"}>
                    <Typography
                        variant={"body1"}
                        className={pathName === "/json-formatter" ? styles.active : ""}
                    >
                        {i18n.app.routes.json}
                    </Typography>
                </Link>
            </nav>
        </Box>
    );
}
