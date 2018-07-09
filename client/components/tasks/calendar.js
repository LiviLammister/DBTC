import 'react-dates/initialize'
import 'react-dates/lib/css/_datepicker.css'

import React, { Component } from 'react'
import { SingleDatePicker, isSameDay } from 'react-dates'
import moment from 'moment'

moment().format()

class Calendar extends Component {
  constructor() {
    super()
    this.state = {
      date: new moment(),
      focused: true
    }
  }

  render() {
    const {dates} = this.props
    const datesList = dates.map(date => moment(date))
    return (
      <SingleDatePicker
        date={this.state.date}
        focused={this.state.focused}
        id="your_unique_id"
        hideKeyboardShortcutsPanel
        keepOpenOnDateSelect
        onDateChange={date => this.setState({ date })}
        onFocusChange={({ focused }) => this.setState({ focused })}
        numberOfMonths={2}
        isDayHighlighted={day1 => datesList.some(day2 => isSameDay(day1, day2))}
        isOutsideRange={() => false}
      />
    )
  }
}

export default Calendar