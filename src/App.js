import './Styles.css';
import ArrowsDefinition from './components/arrowsDefinition';
import { useState } from 'react';

const App = () => {
  let size = 3
  let arrowQuantity = 10
  const [s, setS] = useState(false)

  return (
    <div >
      {!s &&
        <button className='start' onClick={() => setS(s => !s)}>
          Начать игру
        </button>
      }
      {s && <ArrowsDefinition size={size} arrowQuantity={arrowQuantity} />}
    </div >
  );
}

export default App;
