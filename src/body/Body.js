import ha from '../ha.png'
import './Body.css';
import Carouselmain from './hero/Carouselmain';



function Body() {
  return (
    <div className="App">

      <Carouselmain/>
      <header className="App-header">
        
        <img src={ha} alt='ha logo'/>
         <h1> Hello Asir - Learning React </h1>
       </header>
    </div>
  );
}

export default Body;
