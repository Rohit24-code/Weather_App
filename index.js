

// https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}

function getData() {
    let container = document.getElementById("container")
    container.style.visibility="visible";

    let outer= document.querySelector(".mapouter")
    outer.style.visibility="visible";

    
    let city = document.querySelector("#city").value
    

    const url =
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=dce94e13a8596afd62d87234fe80343e`


    fetch(url)
        .then(function (res) {
            return res.json()
        })
        .then(function (res) {
            append(res)
        })
        .catch(function (err) {
            console.log(err)
        })
} 


function getDatalocation(lat,lon) {
    const url =
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=dce94e13a8596afd62d87234fe80343e`


    fetch(url)
        .then(function (res) {
            return res.json()
        })
        .then(function (res) {
            append(res)
            console.log(res)
        })
        .catch(function (err) {
            console.log(err)
        })
} 

function get7daydata(lat,lon) {
    const dayurl =
        `api.openweathermap.org/data/2.5/forecast/daily?lat=${lat}&lon=${lon}&cnt=7&appid=dce94e13a8596afd62d87234fe80343e`


    fetch(dayurl)
        .then(function (res) {
            return res.json()
        })
        .then(function (res) {
            // append(res)
            console.log(res)
        })
        .catch(function (err) {
            console.log(err)
        })
}



function append(data){

     let iframe=document.getElementById("gmap_canvas")

    let container = document.getElementById("container")
    container.innerHTML=null;

    let city = document.createElement("h3")
    city.innerText =` CITY : ${data.name}`;

    let min = document.createElement("h3")
    min.innerText = `MIN TEMP : ${Math.floor(data.main.temp_min - 273)} \u00B0C`

    let max = document.createElement("h3")
    max.innerText= `MAX TEMP : ${Math.floor(data.main.temp_max - 273)} \u00B0C `

    let current = document.createElement("h3")
    current.innerText = `CURRENT TEMP : ${Math.floor(data.main.temp -273)} \u00B0C `

    let humidity = document.createElement("h3")
    humidity.innerText =`HUMIDITY : ${data.main.humidity}`

    
    container.append(city,min,max,current,humidity)
    
    
     iframe.src =`https://maps.google.com/maps?q=${data.name}&t=&z=13&ie=UTF8&iwloc=&output=embed`
}



function getweather(){
    let container = document.getElementById("container")
    container.style.visibility="visible";

    let outer= document.querySelector(".mapouter")
    outer.style.visibility="visible";

    navigator.geolocation.getCurrentPosition(success);


    function success(pos){
        var crd = pos.coords;
    
        console.log('Your current position is:');
        console.log(`Latitude : ${crd.latitude}`);
        console.log(`Longitude: ${crd.longitude}`);
        console.log(`More or less ${crd.accuracy} meters.`);

    getDatalocation(crd.latitude,crd.longitude)
    get7daydata(crd.latitude,crd.longitude)
    }
}



// function image(lat) {
    // const nurl =
        // `https://api.unsplash.com/photos/?client_id=M522JhW-JMMrZFYpyxfWpB5RJFUzAdjf6iBNDtJph04&query=${flower}`


    // fetch(nurl)
    //     .then(function (res) {
    //         return res.json()
    //     })
    //     .then(function (res) {
    //         append(res)
    //         console.log(res)
    //     })
    //     .catch(function (err) {
    //         console.log(err)
    //     })
// } 

// 7daysurl="api.openweathermap.org/data/2.5/forecast/daily?lat={lat}&lon={lon}&cnt={cnt}&appid=dce94e13a8596afd62d87234fe80343e" 





