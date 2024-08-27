import styles from '../Home/home.module.css';
import { BsSearch } from 'react-icons/bs';
import { Link, useNavigate } from 'react-router-dom';
import { useState, FormEvent, useEffect } from 'react';

interface CoinProps{
    id: string;
    name: string;
    symbol: string;
    priceUsd: string;
    vwap24Hr: string;
    changePercent24Hr: string;
    rank: string;
    supply: string;
    maxSupply: string;
    marketCapUsd: string;
    volumeUsd24Hr: string;
    explorer: string;
    fromatedPrice?: string;
    fromatedMarket?: string;
    formatedVolume?: string;
}

interface DataProp{
    data: CoinProps[];
}

export default function Home(){
    const [input, setImput] = useState('');
    const [coins, setCoins] = useState<CoinProps[]>([]);
    const [offset, setOffset] = useState(0);

    const navigate = useNavigate();

    useEffect(()=>{
        getData();
    }, [offset])

    async function getData(){
        fetch(`https://api.coincap.io/v2/assets?limit=10&offset=${offset}`)
        .then(response => response.json())
        .then((data: DataProp)=> {
            const coinsData = data.data;

            const price = Intl.NumberFormat("en-US",{
                style: "currency",
                currency: "USD",
            })

            const priceCompact = Intl.NumberFormat("en-US",{
                style: "currency",
                currency: "USD",
                notation: "compact"
            })

            const formatedResult = coinsData.map((item)=>{
                const formated = {
                    ...item,
                    fromatedPrice: price.format(Number(item.priceUsd)),
                    fromatedMarket: priceCompact.format(Number(item.marketCapUsd)),
                    formatedVolume: priceCompact.format(Number(item.volumeUsd24Hr))
                }
                return formated;
            })
            
            const listCoins = [...coins, ...formatedResult]
            setCoins(listCoins)
        })
    }

    function handleSubmit(e: FormEvent){
        e.preventDefault();

        if(input === '') return;

        navigate(`/detail/${input}`)
    }

    function handleGetMore(){
        if(offset === 0){
            setOffset(10)
            return;
        }
        setOffset(offset + 10)
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

                {coins.length > 0 && coins.map((item)=>(
                <tr className={styles.tr} key={item.id}>

                    <td className={styles.tdLabel} data-label="Moeda">
                        <div className={styles.name}>
                            <img 
                            className= {styles.logo}
                            src={`https://assets.coincap.io/assets/icons/${item.symbol.toLowerCase()}@2x.png`} 
                            alt="Logo Cripto" />
                            <Link to={`/detail/${item.id}`}>
                                <span>{item.name}</span> | {item.symbol}
                            </Link>
                        </div>
                    </td>

                    <td className={styles.tdLabel} data-label="Valor mercado">
                        {item.fromatedMarket}
                    </td>

                    <td className={styles.tdLabel} data-label="Preco">
                        {item.fromatedPrice}
                    </td>
                    <td className={styles.tdLabel} data-label="Volume">
                        {item.formatedVolume}
                    </td>
                    <td 
                    className={Number(item.changePercent24Hr) > 0 ? styles.tdProfite : styles.tdLoss} 
                    data-label="Mudanca em 24Hr">
                        <span>{Number(item.changePercent24Hr).toFixed(2)}</span>
                    </td>

                </tr>
                ))}

                </tbody>
            </table>

            <button className={styles.buttonMore} onClick={handleGetMore}>
                Carregar mais..
            </button>
        </main>
    )
}