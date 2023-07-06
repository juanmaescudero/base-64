import { Box, Typography } from "@mui/material";
import i18n from "../../i18n/en.json";
import styles from "./header.module.css";
import Link from "next/link";
import { useState, useEffect } from "react"
import { IMenuItems } from "./header.interface";

export default function Header() {
    const [ pathName, setPathName ] = useState<string>("")

    useEffect(() => {
        if (typeof window !== "undefined") {
            setPathName(window.location.pathname)
        }
    }, [])

    const menuItems: IMenuItems[] = [
        {title: i18n.app.routes.base, to: "/"},
        {title: i18n.app.routes.json, to: "/json-formatter"},
        {title: i18n.app.routes.md5, to: "/md5-converter"}
    ]

    return (
        <Box className={styles.header}>
            <Typography variant={"h1"}>{i18n.app.name}</Typography>
            <Typography variant={"body1"}>{i18n.app.slogan}</Typography>
            <nav className={styles.nav}>
                {menuItems.map((item: IMenuItems) => {
                    return (
                        <Link href={item.to}>
                            <Typography
                                variant={"body1"}
                                className={pathName === item.to ? styles.active : ""}
                            >
                                {item.title}
                            </Typography>
                        </Link>
                    )
                })}
            </nav>
        </Box>
    );
}
