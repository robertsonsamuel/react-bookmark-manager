'use strict';
import React from 'react';
import ReactDOM from 'react-dom';
import Form from './Form';


var bookmarks ={
  Facebook: {url:'http://www.facebook.com'},
  Myspace: {url:'http://www.myspace.com'},
  Flicker:{url:'http://www.flicker.com'}
};


class BookmarkList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data:[
        {"madeAt": 1449445818815, "name": "Facebook", "url":  "http://www.facebook.com" },
        {"madeAt": 1449445818845, "name": "Myspace", "url": "http://www.myspace.com" }
      ]};
  }


  addBookmark(newBookmark) {
    let newData = this.state.data.concat(newBookmark);
    this.setState({data:newData});
  }
  render(){
    let data  = this.state.data;
    let bookmarkList = data.map((bookmark, index) => {
      return <li key={index}> <a href={bookmark.url}>{bookmark.name}</a></li>
    });
    return(
      <div>
        <h1> Bookmarks! </h1>
      <Form  addBookmark={this.addBookmark.bind(this)} />
        <ul>{bookmarkList}</ul>

      </div>
    )
  }
}

class App extends React.Component {
  render(){
    return(
    <div>
      <BookmarkList />
      </div>
    )
  }
}



ReactDOM.render(<App />, document.getElementById('reactApp'));
