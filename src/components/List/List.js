import styles from './List.module.scss'
import Column from '../Column/Column';

const List = () => {

    const columns = [
        {id: 1, title: 'Books', icon: 'book'},
        {id: 1, title: 'Movies', icon: 'film'},
        {id: 1, title: 'Games', icon: 'gamepad'}
    ]

    return (
        <section className={styles.columns}>
            {columns.map(column => <Column key={column.id} title={column.title} icon={column.icon} />)}
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