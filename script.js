const baseURL = "curl -v https://ghibliapi.herokuapp.com";
let movieInfo = new Request('https://ghibliapi.herokuapp.com/films/');

fetch(movieInfo)
//"response" - a placeholder for the info that comes back
.then(function(response){
//The info that returns will be converted into json    
    return response.json();
    
}) //the json object is use in this promise(2nd .then) to send the info to another function(movieResults) 
    .then(function(json){
        const html = json
       
        .map(title => {
            return `<div class="movie">
                    
                    <p>Title: ${title.title}</p>
                    <p>Original Title: ${title.original_title}</p>
                    <p>Description: ${title.description}</p>
                    <p>Director: ${title.director}</p>
                    <p>Running Time: ${title.running_time}</p>
                    </div>`
                
        })
        .join("");

        document.querySelector(".displayMovie").insertAdjacentHTML("afterbegin", html)
        

 }) .catch(error => {
     console.log(error);
     console.log(movieInfo);
 })



 
