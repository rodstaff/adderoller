import React from 'react'
import AddFriend from './add-friend.js'
import ShowList from './show-list.js'

export default class FriendsList1 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      note: this.props.note,
      name: this.props.name[0]+ " " + this.props.name[1],
      friends: this.props.friends,
    }
  }
  addFriend(friend) {
    this.setState({
      friends: this.state.friends.concat([friend])
    });
  }
  render() {
    const myStyle1 = {
      borderStyle:  "solid",
      borderWidth: 5,   //outside <div>
      marginLeft: 150,
      marginRight: 100,
      marginTop: 50,
      paddingLeft: 20,  //inside <div>
      paddingTop: 5
    }
    const myStyle2 = {
      color: "indigo",
      fontSize: 50
    }
    const myStyle3 = {
      color: "brown",
      fontSize: 40
    }
    return (
      <div style={myStyle1}>
        <h1 style={myStyle2}>{this.state.note}</h1>
        <h2 style={myStyle3}>Name: &nbsp;&nbsp;{this.state.name}</h2>
        <AddFriend addNew={this.addFriend.bind(this)} />
        <ShowList names={this.state.friends} />
      </div>
    );
  }
}
FriendsList1.defaultProps = {
  note: "Creating an interactive App in ReactJS.",
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
FriendsList1.propTypes = {
  note: React.PropTypes.string,
  name: React.PropTypes.array.isRequired,
  friends: React.PropTypes.array.isRequired
}