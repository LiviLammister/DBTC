import moment                   from 'moment'
import PropTypes                from 'prop-types'
import React, { Component }     from 'react'
import { DayPicker, isSameDay } from 'react-dates'

import 'react-dates/initialize'
import 'react-dates/lib/css/_datepicker.css'

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
      <DayPicker
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
        noBorder={true}
      />
    )
  }
}

Calendar.propTypes = {dates: PropTypes.arrayOf(PropTypes.string)}

export default Calendar