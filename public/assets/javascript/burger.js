// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function () {
  $(".add-burger").on("click", function (event) {
    event.preventDefault();
    var newBurger = {
      burger: $("#burger").val().trim(),
      devoured: false
    };
    console.log(newBurger);
    // Send the PUT request.
    $.ajax("/api/burgers/", {
      type: "POST",
      data: newBurger
    }).then(function () {
        console.log("added burger" + newBurger);
        location.reload();
      }
    );
  });



  $(".eat-burger").on("click", function (event) {
    var id = $(this).data("id");
    var ateBurger = {
      devoured: true
    };
    // Send the DELETE request.
    $.ajax("/api/burgers/" + id, {
      type: "PUT"
    }).then(
      function () {
        console.log("nomnomnomnom ", id);
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });
});