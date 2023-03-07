
import { Route, Routes } from 'react-router'
import { ToastContainer } from 'react-toastify'

import Header from './components/Header/Header'
import Home from './pages/Home'
import Posts from './pages/Posts'
import Error404 from './pages/Error404'


function App() {


  return (
  <>
    <ToastContainer position="top-right"></ToastContainer>
    <Header/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/posts" element={<Posts/>}/>
      <Route path='*' element={<Error404/>}/>
    </Routes>
    </>
  )
}

export default App
