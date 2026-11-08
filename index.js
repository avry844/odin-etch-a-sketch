let penColor = "#111111"

function makeGrid(size) {

    let squareDimensions = String(500 / size) + "px"

    const grid = document.createElement("div") // make grid container
    grid.classList.add("grid")
    document.body.appendChild(grid)

    for (let i = 0; i < size; i++) { // rows
        
        const row = document.createElement("div")

        row.classList.add("row")
        row.id = `row-${i}`
        grid.appendChild(row)

        for (let j = 0; j < size; j++) { // items

            const gridSquare = document.createElement("div")

            gridSquare.style.width = squareDimensions
            gridSquare.style.height = squareDimensions

            gridSquare.classList.add("items")
            gridSquare.id = `item-${j}`
            row.appendChild(gridSquare)

        }
        
    }

}

makeGrid(16)

const grid = document.body.querySelector(".grid")
const row = grid.querySelectorAll(".row")
const gridSquare = document.querySelectorAll(".items")



gridSquare.forEach(div => {

    div.addEventListener('mouseenter', () => {

        penColor = "rgb(" + String(Math.floor(Math.random() * 255)) + "," + String(Math.floor(Math.random() * 255)) + "," + String(Math.floor(Math.random() * 255)) + ")"
        div.style.backgroundColor = penColor

    })

})

function replaceEventListener() {
    const gridSquare = document.querySelectorAll(".items")

    gridSquare.forEach(div => {
        div.addEventListener('mouseenter', () => {

            penColor = "rgb(" + String(Math.floor(Math.random() * 255)) + "," + String(Math.floor(Math.random() * 255)) + "," + String(Math.floor(Math.random() * 255)) + ")"
            div.style.backgroundColor = penColor

        })
    })    

}

const newGridButton = document.querySelector(".newGrid")

newGridButton.addEventListener('click', () => {

    let Dgrid = document.querySelector(".grid")
    Dgrid.remove()
    makeGrid(prompt("Grid size:"))
    gridSquare.forEach(div => {
        div.removeEventListener('mouseenter', () => {})
    })

    replaceEventListener()

})