import { useState } from 'react'

let nextid = 1;

let Initartists = [
{id: 0, name: 'Ram Mohan Bismil'},
{id: 1, name: 'Subhash Bose'},
{id: 2, name: 'Mohan'},
{id: 3, name: 'Sohan'},
{id: 4, name: 'Suhail'}

];

function App() {
  const [name, setName] = useState('');
  const [artists, setArtist] = useState(Initartists);

  // Deleting objects
  const array = artists.map(person => 
    <li key={person.id}> {person.name} <button onClick={() => {
      setArtist(artists.filter((a) => a.id !== person.id
        
      ))
    }}>Delete</button> </li>

  )

  return (
    <>
      <h1>Inspiring People:</h1>

      {/* Adding objects */}
      <input value = {name} onChange = {e => setName(e.target.value)} placeholder='Enter text' type='text'/>
      <button onClick={() => {setArtist([
        ...artists,
        {id: nextid++, name: name}
        ])
      }}>Submit </button>

      <ol> {array} </ol>
    </>


  )
}

export default App;