import React from 'react'
import {BrowserRouter as Router, Routes,Route,Link} from "react-router-dom"
import home from './home'
import about from './about'

function BasicRouting() {
  return (
    <Router>
    <div>
      <Routes>
        <Route path='/home' exact element={home}/>
        <Route path='/about' exact element={about}/>
      </Routes>
    </div>
    </Router>
  )
}
