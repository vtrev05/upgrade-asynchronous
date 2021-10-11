'use strict';
//ITERATION 1 FETCH

//1.1


/* const agify = async () => {
    const result = await fetch('https://api.agify.io?name=michael')
    const json = await result.json()
    console.log(json)
}

agify() */

//2.2
/* const baseUrl = 'https://api.nationalize.io';
const input = document.querySelector('input')
const btn = document.querySelector('.button')

const nationalize = async () => {
    const result = await fetch(`${baseUrl}?name=${input.value}`)
    const json = await result.json()
    console.log(json)
}

btn.addEventListener('click', nationalize) */

//2.3
const btn2 = document.querySelector('.button2')
const input = document.querySelector('input')

const agify = async () => {
    const result = await fetch(`https://api.nationalize.io?name=${input.value}`)
    const json = await result.json()
    const countries = json.country.map((element)=>(
        {
        id: element.country_id,
        prob: element.probability
        }
    ))
    console.log(countries)
    document.querySelector('.title').innerHTML = `<p class=paragraph">El nombre ${json.name} tiene un ${countries[0].prob} de ser de ${countries[0].id} <p class=paragraph">El nombre ${json.name} tiene un ${countries[1].prob} de ser de ${countries[1].id} <p class=paragraph">El nombre ${json.name} tiene un ${countries[2].prob} de ser de ${countries[2].id}`
}

btn2.addEventListener('click', agify)

//2.4
const removeTitle = document.querySelector('.title')

const remove = document.querySelector('.remove')

const deleteFunction = () => {
    while (removeTitle.firstChild) {
        removeTitle.removeChild(removeTitle.firstChild);
      }
}
remove.addEventListener('click', deleteFunction)
