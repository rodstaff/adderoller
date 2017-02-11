import React from 'react'

export default class ShowList2 extends React.Component {
  render() {
    return (
      <div>
        <h2>List</h2>
        <ul>
        {this.props.names.map(item => 
          <li key={item}>{item}</li>
        )}
        </ul>
      </div>
    );
  }
}
ShowList2.defaultProps = {
  names: []
}
ShowList2.propTypes = {
  names: React.PropTypes.array.isRequired
}