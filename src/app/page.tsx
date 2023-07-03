"use client"

import styles from './page.module.css';
import { useEffect, useState } from 'react';
import Header from '@/components/Header/Header';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import i18n from '../i18n/en.json';
import { Box, Typography } from '@mui/material';
import utf8 from "utf8";
import base64 from "base-64";
import Textarea from '@/components/Textarea/Textarea';

export default function Home() {
    const [text, setText] = useState<string>('')
    const [result, setResult] = useState<string>('')
    const [decode, setDecode] = useState<boolean>(true)

    useEffect(() => {
        text.length > 0 && handleConversion(text)
    }, [decode])

    const handleConversion = (value: string) => {
        const bytes = utf8.encode(value)
        
        try {
            const bytesToString = decode ? base64.decode(bytes) : base64.encode(bytes)
            setResult(bytesToString)
        } catch (err: any) {
            console.log(err.message)
            setResult("")
        }
    }

    return (
        <main className={styles.main}>
            <Header />
            <Box className={styles.section}>
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
                <Box className={styles['textarea-group']}>
                    <Textarea
                        onChange={(value: string) => {
                            setText(value)
                            handleConversion(value)
                        }}
                        placeHolder={i18n.app.upTextareaPlaceHolder}
                        value={text}
                    />
                    <Textarea
                        onChange={(value: string) => handleConversion(value)}
                        placeHolder={i18n.app.downTextareaPlaceHolder}
                        value={result}
                        disabled={true}
                    />
                </Box>
                <Box className={styles.copy}>
                    <Typography variant={"body2"}>
                        Looking for a reliable and efficient way to encode and decode data? Look no further! Our website offers a powerful tool that allows you to effortlessly encode and decode data in base 64. With our user-friendly interface and advanced algorithms, you can quickly and securely transform your data into base 64 format and vice versa.
                        <br/><br/>
                        Base 64 encoding is a popular method used to convert binary data into a text format that can be easily transmitted over different systems and platforms. It is commonly used for tasks such as data encryption, data transfer, and storing data in a human-readable format. However, manually encoding or decoding data in base 64 can be a time-consuming and error-prone process.
                        <br/><br/>
                        That's where our website comes in. We provide a simple yet robust solution that takes the complexity out of base 64 encoding and decoding. Whether you need to encode sensitive information for secure transmission or decode base 64-encoded data received from external sources, our tool has got you covered.
                        <br/><br/>
                        Our website's base 64 decoding and encoding functionality is designed to be fast, accurate, and reliable. Just paste your base 64-encoded data into the designated field, and our tool will quickly convert it back to its original format. Similarly, if you need to encode data in base 64, simply input your text or file, and our tool will generate the base 64-encoded output in no time.
                        <br/><br/>
                        With our website, you can streamline your data encoding and decoding processes, saving valuable time and effort. Whether you're a developer, a security professional, or simply someone who needs to work with base 64-encoded data, our tool provides a convenient and efficient solution.
                        <br/><br/>
                        Unlock the power of base 64 encoding and decoding with our website. Experience the ease and convenience of transforming your data securely and effortlessly. Try our tool today and simplify your data manipulation tasks!
                        <br/><br/>
                        Please note that while this text is optimized for SEO with the keyword "Decode 64 base," it's important to ensure the overall content on your website provides valuable information and meets the needs of your target audience.
                    </Typography>
                </Box>
            </Box>
        </main>
    )
}
