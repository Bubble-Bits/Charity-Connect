import { useRef, useEffect } from "react";
import jSuites from "jsuites";

import "jsuites/dist/jsuites.css";

function Calendar({ options }) {
  const calendarRef = useRef(null);

  useEffect(() => {
    jSuites.calendar(calendarRef.current, options);
  }, [options]);

  return <input ref={calendarRef} />;
}

export default Calendar;