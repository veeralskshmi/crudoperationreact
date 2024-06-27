
import './App.css';
import Create from './Components/Create';
import Read from './Components/Read';
import Update from './Components/Update';
import {BrowserRouter, Routes, Route} from "react-router-dom";

function App() {
  return (
    <div className="App">
      crud operation
    <BrowserRouter>
    <Routes>
      <Route exact path='/create' element={<Create />} />
      <Route exact path='/read' element={<Read />} />
      <Route exact path='/update' element={<Update />} />
    </Routes>
    </BrowserRouter>
   
    </div>
  );
}

export default App;
