import './App.css';
import MyTooltip from './components/MyTooltip/MyTooltip';

function App() {
    return (
        <div className="App">
            <h2 className="header">The Tooltip Component</h2>
            <MyTooltip
                text="Here I Am"
                position="right"
                color="black"
                backgroundColor="lawngreen"
                fontSize={20}
            >
                <h3>Hover on Me</h3>
            </MyTooltip>
        </div>
    );
}

export default App;
