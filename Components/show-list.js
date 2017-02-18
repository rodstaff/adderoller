import React from 'react'

export default class ShowList extends React.Component {
  render() {
    return (
      <div>
        <h2>Friends List</h2>
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
