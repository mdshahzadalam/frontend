
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Contact  from './Contact';
import CreateContact from './CreateContact';
import UpdateContact from './UpdateContact';

function App() {
  return (
    <div className="App">
       <BrowserRouter>
          <Routes>
            <Route path='/' element={<Contact />}></Route>
            <Route path='/create' element={<CreateContact />}></Route>
            <Route path='/update/:id' element={<UpdateContact />}></Route>

            
          </Routes>
       </BrowserRouter>
    </div>
  );
}

export default App;
