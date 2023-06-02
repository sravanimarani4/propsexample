import React from "react";

function Movies(props){
    return(
      <div>
        <h1>{props.title}</h1>
        <img src={props.imageUrl} alt=""/>
      </div>
    )
  
  }
  export default Movies;