import React from 'react'
import AddFriend from './add-friend.js'
import AddList from './add-list.js'
import ShowList from './show-list.js'
import ShowList2 from './show-list2.js'

export default class FriendsList1 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      note: this.props.note,
      name: this.props.name[0]+ " " + this.props.name[1] + " " + this.props.name[2],
      friends: this.props.friends,
      list: this.props.list
    }
  }
  addFriend(friend) {
    this.setState({
      friends: this.state.friends.concat([friend])
    });
  }
  addList(list) {
    this.setState({
      list: this.state.list.concat([list])
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
        <AddList addNew={this.addList.bind(this)} />
        <ShowList names={this.state.friends} />
        <ShowList2 names={this.state.list} />
      </div>
    );
  }
}
FriendsList1.defaultProps = {
  note: "Creating an interactive App in ReactJS.",
  name: ['Abraham','Isaac', 'Jacob'],
  friends: [
    'Renee Descartes',
    'Edmund Halley',
  ],
  list: [
    'Potatoes',
    'Carrots',
    'Beans',
    'Apples',
    'Milk',
    'Cheese',
    'Chips',
    'Ketchup',
    'Coconuts'
  ]
}
FriendsList1.propTypes = {
  note: React.PropTypes.string,
  name: React.PropTypes.array.isRequired,
  friends: React.PropTypes.array.isRequired,
  list: React.PropTypes.array.isRequired
}