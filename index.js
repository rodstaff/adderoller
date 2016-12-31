import React from 'react'
import ReactDOM from 'react-dom'

//This is an ES6 based ReactJS code

class FriendsList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: this.props.name[0]+ " " + this.props.name[1],
      friends: this.props.friends
    }
  }
  addFriend(friend) {
    this.setState({
      friends: this.state.friends.concat([friend])
    });
  }
  render() {
    return (
      <div>
        <h2>Name: &nbsp;&nbsp;{this.state.name}</h2>
        <AddFriend addNew={this.addFriend.bind(this)} />
        <ShowList names={this.state.friends} />
      </div>
    );
  }
}
FriendsList.defaultProps = {
  name: ['Isaac', 'Newton'],
  friends: [
    'Renee Descartes',
    'Edmund Halley',
    'Robert Hooke',
    'Gottfried von Leibniz',
    'Anonymous Friend',
    'Big Fan'
  ]
}
FriendsList.propTypes = {
  name: React.PropTypes.string.isRequired,
  friends: React.PropTypes.array.isRequired
}

class AddFriend extends React.Component {
  updateNewFriend(e) {
    this.setState({
      newFriend: e.target.value
    });
  }
  handleAddFriend() {
    this.props.addNew(this.state.newFriend);
    this.setState({
      newFriend: ''
    })
  }
  render() {
    return (
      <div>
        <input type="text" onChange={this.updateNewFriend.bind(this)} placeholder="Type new friend here" />
        <button onClick={this.handleAddFriend.bind(this)}>Add Friend</button>
      </div>
    );
  }
}
AddFriend.defaultProps = {
  newFriend: ''
}
AddFriend.propTypes = {
  addNew: React.PropTypes.func.isRequired
}

// class ShowList extends React.Component {
//   render() {
//     var listItems = this.props.names.map((item) => {
//       return <li key={item}>{item}</li>
//     })
//     return (
//       <div>
//         <h3>Friends</h3>
//         <ul>{listItems}</ul>
//       </div>
//     );
//   }
// }
class ShowList extends React.Component {
  render() {
    return (
      <div>
        <h2>Friends</h2>
        <ul>
        {this.props.names.map(item => 
          <li key={item}>{item}</li>
        )}
        </ul>
      </div>
    );
  }
}
ShowList.defaultProps = {
  names: []
}
ShowList.propTypes = {
  names: React.PropTypes.array.isRequired
}

ReactDOM.render(
  <FriendsList />, document.getElementById('root')
); 
