import React, {Component} from 'react';

class SearchBar extends Component {
  constructor(props){
    super(props);

    //this.state = {term : ''};
  }
  render() {
    return(
      <div className="search-bar">
      <input
      //value = {this.state.term}
      onChange = { event => this.kiran(event.target.value)}/>

      </div>
    );
  }

  kiran(term){
  //  this.setState({term});
    this.props.madhu(term);
  };

}
export default SearchBar;
