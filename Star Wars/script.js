
let output = document.getElementById("output");
const spinner = document.getElementById("spinner");
const url = "https://starwars.egghead.training/";

output.innerHTML = 'Starwars history'



const starWars1 = (endpoint) => {
    let url = 'https://starwars.egghead.training/';

    return fetch(url + endpoint)
    .then(res => res.json(), () => Promise.reject(Error("Unsuccessful response")))
    .then(data => {
        console.log('There are 60 planets in Starwars history')
        data.forEach(film => {
            output.innerHTML +=  `
            <div> <p>
            Film episode_${film.episode_id} is ${film.title}
            </p>
            </div>
            `
        })
    })
}

//starWars1('films')

const starWars = (endpoint) => {
    let url = 'https://starwars.egghead.training/';

    return setTimeout(fetch(url + endpoint)
    .then(res => res.json(), () => Promise.reject(Error("Unsuccessful response")))
    .then(data => {
       output.innerHTML += `
       ${data.length} ${endpoint}
       `
    }), 1000)
}

const changeImg = () => {
    setTimeout(() => {
         spinner.src = './images/star-wars-ship-2.png'
    }, 2000)
}

const promiseAll = async () => {
   const promises = await Promise.all([starWars('films'), starWars('planets'), starWars('species'), starWars('people'), starWars('starships'), starWars('vehicles')])

   
}

promiseAll().finally(changeImg)