import React, { Component } from 'react';
import NewsClientContainer from './containers/NewsClientContainer';

class App extends Component {
  render() {
    const storyLinks = [
      {name: "Latest", url: "https://hacker-news.firebaseio.com/v0/topstories.json"},
      {name: "Details", url: "https://hacker-news.firebaseio.com/v0/item/${storyId}.json" }
    ]

    const storyDetails = []
    return (
      <NewsClientContainer storyLinks={storyLinks} storyDetails={storyDetails}/>
    );
  }
}

export default App;
