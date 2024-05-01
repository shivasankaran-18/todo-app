import { useState,useEffect } from 'react'
import './App.css'
import CreateToDo from './components/CreateToDo'
import Todos from "./components/Todos"
import axios from "axios";


function App() {
  const [todos, setTodos] = useState([])
 useEffect(() => {
    // Fetch data when component mounts
    fetch("http://localhost:3000/todos")
      .then(async (response) => {
        const data = await response.json();
        setTodos(data.todos);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);
  
  return (
    <>

      <CreateToDo></CreateToDo>
      <Todos todos={todos}></Todos>
    </>
      
  )
}

export default App
