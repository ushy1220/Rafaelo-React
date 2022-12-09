import styles from './MessWrapper.module.scss';
import ColumnList from '../MessagesColumnList/ColumnList';
import Container from '../Container/Container';

const MessWrapper =()=> {
    return (
        <main className={styles.MessWrapper}>
            <Container>
                <ColumnList />
            </Container>
        </main>
    )
}

export default MessWrapper;