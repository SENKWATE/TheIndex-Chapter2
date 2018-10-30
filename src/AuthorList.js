import React, {Component} from 'react';
import AuthorCard from "./AuthorCard"

class AuthorList extends Component{
  render(){
    let authCards = this.props.authors.map(author => ( <AuthorCard author = {author} key = {author.first_name}/>

    ));
    console.log(this.props.authors);
    return(
      <div>
      <div className="authors">
        <h3>Authors</h3>
        <div className="row">
      {authCards}

      </div>
      </div>
      </div>

    );
  }
}

export default AuthorList;
