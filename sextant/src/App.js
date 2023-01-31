import './App.css';
import Banner from './components/Banner';
import Card from './components/Card';

function App() {
  return (
    <div className="App">
      <Banner title="Sextant"/>
      <Card heading="Test">
        <p>Test</p>
      </Card>
    </div>
  );
}

export default App;
