
import React, {Component} from 'react';
import ReactDom from 'react-dom';

import SearchBar from './components/search_bar';
import VideoList from './components/video_list'

import YTSearch from 'youtube-api-search';
const API_KEY = 'AIzaSyB9sYidKEH2puSu4P_SeB1Um0gheRxFvw8';


// create a new component and this produce some HTML

class App extends Component {
constructor(props)
{
  super(props);
  this.state  = {videos:[]};
  
YTSearch({key: API_KEY, term: 'surfboards'} , (videos)=>{
  this.setState({videos});
//ES6 this.setState({video:videos})
});
}


render () {
  return  (
  <div>
  <SearchBar />
  <VideoList videos={this.state.videos}/>
</div>
);
}
}


//Take this component HTML and put in the DOM
ReactDom.render(<App />,document.querySelector('.container'));



