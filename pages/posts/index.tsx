import { GetStaticProps } from "next"
import Head from "next/head"
import Link from "next/link"
import { postsType } from "../../types"
import Headeing from "../../components/Heading"
import { FC } from "react"

export const getStaticProps:GetStaticProps = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts')
    const data = await response.json()
    // console.log(data)
    if(!data){
        return {
            notFound: true
        }
    }
    return {
        props:{
            posts:data
        }
    }
}

type postsinfoProps = {
    posts:postsType
}
const Posts:FC<postsinfoProps> = ({posts}) => {
    
    return (
        <>
            <Head>
                <title>Posts</title>
            </Head>
            <Headeing text='Posts list:'/>
            <ul>
                {posts && posts.map(({id, title}) => {
                   return (
                        <li key={id}>
                            <Link href={`/posts/${id}`}>{title}</Link>
                        </li>
                    )
                })}
            </ul>
        </>
    )
    
    }
export default Posts