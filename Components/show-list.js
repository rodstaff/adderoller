import React from 'react'

export default class ShowList extends React.Component {
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