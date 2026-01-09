import './App.css';
import Landingpage from './pages/landing.jsx';
import{Route, BrowserRouter as Router,Routes} from 'react-router-dom';

function App() {
  return (
    <>
    <Router>
      <Routes>
<Route path='/' element={<Landingpage/>}/>
      </Routes>
       
    </Router>
    </>
  );
}

export default App;
