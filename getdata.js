/*fetch('data.json').then((response)=>{

    console.log('resolved', response);

    return response.json();

}).then(data =>{

    console.log(data);

}).catch((err)=>{

    console.log('rejected',err);

});
*/


const submited = document.querySelector("#bar");

const work = new Worker('country.js');

submited.addEventListener('click', (event)=> {

    work.postMessage('hello')
});

work.onmessage = function(message){
    console.log(message);
    alert(`Total world population ${message.data}`);
}

document.getElementById("m_holder").addEventListener('click', high_population);

function high_population() {
    fetch('data.json')
    .then((res) => res.json())
    .then((data)=> {
        let output = '<h2>Most Populated</h2>';
        data.forEach(function(country) {
            if (country.population > 100000000) {
                output +=`
                <div class="country">${country.country}</div>
                <div class="population">${country.population}</div>
            `;
            }
        });
        document.getElementById("display").innerHTML = output;
    })
}

document.getElementById("holder").addEventListener('click', medium_population);

function medium_population() {
    fetch('data.json')
    .then((res) => res.json())
    .then((data)=> {
        let output = '<h2>Medium Populated</h2>';
        data.forEach(function(country) {
            if (country.population > 1000000 && country.population < 100000000 ) {
                output +=`
                <div class="country">${country.country}</div>
                <div class="population2">${country.population}</div>
            `;
            }
        });
        document.getElementById("display2").innerHTML = output;
    })
}


document.getElementById("l_holder").addEventListener('click', less_population);

function less_population() {
    fetch('data.json')
    .then((res) => res.json())
    .then((data)=> {
        let output = '<h2>Less Populated</h2>';
        data.forEach(function(country) {
            if (country.population < 1000 ) {
                output +=`
                <div class="country">${country.country}</div>
                <div class="population3">${country.population}</div>
            `;
            }
        });
        document.getElementById("display3").innerHTML = output;
    })
}