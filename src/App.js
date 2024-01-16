import { BrowserRouter as Router , Route , Routes} from 'react-router-dom';
import Home from './pages/Home';
import EditeBook from './pages/EditeBook';
import ShowBook from './pages/ShowBook'
import CreateBook from './pages/CreateBook'
import DeleteBook from './pages/DeleteBook';
function App() {
  return (
    <div className='bg-gray-100 h-auto'>
      <Router>
        <Routes>

        <Route path='/' element={<Home/>}/>
        <Route path='/books/delete/:id' element={<DeleteBook/>}/>
        <Route path='/books/create' element={<CreateBook/>}/>
        <Route path='books/details/:id' element={<ShowBook/>}/>
        <Route path='/books/edit/:id' element={<EditeBook/>}/>

        </Routes>
      </Router>
    </div>
  );
}


export default App;
