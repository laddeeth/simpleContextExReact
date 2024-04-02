import './App.css';
import GrandParent from './components/GrandParent';
import { MyContext } from './contexts/MyContext';

function App() {
  return (
    <>
      <MyContext.Provider value='Nu lyckas det'>
        <GrandParent />
      </MyContext.Provider>
    </>
  );
}

export default App;
