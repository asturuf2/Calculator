
const add = (x, y) => {
    return x + y;
}

const subtract = (x, y) => {
    return x - y;
}

const multiply = (x, y) => {
    return x * y;
}

const divide = (x, y) => {
    return x / y;
}

const operator = (op, x, y) => {
    let o = op.toString();
    if (o == "+"){
        return add(x, y)
    } else if (o == "-"){
        return subtract(x, y)
    } else if (o == "*"){
        return multiply(x, y)
    } else {
        return divide(x, y)
    }
}

//creating a grid

const grid = document.querySelector(".grid")

const createGrid = () => {
    for (let i = 4; i > 0; i--){
        const row = document.createElement('div')
        row.classList.add('row')
        row.classList.add("row"+`${i}`)
        grid.appendChild(row)
        for (let i = 4; i > 0; i--){
            const box = document.createElement('div')
            box.classList.add("box")
            box.classList.add("box"+`${i}`)
            row.appendChild(box)
        }
    }
}

createGrid()




const something = document.querySelector("div.row")

