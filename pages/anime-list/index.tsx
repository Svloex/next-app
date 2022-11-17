import Head from "next/head"
import { FC } from "react"
import AnimeListInfo from "../../components/AnimeListInfo"
import {socials} from '../api/data/socials'

const AnimeList:FC = () => {

    return(
        <>
            <Head>
            <title>I watch</title>
            </Head>
            <AnimeListInfo socials={socials}/>
        </>
    )
}

export default AnimeList