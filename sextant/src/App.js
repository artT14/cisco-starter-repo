import './App.css';
import Banner from './components/Banner';
import PacketLatency from './components/PacketLatency';
import PublicIP from './components/PublicIP';

function App() {
  return (
    <div className="App">
      <Banner title="Sextant"/>
      <PublicIP ipV6={false}/>
      <PublicIP ipV6={true}/>
      <PacketLatency/>
    </div>
  );
}

export default App;
