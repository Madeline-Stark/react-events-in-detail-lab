import React, {Component} from 'react'

export default class DelayedButton extends Component {

handleClick = (event) => {
  //function passed in as prop
  //need arrow function below to preserve this to access this.props.onDelayedClick
  event.persist() //need to persist b/c of pooling/because passing it to an anonymous arrow function below
  setTimeout(() => this.props.onDelayedClick(event), this.props.delay)
}

  render(){
    return (
      <button
        onClick={this.handleClick}
      />
    )
  }
}
