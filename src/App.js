
import './App.css';
import Home from './pages/Home';
import SingleMovie from './components/SingleMovie';
import Error from './components/Error';
import { Routes, Route} from 'react-router-dom';

function App() {
  return (
    <>
    
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='movie/:id' element={<SingleMovie />} />
            <Route path='*' element={<Error />} />
        </Routes>
   
      
    </>
  );
}

export default App;
