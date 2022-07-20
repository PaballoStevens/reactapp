
import React, { useState } from "react";
import axios from 'axios';


function Home(){
  const [RecordInput, setRecord] = useState({
   name : '',
  })
   
  const handleInput = (e) => {
    e.persist();
    setRecord({RecordInput,[e.target.name]: e.target.value});
  }

  const Submit = (e) => {
    e.preventdefault();
    const data = {
      name:RecordInput.name
    }
    
      
  }

    return(
        <form onSubmit={Submit}>
          <input type="text" name="name" onChange={handleInput} value={RecordInput.name} />

        </form>
    );
}

export default Home;