import React from 'react'
import AddFriend from './addfriend.js'
import ShowList from './showlist.js'
import AddFriend2 from './addfriend2.js'
import ShowList2 from './showlist2.js'

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      note: this.props.note,
      name: this.props.name[0]+ " " + this.props.name[1],
      friends: this.props.friends,
      note2: this.props.note2,
      name2: this.props.name2[0]+ " " + this.props.name2[1],
      friends2: this.props.friends2
    }
  }
  addFriend(friend) {
    this.setState({
      friends: this.state.friends.concat([friend])
    });
  }
  addFriend2(friend) {
    this.setState({
      friends2: this.state.friends2.concat([friend])
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

        <h1 style={myStyle2}>{this.state.note2}</h1>
        <h2 style={myStyle3}>Name: &nbsp;&nbsp;{this.state.name2}</h2>
        <AddFriend2 addNew={this.addFriend2.bind(this)} />
        <ShowList2 names={this.state.friends2} />
      </div>
    );
  }
}
App.defaultProps = {
  note: "Creating an interactive App in ReactJS.",
  name: ['Isaac', 'Newton'],
  friends: [
    'Renee Descartes',
    'Edmund Halley',
    'Robert Hooke',
    'Gottfried von Leibniz',
    'Anonymous Friend',
    'Big Fan'
  ],
  note2: "Another Example.",
  name2: ['Albert', 'Einstein'],
  friends2: [
    'Batman',
    'Superman',
    'Wonderwoman',
    'Leonardo',
    'MichaelAngelo',
    'Raphael',
    'Donatello'
  ]
}
App.propTypes = {
  note: React.PropTypes.string,
  name: React.PropTypes.array.isRequired,
  friends: React.PropTypes.array.isRequired,
  note2: React.PropTypes.string,
  name2: React.PropTypes.array.isRequired,
  friends2: React.PropTypes.array.isRequired
}