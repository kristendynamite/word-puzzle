$(document).ready(function(){
  $('form').submit(function(e) {
    e.preventDefault();

// set variables for loop from user input
    var input = $('#inputSentence').val();
    var vowels = ['a', 'e', 'i', 'o', 'u'];

//change (splitting) each letter from input into its own element
    var splitArray = input.split("");

//for loop through elements to find vowels
    for (var index = 0; index < splitArray.length; index += 1) {
      if (vowels.includes(splitArray[index])) {
        //change vowels to dashes
        splitArray[index] = "-";
      }
    }

//create new array that joins the elements back together
    var joinArray = splitArray.join("");

//show results of joined array to user
    $("#dash-result").text(joinArray);

  });
});
