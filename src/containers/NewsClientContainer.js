import React, {Component} from 'react';
import TitleBar from '../components/TitleBar';
import Latest from '../components/Latest'


class NewsClientContainer extends Component{
  constructor(props){
    super(props);
    this.state={
      storyLinks:[],
      storyDetails:[],
      headlines:[]
    }
  }

  componentDidMount() {
    this.loadStories(this.props.storyLinks[0].url)
    // this.loadStoryDetails();
  }

  loadStories(url) {
    fetch(url)
      .then(res => res.json())
      .then(storyLinksList => {
        this.setState({ storyLinks: storyLinksList})
        this.loadStoryDetails()
      })
      .catch(err => console.error);
  }

  loadStoryDetails(){
    const urls = this.state.storyLinks.slice(0,20).map((storyId, index) => {
      return(
        `https://hacker-news.firebaseio.com/v0/item/${storyId}.json`
        // this.props.storyLinks[1].url
      )
    })
    let promises = urls.map(url => {
      return fetch(url)
      .then(res => res.json())
    })

    Promise.all(promises).then(dataList => {

      // this.story = data

      let headlines = [];

      for(let dataCount = 0; dataCount < dataList.length; dataCount++){
        // this.outputStoryHeadline(dataList[dataCount]);//.title
        // {dataList[dataCount].title}
          headlines.push(dataList[dataCount].title)


        }
        debugger;
      this.setState({headlines:headlines});
      // this.setState({ storyDetails: dataList});
      debugger;

    })
debugger;


  }

  render() {
    return(

      <div>
        <TitleBar
          // handleSelectChange={this.handleSelectChange}
          storyLinks={this.props.storyLinks}
        />
        // {this.state.headlines}
        <p>{this.props.storyHeadlines}</p>

        <Latest storyHeadlines = {this.props.storyHeadlines}/>

      </div>
    )

  }
}
export default NewsClientContainer;
