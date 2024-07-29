import styles from '../Home/home.module.css';
import { BsSearch } from 'react-icons/bs';
import { Link, useNavigate } from 'react-router-dom';
import { useState, FormEvent } from 'react';

export default function Home(){
    const [input, setImput] = useState('');
    const navigate = useNavigate();

    function handleSubmit(e: FormEvent){
        e.preventDefault();

        if(input === '') return;

        navigate(`/detail/${input}`)
    }

    return(
        <main className={styles.container}>
            <form className={styles.form} onSubmit={handleSubmit}>
                <input type="text" 
                placeholder='Digite o nome da moeda'
                value={input}
                onChange={(e) => setImput(e.target.value)}
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

            <button className={styles.buttonMore}>
                Carregar mais..
            </button>
        </main>
    )
}