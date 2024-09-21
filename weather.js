async function search(){
    console.log(inputvalue.value);
    if(inputvalue){
       const response= await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${inputvalue.value}&appid=5fe36b192ffd1c36dffb6752bc1722b2`)
       response.json().then((data)=>{
        console.log(data);


        const temp = data.main.temp
        console.log(temp);

        const name = data.name
        console.log(name);

        // const timezone = data.timezone
        // console.log(timezone);

        const humidity = data.main.humidity
        console.log(humidity);

        const feels_like = data.main.feels_like
        console.log(feels_like);

        const pressure = data.main.pressure
        console.log(pressure);

        const speed = data.wind.speed
        console.log(speed);
        
        
        weather.innerHTML=`
            <h1 class="mt-5 text-light d-flex justify-content-center">Weather App</h1> 
            <div class="mt-3">
                
                <input id="inputvalue" class="mt-3 box" type="text" placeholder="Search A Country">
            </div>
            <div class="btt">
                <button class="btn mt-3" onclick="search()">Search</button>
            </div>
            <div>
                <h3 class="mt-3 text-center text-light">${name}</h3>
            </div>
            <div class="mt-2">
            <div class="mt-1 d-flex align-items-center justify-content-center">
                <img src="./media/sun cloun.png" alt="image" height="100px" width="100px">
            </div>
            <div>
                <h2 class="text-light text-center">${temp}</h2></div>

<div class="logos">
                    <div id="first">
                        <img src="./media/humidity.png" alt="image" height="50px" width="50px">
                        <h2 id="text" class="text-light text-center">Humidity:${humidity}</h2>
                    </div>
                    
                    <div id="second">
                        <img src="./media/weather-66.png" alt="image" height="50px" width="50px">
                        <h2 id="text" class="text-light text-center">Wind:${speed}</h2>
                    </div>
</div>


<div class="logos2">
    <div id="third">
        <img src="./media/presure.png" alt="image" height="50px" width="50px">
        <h2 id="text" class="text-light text-center">Pressure:${pressure}</h2>
    </div>
    
    <div id="fourth">
        <img src="/media/feels like.png" alt="image" height="50px" width="50px">
        <h2 id="text" class="text-light text-center">Feels Like:${feels_like}</h2>
    </div>
</div>`
        
       })
       
       
    }
    else{
        alert(`please enter a city`)
    }
    
}