import React from 'react'

export default class ShowList extends React.Component {
  render() {
    return (
      <div>
        <h2>Friends</h2>
        <ul>
        {this.props.names2.map(item => 
          <li key={item}>{item}</li>
        )}
        </ul>
      </div>
    );
  }
}
ShowList.defaultProps = {
  names2: []
}
ShowList.propTypes = {
  names2: React.PropTypes.array.isRequired
}