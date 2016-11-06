import React from 'react';
import ReactDOM from 'react-dom';

var FriendsList = React.createClass({
  getInitialState: function() {
    return {
      name: 'Isaac Newton',
      friends: [
      'Renee Descartes',
      'Edmund Haley',
      'Robert Hooke ?',
      'Gottfried von Leibniz ?'
      ]
    };
  },
  addFriend: function(friend) {
    this.setState({
      friends:  this.state.friends.concat([friend])
    });
  },
  render: function() {
  	return (
  	  <div>
  	    <h2>{this.state.name}</h2>
  	    <AddFriend addNew={this.addFriend} />
  	    <ShowList names={this.state.friends} />
  	  </div>
  	);
  }
});

var AddFriend = React.createClass({
  getInitialState: function() {
  	return {
      newFriend: ''
    };
  },
  propTypes: {
  	addNew: React.PropTypes.func.isRequired
  },
  updateNewFriend: function(e) {
    this.setState({
      newFriend: e.target.value
    });
  },
  handleAddFriend: function() {
    this.props.addNew(this.state.newFriend);
    this.setState({
      newFriend: ''
    });
  },
  render: function() {
  	return (
  	  <div>
  	    <input type="text" onChange={this.updateNewFriend} />
  	    <button onClick={this.handleAddFriend}>Add a Friend</button>
  	  </div>
  	);
  }
});

var ShowList = React.createClass({
  getDefaultProps: function() {
  	names: []
  },
  render: function() {
  	var listItems = this.props.names.map(function(item) {
      return <li key={item}>{item}</li>
  	});
  	return (
  	  <div>
  	    <h2>Friends ?</h2>
  	    <ul>{listItems}</ul>
  	  </div>
  	);
  }
});

ReactDOM.render(
  <FriendsList />, document.getElementById('root')
); 