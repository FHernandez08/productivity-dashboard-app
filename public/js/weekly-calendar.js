document.addEventListener("DOMContentLoaded", function () {
  let calendarEl = document.getElementById("week-calendar");
  let calendar = new FullCalendar.Calendar(calendarEl, {
    initialView: "dayGridWeek",
    headerToolbar: {
      left: "prev, next",
      center: "title",
      right: "dayGridWeek, dayGridDay",
    },
    editable: true,
    height: "auto",
  });
  calendar.render();
});
