"use client"

import { Box, IconButton } from "@mui/material";
import { ITextarea } from "./textarea.interface";
import styles from "./textarea.module.css";
import ContentCopyRoundedIcon from '@mui/icons-material/ContentCopyRounded';
import CheckRoundedIcon from '@mui/icons-material/CheckRounded';
import { useEffect, useState } from "react";

export default function Textarea (props: ITextarea) {
    const { onChange, placeHolder="", value="", disabled=false, minHeight, canCopy=true } = props

    const [ copied, setCopied ] = useState<boolean>(false)

    useEffect(() => {
        setCopied(false)
    }, [value])

    return (
        <Box className={styles.container} >
            <textarea 
                className={styles.input} 
                style={{ minHeight: minHeight ? `${minHeight}px` : "280px", maxHeight: minHeight ? `${minHeight}px !important` : "280px"}}
                onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => onChange && onChange(e.target.value)}
                placeholder={placeHolder}
                value={value}
                disabled={disabled}
            />
            {canCopy && (
                <IconButton 
                    aria-label={"copy"} 
                    className={styles.icon}
                    onClick={() => {
                        navigator.clipboard.writeText(value)
                        setCopied(true)
                    }}
                >
                    {copied 
                        ? <CheckRoundedIcon htmlColor={"var(--color-primary)"}/> 
                        : <ContentCopyRoundedIcon htmlColor={"var(--color-primary)"}/>
                    }
                </IconButton>
            )}
        </Box>
    )
}