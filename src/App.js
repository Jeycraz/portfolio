import './App.css';
import { useEffect, useState } from 'react';
import Header from './src/Component/headerComponent/Header';
import Home from './src/Component/Page Component/Home';
import Portfolio from './src/Component/Portfolio Component/Portfolio Component/Portfolio';
import { Routes, Route } from 'react-router-dom';
import Contact from './src/Component/Contact Component/Form'
import Thesis from './src/Component/Thesis Component/Thesis';
import Headeredit from './src/Component/headerComponent_edited/Headeredit';
import Modal from './src/Component/Popup Component/Modal'

function App() {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    const interval = setTimeout(() => {
      setIsOpen(true)
    }, 3000)

    return () => clearTimeout(interval);
  }, [])


  return (
    <Routes>
      <Route path='/' element={
        <div className="App">
          <Headeredit />
          <Modal open={isOpen} onClose={() => setIsOpen(false)}>This is a portal</Modal>
          <Home />

        </div>}>
      </Route>

      <Route path='/portfolio' element={
        <div className="App">
          <Headeredit />
          <Portfolio />
        </div>}>
      </Route>

      <Route path='/thesis' element={
        <div className="App">
          <Headeredit />
          <Thesis />
        </div>}>
      </Route>

      <Route path='/contact' element={
        <div className="App">
          <Headeredit />
          <Contact />
        </div>}>
      </Route>
    </Routes >
  );
}

export default App;
