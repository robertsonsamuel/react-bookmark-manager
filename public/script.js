import React from 'react';
import ReactDOM from 'react-dom';


class BookmarkField extends React.Component {
  render(){
    return(
      <div>
       <input type="text" />
       <button id="addButton" />
    </div>
    )
  }
 };




ReactDOM.render(<BookmarkField />, document.getElementById('reactApp'));

