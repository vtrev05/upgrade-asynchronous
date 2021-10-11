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
const baseUrl = 'https://api.nationalize.io';

const btn = document.querySelector('.button')

const nationalize = async () => {
    const result = await fetch(baseUrl)
    const json = await result.json()
    console.log(json)
}

btn.addEventListener('click', nationalize)

//2.3
const btn2 = document.querySelector('.button2')
const input = document.querySelector('input')

const agify = async () => {
    const result = await fetch(`https://api.agify.io?name=${input.value}`)
    const json = await result.json()
    document.querySelector('.title').innerHTML = `<p class=paragraph">El nombre ${json.name} se repite ${json.count} veces y tiene ${json.age} años</p> `
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
