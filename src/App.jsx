import { useState } from 'react'

let nextid = 1;

let Initartists = [
{id: 0, name: 'Ram Mohan Bismil'},
{id: 1, name: 'Subhash Bose'}
];

function App() {
  const [name, setName] = useState('');
  const [artists, setArtist] = useState(Initartists);

  const array = artists.map(person => 
    <li key={person.id}> {person.name} </li>

  )
  return (
    <>
      <h1>Inspiring People:</h1>

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