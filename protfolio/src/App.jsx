import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './components/Home'
import Header from './components/Header'
import Footer from './components/Footer'
import AboutMe from './components/AboutMe'
import Project from './components/Project'
import Contact from './components/Contact'
function App() {

  return (
    <>
      <Router>
        <Header/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/aboutme' element={<AboutMe/>}/>
          <Route path='/project' element={<Project/>}/>
          <Route path='/contact' element={<Contact/>}/>
        </Routes>
        <Footer/>
      </Router>
    </>
  )
}

export default App
