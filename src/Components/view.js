import React from 'react';
import axios from 'axios';

function App(){

    axios.get('https://rickandmortyapi.com/api/character/?page=1')
    .then(response => console.log(response.data.results))

    return(
        
        <div>View</div>
    )
}

export default App;

