
const cats=["Milo", "Otis", "Garfield"];
function destructivelyAppendCat(){
    cats.push('Ralph')
  console.log(cats)
}
destructivelyAppendCat()

function destructivelyPrependCat(){
    cats.unshift('Bob')
    console.log(cats)
}
destructivelyPrependCat()

function  destructivelyRemoveLastCat(){
    cats.pop()
    console.log(cats)
}
destructivelyRemoveLastCat();

function  destructivelyRemoveFirstCat(){
    cats.shift()
    console.log(cats)
}
destructivelyRemoveFirstCat();

function appendCat(name){
    const newArray = cats.slice();
   
    newArray.push("Broom")
    return newArray
  }
  appendCat();



function prependCat(name){
    const catArray=cats.slice();
    catArray.unshift('Arnold')
    
    return catArray
}
prependCat();

function  removeLastCat(){
    const lastCat=cats.slice();
    lastCat.pop()
    
    return lastCat
}
removeLastCat();

function  removeFirstCat(){
    const firstCat=cats.slice(1)
    
    return firstCat
}
removeFirstCat();

    
//cats.unshift();
//cats.pop();
//cats.shift();
