import {useRouter} from 'next/router'
import Link from 'next/link'
import Image from 'next/image'
import styles from '../styles/Navbar.module.scss'

const navigation = [
    {   
        id:'1',
        path:'/',
        title:'Home'
    },
    {   
        id:'2',
        path:'/posts',
        title:'Posts'
    },
    {   
        id:'4',
        path:'/contacts',
        title:'Contacts'
    },
    {   
        id:'5',
        path:'/api/socials',
        title:'Api'
    },
    {   
        id:'6',
        path:'/anime-list',
        title:'I watch'
    }
]

const Navbar = () => {
    const {pathname}=useRouter()
    return (
        <nav className={styles.headerNav}>
            <div className={styles.headerNav__photo}>
                <Image src="/FengLuo.jpg" height={60} width={100} alt="Vlo-dev" />
            </div>
            <div className={styles.headerNav__link}>
            {
             navigation.map((item) => (
             <Link key={item.id} href={item.path}
             className={item.path===pathname? styles.active:null}
             style={item.path==='/api/socials'? { pointerEvents:'none' }:null}
             >{item.title}</Link>

             ))
            }              
            </div>
        </nav>
    )
}

export default Navbar