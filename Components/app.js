import React from 'react'
import FriendsList1 from './friends-list1'
import FriendsList2 from './friends-list2'


export default class App extends React.Component {
  render() {
    return (
      <div>
        <FriendsList1 />
        <FriendsList2 />
      </div>
    );
  }
}
