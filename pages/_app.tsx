import { AppProps } from "next/app"
import Head from "next/head"
import Layout from '../components/Layout'
import '../styles/globals.scss'
import '../styles/globals-main.scss'
import img from'../public/photo.jpg'
import Image from 'next/image'

const MyApp = ({ Component, pageProps }:AppProps) => (
    <Layout>
        <Head>
            <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300&display=swap" rel="stylesheet"/>
        </Head>
        <main>
            <Component {...pageProps }/>
        </main>
        <Image 
            src={img}
            width={null}
            height={350}
            alt='preview'
            placeholder='blur'
        />
    </Layout>
)

export default MyApp