import styles from './Itens.module.scss';
import cardapio from './Itens.json'
import Item from './Item';

export default function Itens(){
    return(
        <div className={styles.itens}>
            {cardapio.map((item) => (
                <Item 
                    key={item.id}
                    {...item}
                />
            ))}
        </div>
    )
}