let tablesInterval,squaresInterval,cubesInterval

//Button For Tables from 6 to 17
const tables = () =>{
    let a = Math.floor(Math.random() * (17-6+1) )+6
    let b = Math.floor(Math.random() * (9-3+1) )+3
    document.getElementById("question").innerText = a + " X "+ b
    document.getElementById("answer").innerText = a * b
}
document.getElementById("tables").addEventListener('click',()=>{
    alert("You will get 4 seconds !")
    tablesInterval = setInterval(tables,4000)
    stopSquares()
    stopCubes()
})

//Button For Squares till 25
const squares = ()=>{
    let num = Math.floor(Math.random()*25)+1
    document.getElementById("question").innerText = num
    document.getElementById("answer").innerText = num * num
}

document.getElementById("squares").addEventListener('click',()=>{
    alert("You will get 3 seconds !")
    squaresInterval = setInterval(squares,3000)
    stopTables()
    stopCubes()
})

//Button Cubes till 15
const cubes = ()=>{
    let num = Math.floor(Math.random()*15)+1
    document.getElementById("question").innerText = num
    document.getElementById("answer").innerText = num * num * num
}

document.getElementById("cubes").addEventListener('click',()=>{
    alert("You will get 4 seconds !")
    cubesInterval = setInterval(cubes,4000)
    stopTables()
    stopSquares()
})

//Functions for stopping .... 
const stopTables = () => {
    clearInterval(tablesInterval)
}

const stopSquares = () => {
    clearInterval(squaresInterval)
}

const stopCubes = () => {
    clearInterval(cubesInterval)
}

//return Math.floor(Math.random() * (max - min + 1) ) + min;