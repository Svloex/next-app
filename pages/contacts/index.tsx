import { GetStaticProps } from "next"
import Head from "next/head"
import Link from "next/link"
import { FC } from "react"
import { contactType } from "../../types"
import Headeing from "../../components/Heading"
import styles from '../../styles/Contacts.module.scss'

type contactsTypeProps = {
    contacts:[contactType]
}

export const getStaticProps:GetStaticProps = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/users')
    const data = await response.json()
    // console.log(data)
    if(!data){
        return {
            notFound: true
        }
    }
    return {
        props:{
            contacts:data
        }
    }
}


const Contacts:FC<contactsTypeProps> = ({contacts}) => {
    
    return (
        <>
            <Head>
                <title>Contacts</title>
            </Head>
            <Headeing text='Contacts list:'/>
            <ul className={styles.contacts}>
                {contacts && contacts.map(({id, name}) => {
                   return (
                        <li key={id}>
                            <Link href={`/contacts/${id}`}>{name}</Link>
                        </li>
                    )
                })}
            </ul>
        </>
    )
    
    }
export default Contacts