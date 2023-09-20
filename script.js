const button = document.querySelectorAll(".button")
const header = document.querySelector(".header")

button.forEach(element => {
    element.addEventListener("click", (e) =>{
        const value = e.target.dataset.value
    
       
        if (value == "="){
            if(header.innerText.includes('/')){
                const split = header.innerText.split('/')
                operator("/", split[0], split[1])
            }

            if(header.innerText.includes('x')){
                const split = header.innerText.split('x')
                operator("x", split[0], split[1])

            }
            if(header.innerText.includes('-')){
                const split = header.innerText.split('-')
                operator("-", split[0], split[1])

            }
            if(header.innerText.includes('+')){
                const split = header.innerText.split('+')
                operator("+", split[0], split[1])

            }
        } else {
         header.innerText += value;
        }
    })
})

const clear = document.querySelector(".clear")
clear.addEventListener("click", () => {
    header.innerHTML = '';
})

const operator = (x, y, z) => {
    let numOne = Number(y)
    let numTwo = Number(z)

    if(x == "/" ){
        let value = (numOne/numTwo)
        header.innerText = value
    } else if (x == "x"){
        let value = (numOne*numTwo)
        header.innerText = value
    } else if (x == "-"){
        let value = (numOne-numTwo)
        header.innerText = value
    } else if (x == "+"){
        let value = (numOne+numTwo)
        header.innerText = value
    }
    

}

//if header.innerText.includes ( / or + or x or - )

    //if an operator is clicked check to see if there is already an operate 
    //if so, compute the prior expression and set the result as num 1
    //if not 

    // if (header.innerText.includes("/", "+", "-", "x") || value == "=")
    //if (value = +, /, -, x) && header.innerText.includes("/", "+", "-", "x"))
    // (value = "+" || value = "/" || value = "x" || value = "-" && header.innerText.includes("/", "+", "-", "x"))