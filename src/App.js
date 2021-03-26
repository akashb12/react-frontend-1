
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'
import NavBar from './components/NavBar/NavBar';
import Skills from './components/Skills/Skills';
import About from './components/About/About';
import Education from './components/Education/Education';
import Work from './components/Work/Work';
import Experience from './components/Experience/Experience';

function App() {
  return (
    <>
    <Router>
    <NavBar />
    <About />
    <Education />
      <Skills />
      <Work />
      <Experience />
    <Switch>

    {/* <Route path='/about' exact component={About} />
    <Route path='/skills' exact component={Skills} />
    <Route path='/education' exact component={Education} />
    <Route path='/work' exact component={Work} /> */}
    </Switch>
    </Router>
    </>
  );
}

export default App;
