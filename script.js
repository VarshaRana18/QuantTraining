let tablesInterval,squaresInterval

//Button For Tables from 6 to 15
const tables = () =>{
    a = Math.floor(Math.random() * (15-6+1) )+6
    b = Math.floor(Math.random() * (9-3+1) )+3
    document.getElementById("question").innerText = a + " X "+ b
}
document.getElementById("tables").addEventListener('click',()=>{
    tablesInterval = setInterval(tables,1500)
    stopSquares()
})

//Button For Squares till 25
const squares = ()=>{
    document.getElementById("question").innerText = Math.floor(Math.random()*25)+1
}

document.getElementById("squares").addEventListener('click',()=>{
    squaresInterval = setInterval(squares,1000)
    stopTables()
})

//
const stopTables = () => {
    clearInterval(tablesInterval)
}

const stopSquares = () => {
    clearInterval(squaresInterval)
}

//return Math.floor(Math.random() * (max - min + 1) ) + min;