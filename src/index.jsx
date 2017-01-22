import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import _ from 'lodash';
import Config from './Configuration';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';

//Define an APP component als a class component
class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            videos: [],
            selectedVideo: null
        };

        this.videoSearch('family guy');
    }

    videoSearch(searchTerm) {
        YTSearch({key: Config.YOUTUBE_API_KEY, term: searchTerm}, (videos) => {
            this.setState({
                //es6 shortcut (Shorthand property names) for
                //this.setState({videos:videos});
                //https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Operators/Object_initializer#Creating_objects
                videos,
                selectedVideo: videos[0]
            });
        });

    };

    render() {
        const videoSearchDebounce = _.debounce(searchterm => this.videoSearch(searchterm), 300);
        return (
            <div>
                <SearchBar onSearchTermChanged={videoSearchDebounce}/>
                <VideoDetail video={this.state.selectedVideo}/>
                <VideoList
                    onVideoSelect={selectedVideo => this.setState({selectedVideo})}
                    videos={this.state.videos}/>
            </div>
        );
    }
}

// Render the APP Component to the DOM
ReactDOM.render(<App/>, document.querySelector('.container'));