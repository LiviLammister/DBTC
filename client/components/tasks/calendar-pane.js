import 'react-dates/initialize'
import 'react-dates/lib/css/_datepicker.css'

import React, { Component } from 'react'
import { SingleDatePicker } from 'react-dates'
import moment from 'moment'

moment().format()

class CalendarPane extends Component {
  state = {
    date: new moment(),
    focused: true
  }

  onChange = date => this.setState({ date })

  render() {
    return (
      <SingleDatePicker
        date={this.state.date} // momentPropTypes.momentObj or null
        onDateChange={date => this.setState({ date })} // PropTypes.func.isRequired
        focused={this.state.focused} // PropTypes.bool
        onFocusChange={({ focused }) => this.setState({ focused })} // PropTypes.func.isRequired
        id="your_unique_id" // PropTypes.string.isRequired,
      />
    )
  }
}

export default CalendarPane