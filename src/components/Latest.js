import React, {Component} from 'react';

// class Latest extends Component {
const Latest = (props) =>{

//   render(){
//     const altTag = `${this.props.title} by ${this.props.artist}`;
// }



    return (
      <div className="latest">
        <p>Welcome to Latest</p>

       {props.storyHeadlines.map((headlines, index) => {
         // console.log(headlines);
         return(
          <p>headlines.first()
          </p>
        )
    })}
      {props.storyHeadlines}
      </div>
    );

};

export default Latest;
