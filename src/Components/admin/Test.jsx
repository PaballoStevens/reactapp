import React from 'react';
import axios from 'axios';


export default class PersonList extends React.Component {
  state = {
    persons: []
  }

  async componentDidMount() {
   await axios.get(`https://rickandmortyapi.com/api/character/?page=1`)
      .then(res => {
        const persons = res.data.results;
        this.setState({ persons });
      })
  }

  render() {
    return (
        <div>
        {
          this.state.persons
            .map(person =>
              <div key={person.id} className="card mb-3 con" >
  <div  className="row g-0">
    <div className="col-md-4">
      <img src={person.image} className="img-fluid rounded-start" alt="..."/>
    </div>
    <div className="col-md-8">
      <div className="card-body">
        <h5 className="card-title">{person.name}</h5>
        <p className="card-text">{person.gender}</p>
        <p className="card-text"><div>{person.location.name}</div></p>
        <p className="card-text">{person.origin.name}</p>
        <p className="card-text">{person.species}</p>
        <p className="position-absolute badge">{(() => {
if (person.status === "Dead") {
  return <div className="badge bg-danger ">{person.status}</div>;
} else if (person.status === "Alive") {
  return <div className=" badge bg-success ">{person.status}</div>;
}else if (person.status === "unknown") {
  return <div className=" badge bg-primary ">{person.status}</div>;
}else {
  return <div className="badge bg-secondary ">{person.status}</div>;
}
})()}</p>
        <p className="card-text"><small className="text-muted">Created {person.created}</small></p>
      </div>
    </div>
  </div>
</div>
            )
        }
        </div>

        
      
      
      
    )
  }
}