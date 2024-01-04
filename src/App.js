import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <ChildComponet/>
    </div>
  );
}


const ChildComponet = () => {
  return(
    <div>
      <p>Learning development</p>
    </div>
  )
}

export default App;
