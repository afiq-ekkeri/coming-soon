import '../styles/globals.css'
import Layout from '../components/layout'
import type { AppProps } from 'next/app'
import { Josefin_Sans } from '@next/font/google'

const josefin = Josefin_Sans({weight: '400'})
function MyApp({ Component, pageProps }: AppProps) {
    return (
        <Layout className={josefin.className}>
            <Component {...pageProps} />
        </Layout>
    )
}

export default MyApp