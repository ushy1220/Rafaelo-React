import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import styles from './ColumnList.module.scss'
import Column from '../MessageColumn/Column.js';
import Snow from "../Weather/Snow/Snow.js";
import Container from '../Container/Container';


const List = () => {

    const messages = useSelector(state => state.messages);
	const dispatch = useDispatch();

	const handleSubmit = e => {
		e.preventDefault();
	}; 
	
	const removeMess = messageId => {
		dispatch({ type: 'REMOVE_COLUMN', payload: messageId });
	}

    return (
	<div className={styles.wrapper}>
		<Snow />
		<Container>
			<div className={styles.list} onSubmit={handleSubmit}>
				<header className={styles.header}>
					<h2 className={styles.title}>Wiadomości</h2>
				</header>
				<section className={styles.messages}>
					{messages.map(message => <li key={message.id} className={styles.mess}><Column {...message} />
					<button className={styles.exit} onClick={() => removeMess(message.id)}>DELETE</button>
					</li>
					)}	
				</section>
			</div>
		</Container>
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