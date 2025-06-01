
import { Outlet } from 'react-router-dom'
import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'

function App() {

  return (
    <>
    
    <ScrollToTop/>

      <Header/>

      <div className='w-full h-full'>
        <Outlet/>
      </div>

      <Footer/>
      
    </>
  )

}

export default App
