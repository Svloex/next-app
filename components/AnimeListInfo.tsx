import Link from "next/link"
import { FC } from "react"
import { socialsType } from "../types"

type socialsProps = {
    socials:socialsType[]
}

const AnimeListInfo:FC<socialsProps> = ({socials}) => {

    return (
        <>
            <h1>anime list</h1>
            <ul>
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