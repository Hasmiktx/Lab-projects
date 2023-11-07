
import './App.css';
import GridComp from './components/Grid/Grid';
// import MyInput from './components/MyInput/MyInput';

import MyTooltip from './components/MyTooltip/MyTooltip';

function App() {
    return (
        <div className="App">
            <h2 className="header">The Tooltip Component</h2>
            <MyTooltip
                text="Here I Am"
                position="left"
                color="black"
                backgroundColor="lawngreen"
                fontSize={20}
            >
                <h3>Hover on Me</h3>
            </MyTooltip>
            <GridComp/>
            
        </div>
    );
}

// function App(){
   
//     return(
//     <div className='App'>
//      <GridComp/>
//    </div> 
//     )
//     }
 export default App;
