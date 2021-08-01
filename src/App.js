import './App.css';
import Dashboard from './layouts/Dashboard'
import Navi from './layouts/Navi';
import "react-toastify/dist/ReactToastify.min.css"
import { Container } from 'semantic-ui-react';


function App() {
  return (
    <div className="App">
      
      <Container className="main"> 
        <Dashboard />
      </Container >
    </div>
  );
}

export default App;
