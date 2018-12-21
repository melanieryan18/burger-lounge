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
      var id = $(this).data("id");
      var ateBurger = {
        devoured: true
      };
      // Send the DELETE request.
      $.ajax("/api/burgers/" + id, {
        method: "PUT"
      }).then(function (res) {
        console.log("nomnomnomnom ", res);
        // Reload the page to get the updated list
        location.reload();
      }
      );
    });
  });
});