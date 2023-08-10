"use client"

import styles from './page.module.css';
import { useEffect, useState } from 'react';
import Header from '@/components/Header/Header';
import i18n from '../../i18n/en.json';
import { Box, Typography } from '@mui/material';
import utf8 from "utf8";
import base64 from "base-64";
import Textarea from '@/components/Textarea/Textarea';
import { regexBase64, regexBase64String } from '@/utils/regex';
import Head from 'next/head';

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
            setResult("")
        }
    }

    useEffect(() => {
        const hasBase = regexBase64String.test(text)
        
        if (hasBase) {
            const base64 = text.replace(regexBase64String, '')
            const isValid = regexBase64.test(base64)
            return isValid ? setResult(base64) : setResult("")
        } else {
            const isValid = regexBase64.test(text)
            return isValid ? setResult(text) : setResult("")
        }
        
    }, [text])

    return (
        <main className={styles.main}>
            <Header />
            <Box className={styles.section}>
                <Box className={styles['textarea-group']}>
                    <Textarea
                        onChange={(value: string) => {
                            setText(value)
                            handleConversion(value)
                        }}
                        placeHolder={i18n.app.upTextareaPlaceHolder}
                        value={text}
                    />
                    {result ? (
                        <Box className={styles["image-container"]}>
                            <img src={'data:image/jpeg;base64,' + result}/>
                        </Box>
                    ) : (
                        <Textarea
                            placeHolder={i18n.image.errorConverting}
                            value={result}
                            disabled={true}
                            canCopy={false}
                        />
                    )}
                </Box>
                <article className={styles.copy}>
                    <Typography variant={"body2"} sx={{marginBottom: "12px"}}>
                        {"Are you looking for a reliable and efficient way to encode and decode data? Look no further! Our website offers a powerful tool that allows you to effortlessly convert data in base 64 format to an image and visualize it online. With our user-friendly interface and advanced algorithms, you can quickly transform your data into a visually accessible format and vice versa."}
                    </Typography>
                    <Typography variant={"body2"} sx={{marginBottom: "12px"}}>
                        {"The base 64 encoding method is widely used to convert binary data into a text format that can be easily transmitted across different systems and platforms. It is commonly used for tasks such as data encryption, data transfer, and storing data in a human-readable format. However, manually encoding or decoding data in base 64 can be a time-consuming and error-prone process."}
                    </Typography>
                    <Typography variant={"body2"} sx={{marginBottom: "12px"}}>
                        {"That's where our website excels. We provide a simple yet robust solution that takes the complexity out of base 64 encoding and decoding. Whether you need to encode sensitive information for secure transmission or decode data in base 64 format received from external sources, our tool has got you covered."}
                    </Typography>
                    <Typography variant={"body2"} sx={{marginBottom: "12px"}}>
                        {"The base 64 decoding and encoding functionality of our website is designed to be fast, accurate, and reliable. Just paste your data in base 64 format into the designated field, and our tool will quickly convert it into a visual image. Similarly, if you need to encode data in base 64, simply input your text or file, and our tool will generate the corresponding image in base 64 format in no time."}
                    </Typography>
                    <Typography variant={"body2"} sx={{marginBottom: "12px"}}>
                        {"With our website, you can streamline your data encoding and decoding processes, saving valuable time and effort. Whether you're a developer, a security professional, or simply someone who needs to work with data encoded in base 64, our tool provides a convenient and efficient solution."}
                    </Typography>
                    <Typography variant={"body2"} sx={{marginBottom: "12px"}}>
                        {"Unlock the power of base 64 encoding and decoding with our website. Experience the ease and convenience of transforming your data securely and effortlessly into visual images. Try our tool today and simplify your data manipulation tasks!"}
                    </Typography>
                </article>
            </Box>
        </main>
    )
}
