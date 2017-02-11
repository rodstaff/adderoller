import React from 'react'

export default class AddList extends React.Component {
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
        <button onClick={this.handleAddFriend.bind(this)}>Add List</button>
      </div>
    );
  }
}
AddList.defaultProps = {
  newFriend: ''
}
AddList.propTypes = {
  addNew: React.PropTypes.func.isRequired
}
