// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {
    $(".add-burger").on("click", function(event) {
      var id = $(this).data("id");
      var newBurger = $(this).data("newBurger");
    
      // Send the PUT request.
      $.ajax("/api/burgers/" + id, {
        type: "PUT",
      }).then(
        function() {
          console.log("added burger" + newBurger);
          location.reload();
        }
      );
    });
  

    $(".del-burger").on("click", function(event) {
      var id = $(this).data("id");
  
      // Send the DELETE request.
      $.ajax("/api/burgers/" + id, {
        type: "DELETE"
      }).then(
        function() {
          console.log("deleted cat", id);
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
  });
  