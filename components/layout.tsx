import React from 'react'
import Navbar from './navbar'
import Footer from './footer'
import { Josefin_Sans } from '@next/font/google'

const Josefin = Josefin_Sans()

type Props = {
    children: React.ReactNode,
    className: string,
}

export default function layout({children, className}: Props) {
    return (
        <main className={className}>
            <Navbar />
            <main>{children}</main>
            <Footer />
        </main>
    )
}