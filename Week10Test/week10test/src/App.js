import './App.css';
import Loading from './Loading';
import LoadingSpin from './LoadingSpin';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src="react.png" className="App-logo" alt="logo" width="450px" height="100px"/>
        <Loading/>
        <div className='loader'>
        <LoadingSpin/>
      </div>
      </header> 
    </div>
  );
}

export default App;
