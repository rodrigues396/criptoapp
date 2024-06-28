import { Link } from "react-router-dom";
import Logoimg from '../../assets/img/logo.svg'

import styles from "./header.module.css"; // Escopado

export default function Header(){
    return(
        <div className= {styles.container}>
            <Link to={'/'}>
                <img src={Logoimg} alt="" />
            </Link>
        </div>
    )
}
