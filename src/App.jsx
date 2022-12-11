
import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from "./pages/Home"
import About from './pages/About';
import Contact from './pages/Contact';
import Nav from './components/Nav';
function App() {


  return (
    <div>

      <Router>
        <Nav></Nav>
       <Routes>
         <Route path='/' element={<Home></Home>}></Route>
         <Route path='/About' element={<About></About>}></Route>
         <Route path='/Contact' element={<Contact></Contact>}/>
          
       </Routes>
      </Router>
   
    </div>
  );
}

export default App;

