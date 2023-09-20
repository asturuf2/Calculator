const button = document.querySelectorAll(".button")
const header = document.querySelector(".header")

button.forEach(element => {
    element.addEventListener("click", (e) =>{
        const value = e.target.dataset.value
        const string = header.innerText
        // if equal sign is pressed
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
         // if a operator symbol is pressed a second time
         // if string has 2 operators, perform the firt operator and add the second one to the answer
         header.innerText += value;
         const newString = header.innerText;
         const symbol = newString.charAt(newString.length-1)
        // if the last char is a symbol && the string includes another symbol
            if (newString.charAt(newString.length-1)=="/"){
                const removeChar = newString.slice(0,-1)
                if(removeChar.includes('/')){
                    const split = removeChar.split('/')
                    operator("/", split[0], split[1])
                    header.innerText += symbol
                }
    
                if(removeChar.includes('x')){
                    const split = removeChar.split('x')
                    operator("x", split[0], split[1])
                    header.innerText += symbol
    
                }
                if(removeChar.includes('-')){
                    const split = removeChar.split('-')
                    operator("-", split[0], split[1])
                    header.innerText += symbol
    
                }
                if(removeChar.includes('+')){
                    const split = removeChar.split('+')
                    operator("+", split[0], split[1])
                    header.innerText += symbol
    
                }
            }
            if (newString.charAt(newString.length-1)=="+"){
                const removeChar = newString.slice(0,-1)
                if(removeChar.includes('/')){
                    const split = removeChar.split('/')
                    operator("/", split[0], split[1])
                    header.innerText += symbol
                }
    
                if(removeChar.includes('x')){
                    const split = removeChar.split('x')
                    operator("x", split[0], split[1])
                    header.innerText += symbol
    
                }
                if(removeChar.includes('-')){
                    const split = removeChar.split('-')
                    operator("-", split[0], split[1])
                    header.innerText += symbol
    
                }
                if(removeChar.includes('+')){
                    const split = removeChar.split('+')
                    operator("+", split[0], split[1])
                    header.innerText += symbol
    
                }
                
            }
            if (newString.charAt(newString.length-1)=="-"){
                const removeChar = newString.slice(0,-1)
                if(removeChar.includes('/')){
                    const split = removeChar.split('/')
                    operator("/", split[0], split[1])
                    header.innerText += symbol
                }
    
                if(removeChar.includes('x')){
                    const split = removeChar.split('x')
                    operator("x", split[0], split[1])
                    header.innerText += symbol
    
                }
                if(removeChar.includes('-')){
                    const split = removeChar.split('-')
                    operator("-", split[0], split[1])
                    header.innerText += symbol
    
                }
                if(removeChar.includes('+')){
                    const split = removeChar.split('+')
                    operator("+", split[0], split[1])
                    header.innerText += symbol
    
                }
                
            }
            if (newString.charAt(newString.length-1)=="x"){
                const removeChar = newString.slice(0,-1)
                if(removeChar.includes('/')){
                    const split = removeChar.split('/')
                    operator("/", split[0], split[1])
                    header.innerText += symbol
                }
    
                if(removeChar.includes('x')){
                    const split = removeChar.split('x')
                    operator("x", split[0], split[1])
                    header.innerText += symbol
    
                }
                if(removeChar.includes('-')){
                    const split = removeChar.split('-')
                    operator("-", split[0], split[1])
                    header.innerText += symbol
    
                }
                if(removeChar.includes('+')){
                    const split = removeChar.split('+')
                    operator("+", split[0], split[1])
                    header.innerText += symbol
    
                }
                
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
    if(x == "/" ) {
        let value = (numOne/numTwo)
        let roundValue = Math.round(value*100)/100
        header.innerText = roundValue
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

//create a conditional statement that doesn't let you click two operators in a row 
//if lastchar = symbol 