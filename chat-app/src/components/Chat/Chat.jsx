import React, { useContext } from 'react';
import { ShowContext } from '../../App';
import './Style.css';
const Chat = () => {
    const handleChange = useContext(ShowContext);
    return (
        <div
            className="chat"
            onClick={handleChange}
            onResize={console.log('resize')}
        >
            Chat
        </div>
    );
};

export default Chat;
