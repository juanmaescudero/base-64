"use client"

import styles from './page.module.css';
import { useState } from 'react';
import Header from '@/components/Header/Header';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import i18n from '../i18n/en.json';
import { Box } from '@mui/material';
import utf8 from "utf8";
import base64 from "base-64";

export default function Home() {
    const [text, setText] = useState<string>('')
    const [decode, setDecode] = useState<boolean>(true)

    const handleConversion = (value: string) => {
        const bytes = utf8.encode(value)
        const bytesToString = decode ? base64.decode(bytes) : base64.encode(bytes)

        setText(bytesToString)
    }

    return (
        <main className={styles.main}>
            <Header />

            <Box className={styles['btn-group']}>
                <ButtonGroup variant="contained" aria-label={'encode-or-decode'}>
                    <Button
                        aria-label={'decode'}
                        onClick={() => setDecode(true)}
                        className={`${decode ? styles.selected : ''}`}
                    >
                        {i18n.app.decode}
                    </Button>
                    <Button
                        aria-label={'encode'}
                        onClick={() => setDecode(false)}
                        className={`${decode ? '' : styles.selected}`}
                    >
                        {i18n.app.encode}
                    </Button>
                </ButtonGroup>
            </Box>

            <textarea 
                className={styles.input} 
                onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => handleConversion(e.target.value.trim())}
            />
            <p>{text}</p>
        </main>
    )
}
