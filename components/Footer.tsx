import Headeing from "./Heading"
import styles from "../styles/Footer.module.scss"
import { FC } from "react"

const Footer:FC = () => (
    <footer className={styles.footer}>
        <Headeing tag='h3' text='by vlo'/>
    </footer>
)
export default Footer