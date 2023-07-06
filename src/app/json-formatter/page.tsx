"use client"

import styles from './page.module.css';
import { useEffect, useState } from 'react';
import Header from '@/components/Header/Header';
import i18n from '../../i18n/en.json';
import { Box, Typography } from '@mui/material';
import Textarea from '@/components/Textarea/Textarea';
import JSON from 'json-bigint';

export default function Home() {
    const [text, setText] = useState<string>('')
    const [result, setResult] = useState<string>('')

    useEffect(() => {
        if (text.length > 0) {
            try {
                const json = JSON.parse(text)
                const formattedJson = JSON.stringify(json, null, 2)

                setResult(formattedJson)
            } catch (error) {
                setResult(i18n.json.errorParsing)
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
                        minHeight={400}
                    />
                </Box>
                <article className={styles.copy}>
                    <Typography variant={"body2"} sx={{ marginBottom: "12px" }}>
                        {"Format your JSON online quickly and easily with our free tool. Need to make your JSON more readable for better visualization and understanding? Look no further. Our online platform allows you to automatically and effortlessly format your JSON."}
                    </Typography>
                    <Typography variant={"body2"} sx={{ marginBottom: "12px" }}>
                        {"Proper JSON formatting is essential for easy readability and debugging. With our online tool, you can input your raw JSON, and with just a few clicks, you'll get perfectly formatted and structured JSON. Whether you're working on a development project, debugging JSON data, or simply looking to improve the readability of your files, our JSON formatter is the ideal solution."}
                    </Typography>
                    <Typography variant={"body2"} sx={{ marginBottom: "12px" }}>
                        {"Our tool ensures that your JSON is properly indented and aligned, making it easy to identify structures and hierarchies. This allows you to quickly visualize the data and find any errors or inconsistencies. Additionally, correctly formatted JSON improves collaboration among teams and simplifies data exchange between different applications and systems."}
                    </Typography>
                    <Typography variant={"body2"} sx={{ marginBottom: "12px" }}>
                        {"Don't waste any more time struggling with unreadable JSON. Use our online tool and get professionally formatted JSON instantly. Streamline your workflow, save time, and enhance efficiency by reliably and quickly formatting your JSON. Try our free online JSON formatting tool today and experience the convenience of readable and well-structured JSON!"}
                    </Typography>
                </article>
            </Box>
        </main>
    )
}
