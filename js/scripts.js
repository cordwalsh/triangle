$(document).ready(function(){
  $("#triangle form").submit(function(event) {
    var length1 = parseInt($("#length1").val());
    var length2 = parseInt($("#length2").val());
    var length3 = parseInt($("#length3").val());
    console.log(length1);
    if (length1 + length2 <= length3 || length2 + length3 <= length1 || length1 + length3 <= length2) {
      $(".nothing").show();
    }
      else if (length1 === length2 && length2 === length3) {
          $(".equilateral").show();
        }
      else if (length1 === length2 || length2 === length3 || length3 === length1) {
          $(".isosceles").show();
        }
      else if (length1 !== length2 || length2 !== length3 || length3 !== length1) {
          $(".scalene").show();
        }
    event.preventDefault();
  });
});
