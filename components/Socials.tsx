import Head from "next/head"
import Link from "next/link"

const Socials = ({socials}) => {
    if(!socials){
        return null
    }

    return (
        <>
        {/* <Head>
            <Link></Link>
        </Head> */}
        <ul>
            {socials && socials.map(({id, icon, path}) => {
                <li>
                    <a href={path}>
                        <i>пока что это</i>
                    </a>
                </li>
            })}
        </ul>
        </>
    )
}

export default Socials