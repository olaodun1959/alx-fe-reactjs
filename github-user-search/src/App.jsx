import { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="app-container">
      <h1>GitHub User Search</h1>

      {/* Example button to test state */}
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          Count is {count}
        </button>
      </div>

      {/* Placeholder for future components */}
      <p>Search component will go here.</p>
    </div>
  );
}

export default App;
