import { useState,useEffect } from 'react'
import './App.css'
import CreateToDo from './components/CreateToDo'
import Todos from "./components/Todos"
import axios from "axios";


function App() {
  const [todos, setTodos] = useState([])
  useEffect(() => {
    // Fetch data when component mounts
    
  }, []); 

  
  return (
    <>

      <CreateToDo></CreateToDo>
      <Todos todos={todos}></Todos>
    </>
      
  )
}

export default App
