import '@components/styles/globals.css'
import type { AppProps } from 'next/app'
import { useEffect } from "react";
import AOS from 'aos';

export default function App({ Component, pageProps }: AppProps) {
    useEffect(() => {
        // here you can add your aos options
        AOS.init({
            offset: 100,
        });
    }, []);

    return <Component {...pageProps} />
}
