import React, {Component} from 'react';

// class Latest extends Component {
const Latest = (props) =>{

//   render(){
//     const altTag = `${this.props.title} by ${this.props.artist}`;
// }

  

    return (
      <div className="latest">
      <p>Welcome to Latest</p>
      {props.storyLinks.map((storyId, index) => {
        return(
          <p>{storyId}</p>
        )
    })}



      </div>
    );

};

export default Latest;
