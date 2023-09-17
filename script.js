
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

const filler = {
    row4 : ["7", "8", "9" , "/"],
    row3 : ["4", "5", "6" , "x"],
    row2 : ["1", "2", "3" , "-"],
    row1 : ["0", ".", "=" , "+"],
}
const grid = document.querySelector(".grid")

const createGrid = () => {
    for (let x = 0; x < 4; x++){
        const row = document.createElement('div')
        row.classList.add('row')
        row.classList.add("row"+`${x}`)
        grid.appendChild(row)
        for (let i = 0; i < 4; i++){
            const box = document.createElement('div')
            box.classList.add("box")
            box.classList.add("box"+`${i}`)
            let array = Object.values(filler)[x] 
            box.textContent = `${array[i]}`
            row.appendChild(box)
        }
    }
}

createGrid()





