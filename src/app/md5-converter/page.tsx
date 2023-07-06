"use client"

import styles from './page.module.css';
import { useEffect, useState } from 'react';
import Header from '@/components/Header/Header';
import i18n from '../../i18n/en.json';
import { Box, Typography } from '@mui/material';
import Textarea from '@/components/Textarea/Textarea';
import md5 from "md5"

/*
Title: Convert Text to MD5 Hash - Boost SEO and Data Security

Description: Convert any text to MD5 hash effortlessly and enhance your website's search engine optimization (SEO) and data security. With our powerful tool, you can generate unique and secure MD5 hash values for your content.
*/

export default function Page() {
    const [text, setText] = useState<string>('')
    const [result, setResult] = useState<string>('')

    useEffect(() => {
        if (text.length > 0) {
            try {
                const textConverted = md5(text)
                setResult(textConverted)
            } catch (error) {
                setResult(i18n.md5.errorConverting)
            }
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
                        }}
                        placeHolder={i18n.app.upTextareaPlaceHolder}
                        value={text}
                    />
                    <Textarea
                        placeHolder={i18n.app.downTextareaPlaceHolder}
                        value={result}
                        disabled={true}
                    />
                </Box>
                <article className={styles.copy}>
                    <Typography variant={"body2"} sx={{ marginBottom: "12px" }}>
                        {"Boost your website's SEO and enhance data security with our advanced text-to-MD5 converter. Converting text to MD5 hash is a smart way to optimize your content for search engines while protecting sensitive information."}
                    </Typography>
                    <Typography variant={"body2"} sx={{ marginBottom: "12px" }}>
                        {"Search engines prioritize unique content, and by converting your text to MD5 hash, you can create distinct identifiers for your web pages, blog posts, or articles. This helps search engines understand the uniqueness of your content, potentially improving its visibility and ranking in search results."}
                    </Typography>
                    <Typography variant={"body2"} sx={{ marginBottom: "12px" }}>
                        {"In addition to SEO benefits, our MD5 converter also enhances data security. When you convert your text to an MD5 hash, the original text becomes virtually irretrievable, adding an extra layer of protection to sensitive information like passwords, email addresses, or other confidential data. This way, you can safeguard your users' data and maintain a secure online environment."}
                    </Typography>
                    <Typography variant={"body2"} sx={{ marginBottom: "12px" }}>
                        {"Our user-friendly interface makes it simple to convert any text to MD5 hash. Just enter your text, and our tool will generate a unique MD5 hash value instantly. You can then incorporate this hash into your HTML or backend code, optimizing your website for SEO while keeping your data secure."}
                    </Typography>
                    <Typography variant={"body2"} sx={{ marginBottom: "12px" }}>
                        {"Take advantage of our text-to-MD5 converter and unlock the potential of SEO optimization and data security. Convert your text to MD5 hash effortlessly and ensure your website stands out in search engine rankings while safeguarding sensitive information. Try it now and experience the benefits for yourself!"}
                    </Typography>
                </article>
            </Box>
        </main>
    )
}
