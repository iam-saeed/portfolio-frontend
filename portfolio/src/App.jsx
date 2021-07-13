import React, { useState } from 'react'
import Contact from './components/contact/Contact'
import Intro from './components/intro/Intro'
import Portfolio from './components/portfolio/Portfolio'
import About from './components/about/About'
import Topbar from './components/topbar/Topbar'
import Services from './components/services/Services'
import './app.scss'
import Menu from './components/menu/Menu'

function App() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
  <div className='app'>
    <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
    <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
    <div className="sections">
      <Intro />
      <Portfolio />
      <Services />
      <About />
      <Contact />
    </div>
  </div>
  )
}

export default App;
