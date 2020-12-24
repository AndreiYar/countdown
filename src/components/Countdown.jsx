import React, { useEffect, useState, useCallback } from 'react';
import moment from 'moment';
import momentDurationFormatSetup from 'moment-duration-format';

const Countdown = ({ date }) => {
    const calculateTimeLeft = useCallback(({ date }) => {
        const now = moment();
        const birthday = moment(date);

        const milliseconds = birthday.diff(now);

        const duration = moment.duration(milliseconds);

        if (duration > 0) {
            const formatedTime = moment.duration(duration, "seconds").format("dd:hh:mm:ss");

            const [days, hours, minutes, seconds] = formatedTime.split(':');

            return {
                days,
                hours,
                minutes,
                seconds,
            };
        }

        return {
            days: '00',
            hours: '00',
            minutes: '00',
            seconds: '00',
        };
    }, [date]);

    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft({ date }));

    useEffect(() => {
        const timer = setInterval(() => {
          setTimeLeft(calculateTimeLeft({ date }));
        }, 1000);

        return () => clearInterval(timer);
    }, [date]);

    return (
      <div className="countdown">
        <div className="countdown-col">
          <div className="time-section">
            <div className="time-title">{timeLeft.days}</div>
            <span className="time-subtitle">Days</span>
          </div>
        </div>

        <div className="countdown-col">
          <div className="time-section">
            <div className="time-title">{timeLeft.hours}</div>
            <span className="time-subtitle">Hours</span>
          </div>
        </div>

        <div className="countdown-col">
          <div className="time-section">
            <div className="time-title">{timeLeft.minutes}</div>
            <span className="time-subtitle">Minutes</span>
          </div>
        </div>

        <div className="countdown-col">
          <div className="time-section">
            <div className="time-title">{timeLeft.seconds}</div>
            <span className="time-subtitle">Seconds</span>
          </div>
        </div>
      </div>
    );
}

export default Countdown;
