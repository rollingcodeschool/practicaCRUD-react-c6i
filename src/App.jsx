import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Inicio from './components/views/Inicio'
import Administrador from './components/views/Administrador'
import Error404 from './components/views/Error404'

function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route exact path='/' element={<Inicio></Inicio>}></Route>
          <Route exact path='/administrador' element={<Administrador></Administrador>} />
          {/* <Route exact path='/footer' element={<Footer></Footer>} /> */}
          <Route path='*' element={<Error404></Error404>} />
        </Routes>
    </BrowserRouter>
  );
}

export default App;
