import './App.css';
import Random from './components/Random_V1';
import Tag from './components/Tag_V1';

function App() {
  return (
    <div>
      <h1>Random GIF Applications</h1>
      <div className="main-container">
        <Random />
        <Tag />
      </div>
    </div>
  );
}

export default App;
