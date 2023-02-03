import { useSelector, useDispatch} from 'react-redux';
import { useState, useEffect } from 'react';
import styles from './ColumnList.module.scss'
import Column from '../MessageColumn/Column.js';
import Snow from "../Weather/Snow/Snow.js";
import Container from '../Container/Container';
import axios from 'axios';

const List = () => {

	const [mess, setMess] = useState([]);
    const messages = useSelector(state => state.messages);
	const dispatch = useDispatch();

	const handleSubmit = e => {
		e.preventDefault();
	}; 
	
	const removeMess = messageId => {
		dispatch({ type: 'REMOVE_COLUMN', payload: messageId });
	}

	/*const deleteMess = async (id) => {
		const result = await axios.delete(`http://localhost/rafaeloApi/${id}/delete.php`);
		setMess(result.data.phpresult);
		console.log(result.data.phpresult);
	};*/

	
	const deleteMess = (id) => {
        axios.post(`http://localhost/rafaeloApi/${id}/delete.php/`).then(function(response){
            console.log(response.data);
            loadMess();
        });
    }
	
	const loadMess = async () => {
		const result = await axios.get("http://localhost/rafaeloApi/get.php");
		setMess(result.data.phpresult);
		console.log(result.data.phpresult);
	};

	useEffect(() => {
		loadMess();
	}, []);

    return (
		<div className={styles.container}>
			<div className={styles.wrapper}>
				<Snow />
				<Container>
					<div className={styles.list} onSubmit={handleSubmit}>
						<header className={styles.header}>
							<h2 className={styles.title}>Wiadomości</h2>
						</header>
						<section className={styles.messages}>
							{messages.map(message => 
							<li key={message.id} className={styles.mess}>
								<Column {...message} />
								<button className={styles.exit} onClick={() => removeMess(message.id)}>DELETE</button>
							</li>
							)}	
						</section>
					</div>
				</Container>
			</div>
			<div className={styles.wrapper}>
				<Container>
					<div className={styles.list}>
						<table className={styles.table}>
							<thead className={styles.tableHead}>
								<tr className={styles.tableRow}>
									<th className={styles.id}>id</th>
									<th className={styles.name}>name</th>
									<th className={styles.email}>email</th>
									<th className={styles.content}>content</th>
									<th className={styles.date}>date</th>
									<th className={styles.deleteMess}>delete message</th>
								</tr>
							</thead>
							<tbody className={styles.tableBody}>
								{mess.map((mes, key)=> 
									<tr key={key}>
										<td className={styles.id}>{mes.id}</td>
										<td className={styles.name}>{mes.name}</td>
										<td className={styles.email}>{mes.email}</td>
										<td className={styles.content}>{mes.content}</td>
										<td className={styles.date}>{mes.date}</td>
										<td className=''><button><a href='delete.php?' name='delete' value={mes.id} onClick={() => deleteMess(mes.id)}>DELETE</a></button></td>
									</tr>
								)}
							</tbody>
						</table>
					</div>
				</Container>
			</div>
		</div>
    )
};

export default List;