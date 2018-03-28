//===============================================
// comment code
// pseudo code exstinseively
// |:code a little, test a little :|
//===============================================


//1. **Hit the GIPHY API**.
// * Fool around with the GIPHY API. [Giphy API](https://github.com/Giphy).
// * Be sure to read about these GIPHY parameters (hint, hint):
//   * `q`
//   * `limit`
//   * `rating`
// * Like many APIs, GIPHY requires developers to use a key to access their API data. To use the GIPHY API, you'll need a GIPHY account (don't worry, it's free!) and then obtain an API Key by [creating an app](https://developers.giphy.com/dashboard/?create=true).  
// //Api Key:
// //H8rSfwFYkSs3Fpl9MCp53KA8Kqk6Uni8


// ### Instructions

// 1. Create an array of strings, each one related to a topic. Saved to a variable called `topics`.
//defined variables here
var topicsArray = ['wakanda', 'little kids dancing', 'dancing bloopers', 'african tribal dancing', 'pop and lock', 'hip hop dancing', 'ballroom dancing', 'capoiera', 'hippies dancing', 'old people dancing',];
var arrayLength = topicsArray.length;
    // need these for later???
    // $("button").on("click", function() {
    //   var searchTerm = $(this).attr("data-animal");
    //   var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
    //     searchTerm + "&api_key=dc6zaTOxFJmzC&limit=10";

// this connects my page to the API and specifies what to get
var url = "https://api.giphy.com/v1/gifs/search?q=wakanda+dance&api_key=H8rSfwFYkSs3Fpl9MCp53KA8Kqk6Uni8&limit=10&rating=g";

//this is the actual ajax call
$.ajax({
  //url is already defined by var url but should it instead use a concatenated url like this? If so see multiple-ajax.html:
   // 'https://api.giphy.com/v1/gifs/search?q=' += topicsArray + $.param({
//   '&api_key=H8rSfwFYkSs3Fpl9MCp53KA8Kqk6Uni8&limit=10&rating=g'
// });
  url: url,
  method: 'GET',
}).done(function(result) {
  //working? yes!
  console.log(result);
  //does the below define what happens if API call fails??
}).fail(function(err) {
  throw err;
});

// 2. Your app should take the topics in this array and create buttons in your HTML.
// $(".demo").append(function(){
//   $(this).show(200);
// });
//    * Try using a loop that appends a button for each string in the array.
for (var i = 0; i < arrayLength; i++) {
    console.log(topicsArray[i]);
    //create buttons
    $("button").on("click", function() { // any <button> element do the callback function
      var topicsArray = $(this).attr("data-person"); // pulls data from attribute and stores in var topicsArray
      var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
        topicsArray + "&api_key=H8rSfwFYkSs3Fpl9MCp53KA8Kqk6Uni8&limit=10&rating=g"; // builds the url and stores it in queryURL

}

// 3. When the user clicks on a button, the page should grab 10 static, non-animated gif images from the GIPHY API and place them on the page.
// // see API class exersise

// 4. When the user clicks one of the still GIPHY images, the gif should animate. If the user clicks the gif again, it should stop playing.

// 5. Under every gif, display its rating (PG, G, so on).
//    * This data is provided by the GIPHY API.
//    * Only once you get images displaying with button presses should you move on to the next step.

// 6. Add a form to your page that takes the value from a user input box and adds it into your `topics` array. Then make a function call that takes each topic in the array remakes the buttons on the page.

// 7. Deploy your assignment to Github Pages:: Push to GitHub otherwise already DONE



//


// <!-- 

// $.ajax({
//     url: queryURL,
//     method: "GET"

//     console.log (searchTerm)
//     console.log (NumberOfRecords)
//     console.log (startYear)
//     console.log (endYear)

//     console.log (search)
//     console.log (clearResults)

   



//       $.ajax({
//         url: queryURL,
//         method: "GET"
//       }).then(function(response) {
//         // Step 1: Run this file, click a button, and see what the response object looks like in the browser's console.
//         // Open up the data key, then open up the 0th, element. Study the keys and how the JSON is structured.

//         console.log(response);

//         // Step 2: since the image information is inside of the data key,
//         // make a variable named results and set it equal to response.data

//         // =============== put step 2 in between these dashes ==================
//         var results = response.data;
//         // ========================

//         for (var i = 0; i < results.length; i++) {

//           // Step 3: uncomment the for loop above and the closing curly bracket below.
//           // Make a div with jQuery and store it in a variable named animalDiv.
//           var animalDiv = $("<div>"); //creates empty div
//           // Make a paragraph tag with jQuery and store it in a variable named p.
//           var p = $("<p>")
//           // Set the inner text of the paragraph to the rating of the image in results[i].
//           p.text(results[i].rating);
//           // Make an image tag with jQuery and store it in a variable named animalImage.
//           var animalImage = $("<img>");
//           // Set the image's src to results[i]'s fixed_height.url.
//           animalImage.attr("src", results[i].images.fixed_height.url);
//           // Append the p variable to the animalDiv variable.
//           animalDiv.append(p);
//           // Append the animalImage variable to the animalDiv variable.
//           animalDiv.append(animalImage);
//           // Prepend the animalDiv variable to the element with an id of gifs-appear-here.
//           $("#gifs-appear-here").prepend(animalDiv);
//           // ============= put step 3 in between these dashes ======================

//           // ==================================
//         }

//       });
//     });
//   </script>
// </body>

// </html> -->