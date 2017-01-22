import React, {Component} from 'react';

// Class component
// Contains state
class SearchBar extends Component {
    constructor(props) {
        super(props);

        this.state = {searchTerm: ''}
    }


    render() {
        return (
            <div className="search-bar">
                <input
                    value = {this.state.searchTerm}
                    onChange={event => this.onInputChange(event.target.value)}/>
            </div>
        )
    }

    onInputChange(searchTerm){
        this.setState({searchTerm});
        this.props.onSearchTermChanged(searchTerm);
    }

}

export default SearchBar;