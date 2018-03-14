import React, { Component } from 'react'

class CategoryTitle extends Component {
  render () {
    return (
      <React.Fragment>
        <header>
          <h1>{this.props.children}</h1>
        </header>
      </React.Fragment>
    )
  }
}

export default CategoryTitle
