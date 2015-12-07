import React from 'react';

class Form extends React.Component {
  onsubmit(e){
    e.preventDefault();

    let newBookmark = {
      madeAt:Date.now(),
      name:this.refs.name.value,
      url:this.refs.url.value
    };
    this.props.addBookmark(newBookmark);
    this.refs.name.value='';
    this.refs.url.value='';
  }
  render(){
    return(
    <div>
      <h1> Input </h1>
      <form onSubmit = {this.onsubmit.bind(this)}>
        <input type="text" ref="name" required />
        <input type="text" ref="url" required />
        <button type="submit" ref="url" required>Add to Bookmarks! </button>
      </form>
    </div>
    )
  }
}

export default Form;
