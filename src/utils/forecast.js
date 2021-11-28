request = require ("request");

const forecast = (long,lat,callback) =>{

    const  url = 'http://api.weatherstack.com/current?access_key=3bdee2edd18e2b42ee5f7a2949df4fd6&query=' + lat + ',' + long +' ';
    request({url,json:true},(error,{body}={}) => {
        if(error){
            callback("Unable to connect to network",undefined);
        }
        else if(body.error){
            callback("Unable to find location.Try another search",undefined);
        }
        else{
            callback(undefined,(`${body.current.weather_descriptions[0]}. Current temperature is ${body.current.temperature} degrees out.
             It feels like ${body.current.feelslike} degrees out. 
             The humidty is ${body.current.humidity} %.`))
        }
        
    })

}

module.exports = forecast;