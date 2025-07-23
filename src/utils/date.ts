import { type date } from "@customtypes/utils";

interface dateInterface {
  start: date;
  end: date;
}

const monthOrder = [
  "Jan", "Feb", "Mar", "Apr", "May", "Jun",
  "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
];

const today = new Date();

export function handleDate( start: date, end: date ) {
  if ( end && start ) {

    if ( end && !start.year && !start.month ) {
      return `${monthOrder[ end.month - 1 ]} ${end.year}`;
    }

    if ( start && !end.year && !end.month ) {
      return `${monthOrder[ start.month - 1 ]} ${start.year} — Till Date`;
    }

    // Convert month string to month index and year to number
    const endMonthIndex = end.month ? Number( end.month ) : 0;
    const endYearNum = end.year ? Number( end.year ) : today.getFullYear();
    const endDate = new Date( endYearNum, endMonthIndex );

    if ( endDate > today ) {
      return `${monthOrder[ start.month - 1 ]} ${start.year} — Till Date`;
    }
    
    return `${monthOrder[ start.month - 1 ]} ${start.year} — ${monthOrder[ end.month - 1 ]} ${end.year}`;
  }

}

export function sortDataByDate( a: dateInterface, b: dateInterface ) {
  // Compare start year (descending)
  if ( b.start.year !== a.start.year ) {
    return b.start.year - a.start.year;
  }
  // Compare start month (descending)
  if ( b.start.month !== a.start.month ) {
    return b.start.month - a.start.month;
  }
  // Compare end year (descending)
  if ( b.end.year !== a.end.year ) {
    return b.end.year - a.end.year;
  }

  return Number( b.end.month ) - Number( a.end.month );
}