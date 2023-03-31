document.addEventListener('DOMContentLoaded', function () {
  var calendarEl = document.getElementById('calendar');

  var calendar = new FullCalendar.Calendar(calendarEl, {

    events: [
      {
        title: 'All Day Event',
        start: '2023-04-01'
      },
      {
        title: 'Long Event',
        start: '2023-04-07',
        end: '2023-04-10'
      }
    ]
});

  // render the calendar
  calendar.render();
});