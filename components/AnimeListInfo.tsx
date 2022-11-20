import Link from "next/link"
import { FC } from "react"
import { socialsType } from "../types"
import styles from '../styles/AnimeListInfo.module.scss'

type socialsProps = {
    socials:socialsType[]
}

const AnimeListInfo:FC<socialsProps> = ({socials}) => {

    return (
        <>
            <h1 style={{textAlign:"center"}}>anime list</h1>
            <ul className={styles.list}>
                {socials.map(({id, path, name})=>{
                return(
                    <li key={id}>
                        <Link href={path}>{name}</Link>
                    </li>
                        ) 
                    })}

            </ul>
        
        </>
    )
}

export default AnimeListInfo