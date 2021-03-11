
// fetch('http://www.omdbapi.com/?s=harry potter&apikey=3f84f47e')
// .then(response => response.json())
// .then(data=>{
     
//     data.Search.forEach(element=> {
//         var main = document.createElement("div");
//         var Title = document.createElement("p");
//         Title.innerHTML = element.Title;
//         var year =document.createElement("p");
//          year.innerHTML = element.Year;
//         var poster =document.createElement("img");
//         poster.setAttribute("src", element.Poster);
//         console.log(Title);
//         console.log(year);
//         main.appendChild(Title);
//         main.appendChild(year);
//         main.appendChild(poster);
//         document.getElementsByTagName("body")[0].appendChild(main);
        
//     }) 
// })

function searchMovie(){
    var NewTitle = document.querySelector("input").value;
    console.log(NewTitle);

    document.querySelectorAll("div").forEach(element =>{
        element.remove();
    }
        )


    fetch(`http://www.omdbapi.com/?s=${NewTitle}&apikey=3f84f47e`)
        .then(response => response.json())
        .then(data=>{
            console.log(data);
            data.Search.forEach(element=> {
            var main = document.createElement("div");
            var Title = document.createElement("p");
            Title.innerHTML = element.Title;
            var year =document.createElement("p");
            year.innerHTML = element.Year;
            var poster =document.createElement("img");
            poster.setAttribute("src", element.Poster);
            console.log(Title);
            console.log(year);
            main.appendChild(Title);
            main.appendChild(year);
            main.appendChild(poster);
            document.getElementsByTagName("body")[0].appendChild(main);
        
    }) 
})

}
  
document.querySelector("input").addEventListener("keyup", searchMovie)





  