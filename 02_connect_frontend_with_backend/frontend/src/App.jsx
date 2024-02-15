import { useState } from 'react'
import './App.css'
import axios from 'axios'
import { useEffect } from 'react'

function App() {
  const [jokes, setJokes] = useState([])

  useEffect(()=>{
    axios.get('/api/jokes')
    .then(response => {
      console.log("Joke data received")
      setJokes(response.data)
    })
    .catch((err)=>{
      console.error(`Error: ${err}`)
    });
  },[])
 

  return (
    <>
     <h1>chai aur fullstack</h1>
     <p>JOKES: {jokes.length}</p>

     {
      jokes.map((joke,index)=>(
        <div key={joke.id}>
          <h3>{joke.title}</h3>
          <p>{joke.content}</p>
        </div>
      ))
     }
    </>
  )
}

export default App
