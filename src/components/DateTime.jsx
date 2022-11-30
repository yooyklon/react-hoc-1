import React from "react";

import returnTimeIntervals from "../utils/returnTimeIntervals";

import createLabel from "../utils/createMessage";

export default function DateTime(props) {
  return <p className="date">{props.date}</p>;
}

function DateTimePretty(Component) {
  return class extends React.Component {
    render() {
      let dateMessage;

      const oldDate = new Date(this.props.date);
      const currentDate = new Date();

      const { days, hours, minutes } = returnTimeIntervals(
        oldDate,
        currentDate
      );

      if (days > 1) {
        dateMessage = `${days} ${createLabel(days, "days")} назад`;
      } else if (hours > 1) {
        dateMessage = `${hours} ${createLabel(hours, "hours")} назад`;
      } else {
        dateMessage = `${minutes} ${createLabel(minutes, "minutes")} назад`;
      }

      return <Component {...this.props} date={dateMessage} />;
    }
  };
}

export const DateTimeContainer = DateTimePretty(DateTime);
