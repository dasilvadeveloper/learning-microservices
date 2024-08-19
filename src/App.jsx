import NavBar from './components/NavBar/NavBar';
import Register from './routes/Register/Register'
import { Outlet } from 'react-router-dom';

function App() {
  return (
     <div className="App">
      <div className="Container">
        <NavBar></NavBar>
        <Outlet/>
      </div>
     </div>
  );
}

export default App;
