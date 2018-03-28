
    // $("button").on("click", function() {
    //   var searchTerm = $(this).attr("data-animal");
    //   var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
    //     searchTerm + "&api_key=dc6zaTOxFJmzC&limit=10";

// <!-- BEGIN NEW CODE -->
var url = "http://api.giphy.com/v1/gifs/search?q=wakanda+dance&api_key=H8rSfwFYkSs3Fpl9MCp53KA8Kqk6Uni8&limit=5";
// url += '?' + $.param({
//   'api-key': "search term"
// });
$.ajax({
  url: url,
  method: 'GET',
}).done(function(result) {
  console.log(result);
}).fail(function(err) {
  throw err;
});

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