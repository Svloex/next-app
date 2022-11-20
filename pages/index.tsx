import Head from "next/head"
import Headeing from '../components/Heading'
import Socials from "../components/Socials"
import styles from '../styles/Home.module.scss'

export const getStaticProps = async () => {
  try {
    const response = await fetch(`${process.env.API_HOST}/socials/`)
    const data = await response.json()
  
    if(!data){
      return {
        notFound:true
      }
    }

    return {
      props: {
        socials: data
      }
    }
  
  } catch (error) {
    return {
      props: {
        socials: null
      }
    }
  }
  
}
const Home = ({socials}) => (
  <>
    <Head>
      <title>Home</title>
    </Head>
    <Headeing text='Сайт на Next.js'/>
    {/* <Socials socials={socials} /> */}
  </>
)

export default Home