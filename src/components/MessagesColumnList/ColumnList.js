import { useSelector } from 'react-redux';
import styles from './ColumnList.module.scss'
import Column from '../MessageColumn/Column.js';
import Form from '../Form/Form.js';

const List = () => {

    const messages = useSelector(state => state.messages);

    return (
        <div className={styles.list}>
			<header className={styles.header}>
				<h2 className={styles.title}>Wiadomości</h2>
			</header>
			<section className={styles.messages}>
				{messages.map(message => <Column key={message.id} {...message} />)}
			</section>
			
		</div>
    )
};

export default List;

/*
const [column, setColumn] => useState('')

<button type='submit'>DELETE</button>




const List = () => {

    const [messages, setMessages] = useState([]);

    const addColumn = newMessage => {
        setMessages([...messages, {id: shortid(), name: newMessage.name, email: newMessage.email, content: newMessage.content }]);
    }

    return (
        <div className={styles.list}>
            <Form action={addColumn} />
			<header className={styles.header}>
				<h2 className={styles.title}>Wiadomości</h2>
			</header>
			<section className={styles.messages}>
				{messages.map(message => <Column key={message.id} id={message.id} name={message.name} email={message.email} content={message.content} />)}
			</section>
			
		</div>
    )
};


const List = () => {

    const messages = useSelector(state => state.messages);

    return (
        <div className={styles.list}>
            <Form action={messages} />
			<header className={styles.header}>
				<h2 className={styles.title}>Wiadomości</h2>
			</header>
			<section className={styles.messages}>
				{messages.map(message => <Column key={message.id} id={message.id} name={message.name} email={message.email} content={message.content} />)}
			</section>
			
		</div>
    )
};
*/