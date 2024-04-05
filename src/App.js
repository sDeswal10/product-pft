import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Header from './Components/Header/Header';
import Items from './Pages/Items/Items';
import {AppContextProvider } from './Context/ContextApi';
import Quiz from './Pages/Quiz/Quiz';
import Login from './Pages/Login/Login';
import { useEffect, useState } from 'react';
import QuizHome from './Pages/Quiz/QuizHome';
import Admin from './Pages/Admin/Admin';

function App() {
  const [token, setToken] = useState(false);
  const [user, setUser] = useState();

  if(token){
    localStorage.setItem('token',JSON.stringify(token))
  }

  useEffect(() => {
    if(localStorage.getItem('token')){
      let data = JSON.parse(localStorage.getItem('token'));
      setToken(data)
      setUser(data);
    }
    
  }, [])
  
  return (
    <AppContextProvider>
    <BrowserRouter>
    <Header/>
      <Routes>
        <Route path='/' exact element={<Home/>}/>
        <Route path='/product/:id' element={<Items/>}/>
        <Route path='/login' element={<Login setToken={setToken}/>}/>
        <Route path='/quiz' element={token ? <QuizHome/> : <Home/>}/>
        <Route path='/test/:quizNo' element={<Quiz/>}/>
        <Route path='/admin' element={user?.user?.email === "admin@pft.com" ? <Admin/> : <QuizHome/>}/>       
        
      </Routes>
    </BrowserRouter>
    </AppContextProvider>   
  );
}

export default App;
