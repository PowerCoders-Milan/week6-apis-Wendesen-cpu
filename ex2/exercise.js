

fetch('https://api.openweathermap.org/data/2.5/weather?q=Brescia&appid=d2339dd84aebabac9f23cc24b9d8a3ca&units=metric')
.then(response => response.json())
.then(data => {
    var x =document.createElement("p");
    x.innerHTML =`The temperature of brescia for this today is ${data.main.temp} celcius and the weather is mostly ${data.weather[0].description}`;
    document.getElementsByTagName("body")[0].appendChild(x);
})
    
    
    
            
    
    //document.getElementsByTagName("p")[0].innerHTML = data)




