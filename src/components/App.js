import React from "react";
import unsplash from "../api/unsplash";
import SearchBar from "./SearchBar";
import ImageList from "./imageList";

class App extends React.Component {
state={Images: []};

   onSearchSubmit = async(term) =>{
    const response= await unsplash.get('/search/photos',{
       params: {query: term}
    });
this.setState({Images: response.data.results});
  }

  render() {
    return (
      <div className="ui container" style={{ marginTop: "20px" }}>
        <SearchBar onData={this.onSearchSubmit} />
       <ImageList Images={this.state.Images} />
      </div>
    );
  }
}

export default App;
