// Code CoordinatesButton Component Here
import React, {Component} from 'react'

export default class CoordinatesButton extends Component {

handleClick = (event) => {
  //be sure to take event as arg!, don't need to pass in
  const data = [event.clientX, event.clientY]
  this.props.onReceiveCoordinates(data)
}

  render() {
    return (
      <button
        onClick={this.handleClick}
      />
    )
  }
}
