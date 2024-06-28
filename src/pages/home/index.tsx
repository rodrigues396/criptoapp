import styles from '../Home/home.module.css';
import { BsSearch } from 'react-icons/bs';
import { Link } from 'react-router-dom';

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

            <table>
                <thead>
                    <tr>
                        <th scope='coll'>Moeda</th>
                        <th scope='coll'>Valor de mercado</th>
                        <th scope='coll'>Preco</th>
                        <th scope='coll'>Volume</th>
                        <th scope='coll'>Mudanca em 24Hr</th>
                    </tr>
                </thead>

                <tbody id='tbody'>

                    <tr className={styles.tr}>
                        <td className={styles.tdLabel} data-label="Moeda">
                            <div className={styles.name}>
                                <Link to={'/detail/bitcoin'}>
                                    <span>Bitcoin</span> | BTC
                                </Link>
                            </div>
                        </td>

                        <td className={styles.tdLabel} data-label="Valor mercado">
                            1T
                        </td>

                        <td className={styles.tdLabel} data-label="Preco">
                            8.000
                        </td>
                        <td className={styles.tdLabel} data-label="Volume">
                            2B
                        </td>
                        <td className={styles.tdProfite} data-label="Mudanca em 24Hr">
                            <span>1.20</span>
                        </td>

                    </tr>

                </tbody>
            </table>
        </main>
    )
}