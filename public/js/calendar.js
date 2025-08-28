document.addEventListener("DOMContentLoaded", function () {
  const monthEl = document.getElementById("calendar");
  if (monthEl) {
    const monthCal = new FullCalendar.Calendar(monthEl, {
      initialView: "dayGridMonth",
      height: "auto",
      expandRows: true,
      handleWindowResize: true,
    });
    monthCal.render();
  }

  const listEl = document.getElementById("important-dates");
  if (listEl) {
    const listCal = new FullCalendar.Calendar(listEl, {
      timeZone: "UTC",
      initialView: "listWeek",
      height: "auto",
      views: {
        listDay: { buttonText: "list day" },
        listWeek: { buttonText: "list week" },
        listMonth: { buttonText: "list month" },
      },
      headerToolbar: {
        left: "title",
        center: "",
        right: "listDay, listWeek, listMonth",
      },
    });
    listCal.render();
  }
});