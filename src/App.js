import React, { Component } from "react";
import authors from "./data";
import Sidebar from "./Sidebar"
import AuthorList from "./AuthorList"
import AuthorCard from "./AuthorCard"

class App extends Component {
  render() {
    return (
      <div id="app" className="container-fluid">
        <div className="row">
          <div className="col-2">
            <Sidebar></Sidebar>
          </div>
          <div className="content col-10">

              <AuthorList authors={authors}/>

          </div>
        </div>
      </div>
    );
  }
}

export default App;
