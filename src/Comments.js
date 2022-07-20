import React from "react";

export default class Comments extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        error: null,
        isLoaded: false,
        comments: []
      };
    }
  
    componentDidMount() {
      fetch("http://localhost:8000/api/comments/")
        .then(res => res.json())
        .then(
          (result) => {
            this.setState({
              isLoaded: true,
              comments: result
            });
          },
         
          (error) => {
            this.setState({
              isLoaded: true,
              error
            });
          }
        )
    }
  
    render() {
      const { error, isLoaded, comments } = this.state;
      if (error) {
        return <div>Error: {error.message}</div>;
      } else if (!isLoaded) {
        return <div>Loading...</div>;
      } else {
        return (
          <ul>
            {comments.map(item => (
              <li key={item.id}>
                {item.name} {item.text}
              </li>
            ))}
          </ul>
        );
      }
    }
  }