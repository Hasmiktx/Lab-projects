import './App.css';
import Message from './components/Message/Message';
import Chat from './components/Chat/Chat';
import { createContext, useState } from 'react';
export const ShowContext = createContext();
function App() {
    const [isOpen, setIsOpen] = useState(false);
    const handleChange = () => setIsOpen(!isOpen);

    return (
        <ShowContext.Provider value={handleChange}>
            <div className="container">
                <Chat />
                <Message isOpen={isOpen} />
            </div>
        </ShowContext.Provider>
    );
}

export default App;
