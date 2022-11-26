import styles from './List.module.scss'
import Columns from '../Column/Column';

const List = () => {

    const columns = [
        {id: 1, title: 'Urodziny', icon: 'gift', color: 'yellow'},
        {id: 2, title: 'Plener Piknik Festyn Dożynki', icon: 'tree', color: 'green'},
        {id: 3, title: 'Rodzinne', icon: '', color: 'blue'},
        {id: 4, title: 'Bal szkolny', icon: '', color: 'red'}
    ]

    return (
        <section className={styles.columns}>
            {columns.map(column => <Columns key={column.id} title={column.title} icon={column.icon} />)
            }
        </section>
    )
    /*
    return (
        <div className='list'>
            <header className={styles.header}>
                <h3 className={styles.title}>Things to do<span>soon</span></h3>
            </header>
            <p className={styles.description}>Interesting things I want to check out</p>
            <section className={styles.columns}>
                <Column title="Books" icon="book"/>
                <Column title="Movies" icon="film" />
                <Column title="Games" icon="gamepad"/>
            </section>
        </div>
    );
    */
};

export default List;