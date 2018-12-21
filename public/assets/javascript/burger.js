$(document).ready(() => {

  // ADD BURGER TO MENU
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
        method: "POST",
        data: newBurger
      }).then(function () {
        console.log("added burger" + newBurger);
        location.reload();
      }
      );
    });


    // DEVOUR BURGER FROM MENU
    $(".eat-burger").on("click", function (event) {
      event.preventDefault();
      var id = $(this).data("id");
      // Send the DELETE request.
      $.ajax("/api/burgers/" + id, {
        method: "PUT"
      }).then(function (res) {
        location.reload();
      }
      );
    });
  });
});