import React from 'react'

import Header from './Components/Header'
import About from './Components/About'
import Project from './Components/Project'
import Testimonalis from './Components/Testimonalis'
import Context from './Components/Context'
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
import Footer from './Components/Footer'

function App() {
  return (
    <div className='w-full overflow-hidden'>


   <ToastContainer/>
      <Header/>
      <About/>
      <Project/>
      <Testimonalis/>
      <Context/>
      <Footer/>
<h1 className="text-red-500 text-5xl">TAILWIND WORKING 🚀</h1>
      




     

    </div>
  )
}

export default App

//This is functionl react component