import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Header from './Components/Header/Header';
import Items from './Pages/Items/Items';
import { AppContext } from './Context/ContextApi';
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
      let data = JSON.parse(localStorage.getItem('token'))
      setToken(data)
      setUser(data);
    }
    
  }, [])
  
  return (
    <AppContext>
    <BrowserRouter>
    <Header/>
      <Routes>
        <Route path='/' exact element={<Home/>}/>
        <Route path='/product/:id' element={<Items/>}/>
        <Route path='/login' element={<Login setToken={setToken}/>}/>
        {token ? <Route path='/quiz' element={<QuizHome/>}/> : ""}
        <Route path='/test/:quizNo' element={<Quiz/>}/>
        {user?.user?.email === "admin@pft.com" ? <Route path='admin' element={<Admin userData={user.user}/>}/> : ""}
        
        
      </Routes>
    </BrowserRouter>
    </AppContext>   
  );
}

export default App;
