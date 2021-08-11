$(document).ready(function () {
  $("form#appointment").submit(function(event) {
    event.preventDefault();
    const nameInput = $("input#name1").val();
    const appointmentInput = $("input#appointment1").val();
    const dateInput = $("input#date1").val();
    const startTimeInput = $("input#startTime").val();
    const endTimeInput = $("input#endTime").val();
    const verify = ("Your appointment has been submitted");
    alert(verify);
    ;
  })
})

