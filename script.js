const button = document.querySelectorAll(".button")
const header = document.querySelector(".header")

button.forEach(element => {
    element.addEventListener("click", (e) =>{
        const value = e.target.dataset.value
        const string = header.innerText
       
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
         const string = header.innerText; 
         const conditions = ["/", "+", "-", "x"]; 
            if (string.includes("/") && string.charAt(string.length-1) == "+"){//((string.includes("/") || string.includes("+") || string.includes("-") || string.includes("x")) && (string.charAt(lastChar) == "/" || string.charAt(lastChar) == "/" || string.charAt(lastChar) == "-" || string.charAt(lastChar) == "+")){
                const removeChar = string.slice(0,-1); console.log(removeChar)
                const split = removeChar.split("/"); console.log(split)
                const symbol = string.charAt(string.length-1); console.log(symbol)
                operator("/",split[0], split[1])
                header.innerText += symbol
            }
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