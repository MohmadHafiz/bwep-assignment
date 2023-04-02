document.addEventListener('DOMContentLoaded', function () {
  var calendarEl = document.getElementById('calendar');

  var calendar = new FullCalendar.Calendar(calendarEl, {

    events: [
      {
        title: 'April fool sale',
        start: '2023-04-01'
      },
      {
        title: '5% discount',
        start: '2023-04-01',
        end: '2023-04-04'
      },
      {
        title: '30% discount for appliances',
        start: '2023-04-07',
        end: '2023-04-10'
      },
      {
        title: 'Free Shipping Day',
        start: '2023-04-12'
      },
      {
        title: 'Spring Sale',
        start: '2023-04-22',
        end: '2023-04-24'
      },
      {
        title: 'Mother\'s Day Sale',
        start: '2023-05-08',
        end: '2023-05-09'
      },
      {
        title: 'Memorial Day Sale',
        start: '2023-05-27',
        end: '2023-05-29'
      }
    ]
});

  // render the calendar
  calendar.render();
});