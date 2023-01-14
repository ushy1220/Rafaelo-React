import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { useEffect } from 'react';
import styles from './ColumnList.module.scss'
import Column from '../MessageColumn/Column.js';
import Snow from "../Weather/Snow/Snow.js";
import Container from '../Container/Container';
import axios from 'axios';

const List = () => {

    const messages = useSelector(state => state.messages);
	const dispatch = useDispatch();

	const handleSubmit = e => {
		e.preventDefault();
	}; 
	
	const removeMess = messageId => {
		dispatch({ type: 'REMOVE_COLUMN', payload: messageId });
	}

	const [mess, setMess] = useState([]);

	const loadMess = async () => {
		const result = await axios.get("http://localhost/rafaeloApi/get.php");
		setMess(result.data.phpresult);
		console.log(result.data.phpresult);
	};

	useEffect(() => {
		loadMess();
	}, []);

    return (
		<div>
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
								{mess.map((res)=> 
									<tr>
										<td className={styles.id}>{res.id}</td>
										<td className={styles.name}>{res.name}</td>
										<td className={styles.email}>{res.email}</td>
										<td className={styles.content}>{res.content}</td>
										<td className={styles.date}>{res.date}</td>
										<td className=''><button>DELETE</button></td>
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