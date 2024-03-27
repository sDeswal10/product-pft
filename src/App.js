import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Header from './Components/Header/Header';
import Items from './Pages/Items/Items';
import { AppContext } from './Context/ContextApi';
import Quiz from './Pages/Quiz/Quiz';

function App() {
  return (
    <AppContext>
    <BrowserRouter>
    <Header/>
      <Routes>
        <Route path='/' exact element={<Home/>}/>
        <Route path='/product/:id' element={<Items/>}/>
        <Route path='/quiz' element={<Quiz/>}/>
      </Routes>
    </BrowserRouter>
    </AppContext>   
  );
}

export default App;
