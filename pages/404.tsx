import Head from "next/head"
import Headeing from "../components/Heading";
import { useEffect } from "react";
import { useRouter } from "next/router";

const Error = () => {
    const router = useRouter()
    useEffect(() => {
        setTimeout(()=>{
            router.push('/')
        },3000)
    }, [router]);
    return <>
        <Head>
            <title>Error</title>
        </Head>
        <Headeing text='404'/>
        <Headeing tag='h2' text='Something  is going wrong...'/>
    </>
}

export default Error