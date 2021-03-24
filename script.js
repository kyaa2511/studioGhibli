const baseURL = "curl -v https://ghibliapi.herokuapp.com";
const section = document.querySelector('section');
// const movieSelect = document.querySelectorAll('.moviesImg')
const logo = document.querySelector('h1');

let url;

let movieInfo = new Request('https://ghibliapi.herokuapp.com/films/');

fetch(movieInfo)
//"response" - a placeholder for the info that comes back
.then(function(response){
//The info that returns will be converted into json    
    return response.json();
}) //the json object is use in this promise(2nd .then) to send the info to another function(movieResults) 
    .then(function(json){
        console.log(json);
        movieResults(json);
 })



 
//Find a way to display the results
function movieResults(json) {
    //console.log(json[0].title);
    let movieObject = json;
    let originalTitle = json[0].original_title;
    let movieDescription = json[0].description;
    let releaseDate = json[0].release_date;
     console.log(movieObject);
     console.log(originalTitle);
     console.log(movieDescription);
     console.log("Release Date:", releaseDate);

    // movieObject[1].title += document.getElementById('graveOfTheFireFlies');
    // console.log(movieObject);
    
    // for (let{ title: t, original_title: ot, description: d, director: dir, running_time: rt } of movieObject) {
    
    //     console.log("Title: "+ t + ", Original Title: " + ot + ", Description: " + d + ", Director: " + dir + ", Running Time: " + rt);
         
    // }

    function movieList() {
        let listData = [
        `Castle in the Sky`,
        `Grave of the Fireflies`,
        `My Neighbor Totoro`,
        `Kiki's Delivery Service`,
        `Only Yesterday`,
        `Porco Rosso`,
        `Pom Poko`,
        `Whisper of the Heart`,
        `Proncess Mononoke`,
        `My Neighbors the Yamadas`,
        `Spirited Away`,
        `The Cat Returns`,
        `Howl's Moving Castle`,
        `Tales from Earthsea`,
        `Ponyo`,
        `Arrietty`,
        `From Up on Poppy Hill`,
        `The Wind Rises`,
        `The Tale of the Princess Kaguya`,
        `When Marnie Was There`,
        `The Red Turtle`],
    
    movieListContainer = document.createElement('div'),
    movieListElement = document.createElement('ul'),
    
    numberOfMovieItems = listData.length, 
    movieObject, 
    i;
    
    document.getElementsByTagName('body')[0].appendChild(movieListContainer);
    movieListContainer.appendChild(movieListElement);
    
    for(i = 0; i < numberOfMovieItems; i++) {
        
        movieObject = document.createElement('li');
        
        movieObject.innerHTML = listData[i];
    
        movieListElement.appendChild(movieObject);
         console.log(movieObject);
    }
    
    
    }
    
    movieList();



    



    
    
    
    
    
    
    //  if(movieObject.length === 0) {
    //     console.log('No Results');
    // } else {
    //     for(let i = 0; i < movieObject.length; i++) {
    //         // let movieSection = document.createElement('section');
    //         // let movieHeading = document.createElement('h2');
    //         // let movieHeading = movieHeading.innerText('Selected Movie')
    //         // movieSection.appendChild(movieHeading);
    //     }
    // }


}


// function movieList() {
//     let listData = [
//     `Castle in the Sky`,
//     `Grave of the Fireflies`,
//     `My Neighbor Totoro`,
//     `Kiki's Delivery Service`,
//     `Only Yesterday`,
//     `Porco Rosso`,
//     `Pom Poko`,
//     `Whisper of the Heart`,
//     `Proncess Mononoke`,
//     `My Neighbors the Yamadas`,
//     `Spirited Away`,
//     `The Cat Returns`,
//     `Howl's Moving Castle`,
//     `Tales from Earthsea`,
//     `Ponyo`,
//     `Arrietty`,
//     `From Up on Poppy Hill`,
//     `The Wind Rises`,
//     `The Tale of the Princess Kaguya`,
//     `When Marnie Was There`,
//     `The Red Turtle`],

// movieListContainer = document.createElement('div'),
// movieListElement = document.createElement('ul'),

// numberOfMovieItems = listData.length, 
// listItem, 
// i;

// document.getElementsByTagName('body')[0].appendChild(movieListContainer);
// movieListContainer.appendChild(movieListElement);

// for(i = 0; i < numberOfMovieItems; i++) {
    
//     listItem = document.createElement('li');
    
//     listItem.innerHTML = listData[i];

//     movieListElement.appendChild(listItem);

// }


// }

// movieList();




function movieChoice() {
    let movieSelect = document.querySelectorAll('movieImages');
    if (movieSelect.getElementById('click')) {
        alert('Ahhhhh')
    }
    movieChoice(movieSelect)
    console.log(movieSelect);
    console.log(json);
}




// movieSelect.addEventListener('click', function (event){
//     alert('Ahhhhhhh')
       
//     });




// function displayMovie(json) {
//   console.log(json);
// }
  

// movieSelect();


  





 //   .then(function ())





// function fetchResults(e) {  //"e" event object; holds a bunch of properties (variables) and methods (functions). 
  
  
// };

// function displayResults(json) {
//     let movieDisplay = 






// section.document.appendChild('heading');
// heading.document.appendChild('h1');
// headingText.document.createTextNode('Selected Movie')





// }
//  console.log(e);
// e.preventDefault();
// url = `${baseURL}/films/`;
//  console.log(url);



//  fetch(url)
//     .then(function (result) {
//         console.log(result)
//         return result.json();
//     })
//     .then(function (json) {
//         console.log(json);
//         displayResults(json);
//     })