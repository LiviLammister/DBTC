import React, { Component } from 'react';
import Calendar from 'react-calendar';

const styles = {
  outerDiv: {
    'display': 'inline-block',
    'margin': '0px',
    'padding': '0px',
  }
}
class CalendarPane extends Component {
  state = {
    date: new Date(),
  }

  onChange = date => this.setState({ date })

  render() {
    return (
      <div style={styles.outerDiv}>
        <Calendar
          onChange={this.onChange}
          value={this.state.date}
        />
      </div>
    );
  }
}

export default CalendarPane