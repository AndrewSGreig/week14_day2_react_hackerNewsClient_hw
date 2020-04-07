import React from 'react';

const TitleBar = (props) =>{
  return (
    <div>
      <h1>Hacker News</h1>
      <select onChange={props.handleSelectChange}>
        {props.storyLinks.map(storyLinks => {
          return <option key={storyLinks.name} value={storyLinks.url}>{storyLinks.name}</option>
        })}
      </select>
    </div>
  );
};

export default TitleBar;
