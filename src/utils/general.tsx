import Head from "next/head";
import React from "react";

export const isValidEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
};

export const getStandardHeader = (title: string) => {
    return (
        <Head>
            <title>{title}</title>
        </Head>
    )
}