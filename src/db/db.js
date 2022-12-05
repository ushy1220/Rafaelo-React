import { useState } from 'react';
import shortid from 'shortid';

const Database = () => {
    
    const [messages, setMessages] = useState([
        {
            id: '',
            Name: '',
            Phone: '',
            Content: ''
        }
    ]);

    const addMessage = newMEssage => {
        setMessages([...messages, {id: shortid(), title: newMessage.title, icon: newMessage.icon, cards: [] }]);
    }

    return
    (
        console.log()
    )
}

export default Database;