import React from 'react'

function Test(){
    return (
        <div>
            <button className="button btn-outline-info btn-lg my-4" id="button" onClick={jokeProduction}>
                <h2>
                    Programming Jokes
                </h2>
            </button>
            <p className="m2" id="setup"></p>
            <p id="delivery"></p>
        </div>
    );
}

const jokeProduction = async () => {
    let setup = document.querySelector("#setup");
    let delivery = document.querySelector("#delivery");
    setup.innerHTML = "";
    delivery.innerHTML = "";
    const res = await fetch("https://sv443.net/jokeapi/v2/joke/Programming?blacklistFlags=nsfw")
    const data = await res.json()
    console.log(data)
    if(data.joke){
        setup.innerHTML = data.joke
    }else{
        setup.innerHTML = data.setup;
        setTimeout(function(){
            delivery.innerHTML = data.delivery
        },3000)
    }
    
}

export default Test;