'use strict';
//ITERATION 2 FETCH

//2.1

const runTimeOut = async () => {
    try {
        const result = await console.log('todo bien');
      } catch (error) {
        console.error('error', error);
      }
  }
runTimeOut()

//2.2

const getCharacters = async () => {
    const result = await fetch('https://rickandmortyapi.com/api/character')
    const json = await result.json()
    console.log(json.results)
}
getCharacters()