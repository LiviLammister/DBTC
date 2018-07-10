import 'react-dates/initialize'
import 'react-dates/lib/css/_datepicker.css'

import moment                   from 'moment'
import PropTypes                from 'prop-types'
import React, { Component }     from 'react'
import { DayPickerRangeController, isSameDay } from 'react-dates'

moment().format()

const Calendar = (props) => {
    const {dates} = props
    const datesList = dates.map(date => moment(date))
    return (
      <DayPickerRangeController
        hideKeyboardShortcutsPanel
        keepOpenOnDateSelect
        numberOfMonths={2}
        isDayHighlighted={day1 => datesList.some(day2 => isSameDay(day1, day2))}
        isOutsideRange={() => false}
        noBorder={true}
      />
    )
  }

Calendar.propTypes = {dates: PropTypes.arrayOf(PropTypes.string)}

export default Calendar