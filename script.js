//creates grid
function createGrid(x) {
      for (var rows = 0; rows < x; rows++) {
          for (var columns = 0; columns < x; columns++) {
              $(".container").append("<div class='grid'></div>");
          };
      };
      $(".grid").width(500/x);
      $(".grid").height(500/x);
  }
//random color
  function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}
  //create new grid with input
function changeGrid(){
      var x = prompt("Please pick a size between 4 and 64");
      createGrid(x);
    }

$(document).ready(function() {
  $("#start").click(function(){
    $(".container").empty();
    createGrid(16);
    //hover to change div bg color
      $(".grid").hover(function(){
        $(this).css("background-color", "black");
      });
    //button to reset the grid
      $("#restart").click(function(){
        $(".grid").css("background-color", "white");
        $(".grid").hover(function(){
          $(this).css("background-color", "black");
        });
      });
      //change grid
      $("#changegrid").click(function(){
        $(".container").empty();
          changeGrid();
          $(".grid").hover(function(){
            $(this).css("background-color", "black");
          });
        });
        //random colors
      $("#colors").click(function(){
        $(".grid").hover(function(){
          $(this).css("background-color", getRandomColor());
        });
      });
  });
});
