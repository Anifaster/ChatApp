import React, { useState, useEffect, useRef } from 'react'
import {db} from '../firebase'
import { query, collection, onSnapshot, orderBy, QuerySnapshot } from 'firebase/firestore';
import Messege from './Messege';
import SendMessage from './SendMessage';



const style = {
    main: `flex flex-col p-[10px] relative`
}

const Chat = () => {
    const [messages, setMessages] = useState([]);
    const scroll = useRef()

    useEffect(() => {
        const q = query(collection(db, 'messages'), orderBy('timestamp'))
        const unsubscribe = onSnapshot(q, (querySnapshot) => {
            let messages = [];
            querySnapshot.forEach((doc) => {
                messages.push({ ...doc.data(), id: doc.id })
            });
            setMessages(messages);
        });
        return () => unsubscribe();
    }, []);


    return (
        <>
            <main className={style.main}>

                {messages && messages.map((message) =>(
                    <Messege key={message.id} message={message} />
                ))}

            </main>
            <SendMessage scroll={scroll}/>
            <span ref={scroll}></span>
        </>
    )
}

export default Chat
