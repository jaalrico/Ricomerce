import  'bootstrap/dist/css/bootstrap.min.css' ;
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer';


function App() {
 
  return (
    <div className="App">
    <Navbar />
    <ItemListContainer greeting={"Bienvenidos"} />
    </div>
  )
}

export default App
