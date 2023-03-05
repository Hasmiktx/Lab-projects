import React, { useContext, useState } from 'react';

import './Style.css';
const Message = ({ isOpen }) => {
    const defaultText =
        'Lorem Ipsum is simply dummy text of the printing andtypesetting industry.';

    const [text, setText] = useState(defaultText);
    const [message, setMessage] = useState('');

    return (
        <div className="message" style={{ display: isOpen ? 'flex' : 'none' }}>
            <div className="chat_div">
                <img src="/img/avatar_1.png" />
                <p>{text}</p>
            </div>
            <div className="chat_div">
                <p>{text}</p>
                <img src="/img/avatar_2.png" />
            </div>
            <input
                className="input"
                type="text"
                placeholder="type your message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
            />
            <button className="button" onClick={() => setText(message)}>
                Send
            </button>
        </div>
    );
};

export default Message;
