import './Styles.css';
import ArrowsDefinition from './components/arrowsDefinition';

const App = () => {

  const Start = () => ArrowsDefinition(3, 10)
  debugger

  return (
    <div >
      <button className='button' onClick={Start}>Начать </button>
    </div >
  );
}

export default App;
