import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import './App.css'
import  Auth  from "./pages/auth/index.jsx"
import Chat from "./pages/chat/index.jsx"
import Profile from "./pages/profile/index.jsx"
const App = () => {
  

  return (
    <>
    
      <BrowserRouter>
         <Routes>
          <Route path='/auth' element={<Auth/>} ></Route>
          <Route path='/chat' element={<Chat/>} ></Route>
          <Route path='/profile' element={<Profile/>} ></Route>
          <Route path='/' element={<Navigate to='/auth' /> } ></Route>
        </Routes>
      </BrowserRouter>
    
    </>
  )
}

export default App
