import React from 'react'
import ReactDOM from 'react-dom'
import AddFriend from './Components/addfriend.js'

//This is an ES6 based ReactJS code

class FriendsList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      note: this.props.note,
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
FriendsList.defaultProps = {
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
FriendsList.propTypes = {
  note: React.PropTypes.string,
  name: React.PropTypes.array.isRequired,
  friends: React.PropTypes.array.isRequired
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
