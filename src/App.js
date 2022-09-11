import './App.css';
import Wave from './Wave';

const waves = new Array(20);

function App() {
  return (
    <div className="App">
        <div className='ocean'>
            { Array.from(waves, (v, k) =>
                (
                    <Wave index={k} numWaves={waves.length}/>
                )) }
        </div>
    </div>
  );
}

export default App;
