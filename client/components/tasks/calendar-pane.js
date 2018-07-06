import React, { Component } from 'react'
import { SingleDatePicker } from 'react-dates'
import moment from 'moment'
import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css'

moment().format()

class CalendarPane extends Component {
  constructor() {
    super()
    this.state = {
      date: null,
      focused: false
    }
  }

  render() {
    return (
      <SingleDatePicker
        inputIconPosition="after"
        small={true}
        block={false}
        numberOfMonths={1}
        date={this.state.date}
        onDateChange={date => this.handleDateChange(date)}
        focused={this.state.focused}
        onFocusChange={({ focused }) =>
          this.setState({ focused })
        }
        openDirection="up"
        hideKeyboardShortcutsPanel={true}
      />
    )
  }
}

export default CalendarPane
