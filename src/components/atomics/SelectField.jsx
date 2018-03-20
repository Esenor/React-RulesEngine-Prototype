import React, { Component } from 'react'

/**
 * SelectField component
 */
class SelectField extends Component {
  render () {
    return (
      <React.Fragment>
        <select
          id={this.props.id}
          name={this.props.id}
          key={this.props.id}
          className={(this.props.isOnError) ? 'error_field' : null}
          defaultValue={this.props.defaultValue}
          onChange={this.props.onChange}
        >
          {this.props.values.map((value) => {
            return (<option key={value.id} value={value.id} >{value.label}</option>)
          })}
        </select>
      </React.Fragment>
    )
  }
}

SelectField.defaultProps = {
  id: null,
  isOnError: false,
  defaultValue: '',
  values: [],
  onChange: null
}

export default SelectField
