// 1. Create an array of strings, each one related to a topic. Saved to a variable called `topics`.
//defined variables here
var topicsArray = ['wakanda dance', 'little kids dancing', 'dancing bloopers', 'african tribal dancing', 'pop and lock', 'hip hop dancing', 'ballroom dancing', 'polka', 'hippies dancing', 'old people dancing',];
//create arraylenth to be able to iterate through topicsArray (do we need this?)
var arrayLength = topicsArray.length;
// var i = 0;
// var i < 10;

displayButtons();

// this connects my page to the API and specifies what to get
//original non concatenated was "https://api.giphy.com/v1/gifs/search?q=wakanda+dance&api_key=H8rSfwFYkSs3Fpl9MCp53KA8Kqk6Uni8&limit=10&rating=g"; 
// arrayLength = []
//this is the ajax call


// 2. Your app should take the topics in this array and create buttons in your HTML.
//    * Try using a loop that appends a button for each string in the array.
// for (var i = 0; i < arrayLength; i++) {
    // console.log(topicsArray[i]);

    //listening to button clicks placed on entire document (event listener)
    // nesccesary for dynamic button creating and listenrs
    $(document).on("click",'.dance-button', function() { // any dance button class element do the callback function
      
      console.log('Logging: this')
      console.log(this);

      var danceMoveChosen = $(this).attr("data-dance-choice"); // pulls data from attribute and stores in var danceMoveChosen
      console.log('Logging: danceMoveChosen = $(this).attr("data-dance-choice")');
      console.log(danceMoveChosen);

      // we want queryURL to be able to have already seen danceMoveChosen
      var queryURL =  'https://api.giphy.com/v1/gifs/search?q=' + danceMoveChosen + '&api_key=H8rSfwFYkSs3Fpl9MCp53KA8Kqk6Uni8&limit=10&rating=g';


      $.ajax({
        url: queryURL,
        method: 'GET',
      }).done(function(response) {  //this is a promise, will only fire off once the ajax call is complete
        // Log the resulting object - working? yes!
       
        var results = response.data 
        $('#gifs-appear-here').empty(); 
        for (var i = 0; i < results.length; i++) { // Looping through each result item 
          var danceImage = $("<img>"); // Creating and storing an image tag
          danceImage.attr("src", results[i].images.fixed_height.url);  // Setting the src attribute of the image to a property pulled off the result item   
          $('#gifs-appear-here').append(danceImage);
         console.log(danceImage)
         var p = $("<p>").text("Rating: " + results[i].rating); // 5. Under every gif, display its rating (PG, G, so on).
         $('#gifs-appear-here').append(p);

        }
        // Log the queryURL
        console.log(queryURL);
        //does the below define what happens if API call fails?? YES!
      }).fail(function(err) {
        throw err;
      });

  });
// }
      // 3. When the user clicks on a button, the page should grab 10 static, non-animated gif images from the GIPHY API and place them on the page.

       
    
        function displayButtons() { 
          $('#buttons').empty();
          for (var i=0; i < topicsArray.length; i++) { // Looping through each result item 
            var jsButtons =  $('<button>'); // Creating and storing a button tag
            jsButtons.attr("data-dance-choice", topicsArray[i]);   // adds data-dance-choice to button  
            jsButtons.attr("class", "dance-button");
            jsButtons.text(topicsArray[i]);
            $('#buttons').append(jsButtons);
            
          }
        }    
// //!!!! see API class exersise with Frog on a Hog VERY SIMILAR TO HOW I DEALT WITH THE BUTTON
//!!!state=still????  NOT PAUSE  but choose either 'moving' URL or 'Still' url

// 4. When the user clicks one of the still GIPHY images, the gif should animate. If the user clicks the gif again, it should stop playing.
 //!!!! WILL UTILIZE SOME VERSION OF THE BELOW CODE SOMEHOW
//  <img src="https://media1.giphy.com/media/3o85xkQpyMlnBkpB9C/200_s.gif" data-still="https://media1.giphy.com/media/3o85xkQpyMlnBkpB9C/200_s.gif" data-animate="https://media1.giphy.com/media/3o85xkQpyMlnBkpB9C/200.gif" data-state="still" class="gif">
//  <img src="https://media2.giphy.com/media/8rFQp4kHXJ0gU/200_s.gif" data-still="https://media2.giphy.com/media/8rFQp4kHXJ0gU/200_s.gif" data-animate="https://media2.giphy.com/media/8rFQp4kHXJ0gU/200.gif" data-state="still" class="gif">
//  <img src="https://media3.giphy.com/media/W6LbnBigDe4ZG/200_s.gif" data-still="https://media3.giphy.com/media/W6LbnBigDe4ZG/200_s.gif" data-animate="https://media3.giphy.com/media/W6LbnBigDe4ZG/200.gif" data-state="still" class="gif">
   $(".gif").on("click", function() {
     // The attr jQuery method allows us to get or set the value of any attribute on our HTML element
     var state = $(this).attr("data-state");
     // If the clicked image's state is still, update its src attribute to what its data-animate value is.
     // Then, set the image's data-state to animate
     // Else set src to the data-still value
     if (state === "still") {
       $(this).attr("src", $(this).attr("data-animate"));
       $(this).attr("data-state", "animate");
     } else {
       $(this).attr("src", $(this).attr("data-still"));
       $(this).attr("data-state", "still");
       console.log(data-state)
     }
   });


//    * Only once you get images displaying with button presses should you move on to the next step.

// 6. Add a form to your page 
//DONE
//that takes the value from a user input box 
//and adds it into your `topics` array. 
// topicsArray.append('addDance')
// Then make a function call that takes each topic in the array and remakes the buttons on the page.

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
        // var results = response.data;
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


//===============================================
// comment code
// pseudo code exstinseively
// |:code a little, test a little :|
//===============================================
