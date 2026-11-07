function makeGrid(size) {

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

        div.style.backgroundColor = '#111111'

    })

})
