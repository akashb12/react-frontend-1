
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'
import NavBar from './components/NavBar/NavBar';
import HomePage from './components/HomePage/HomePage';
import Services from './components/Services/Services';

function App() {
  return (
    <>
    <Router>
    <NavBar />
    <Switch>
    <Route path='/' exact component={HomePage} />
    <Route path='/services' exact component={Services} />
    </Switch>
    </Router>
    </>
  );
}

export default App;
