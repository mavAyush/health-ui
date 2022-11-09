import './App.css';
import { NavBar } from './health/commons/layouts';
import RegPage from './health/RegPage';


function App() {
  return (
    <div>
      <NavBar content={['Registration','Adt','Billing']}/>
      <div className="App">
        <RegPage/>
        
      </div>
    </div>
  );
}

export default App;
