import React, { Component } from 'react';
import NewsClientContainer from './containers/NewsClientContainer';

class App extends Component {
  render() {
    const storyLinks = [
      {name: "Latest", url: "https://hacker-news.firebaseio.com/v0/topstories.json"},
      {name: "Details", url: "https://hacker-news.firebaseio.com/v0/item/${storyId}.json" }
    ]

    const storyHeadlines = []
    return (
      <NewsClientContainer storyLinks={storyLinks} storyHeadlines={storyHeadlines}/>
    );
  }
}

export default App;
