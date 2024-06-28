import styles from '../Home/home.module.css';
import { BsSearch } from 'react-icons/bs';

export default function Home(){
    return(
        <main className={styles.container}>
            <form className={styles.form}>
                <input type="text" 
                placeholder='Digite o nome da moeda'
                />
                <button type='submit'>
                    <BsSearch size={25} color='#FFF'/>
                </button>
            </form>

            
        </main>
    )
}