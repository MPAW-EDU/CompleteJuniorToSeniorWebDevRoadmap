import logo from './logo.svg';
import './App.css';

// Imported Components
import Page1 from './components/Page1';
import Page2 from './components/Page2';
import Page3 from './components/Page3';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
          <h1>Learn React</h1>
      </header>
      <Page1 />
      <Page2 />
      <Page3 />
    </div>
  );
}

export default App;
