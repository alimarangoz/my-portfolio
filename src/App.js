import './App.css';
import {NavBar} from './components/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Banner } from './components/Banner'
import { Skills } from './components/Skills';
import { Experiences } from './components/Experiences';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <Skills />
      <Experiences />
    </div>
  );
}

export default App;
