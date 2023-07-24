class superMath {
    constructor() {

    }

    input() {
        const promptX = prompt('Enter number');
        const promptY = prompt(`Enter second number`)
        const promptMath = prompt(`then: + , - , * , /`)
        
        if (promptMath === '*') {
            alert(`${promptX} ${promptMath} ${promptY} = ${promptX*promptY}`);
            return;
        } else if (promptMath === '/') { 
            alert(`${promptX} ${promptMath} ${promptY} = ${promptX/promptY}`)
            return;
        } else if (promptMath === '-') {
            alert(`${promptX} ${promptMath} ${promptY} = ${promptX-promptY}`)
            return;
        } else if (promptMath === '+') {
            const promptXNumber = Number(promptX);
            const promptYNumber = Number(promptY);
            alert(`${promptXNumber} ${promptMath} ${promptYNumber} = ${promptXNumber+promptYNumber}`)
            console.log(typeof promptXNumber, `${promptXNumber+promptYNumber}`)
            return;
        }  else {
            alert('Incorrect data')
            console.log(`${promptMath}`, typeof promptMath)
        } 
        
    }

    check(obj) {
        const check = confirm(`Want do this? ${obj.x} ${obj.znak} ${obj.y}`);
        if (check === true) {
            alert(`${obj.x} / ${obj.y} = ${obj.x/obj.y}`)
            console.log(`${check} check`)

        } else {
            newQuantity.input()
        }
        return `${obj.x} ${obj.znak} ${obj.y}`
    }
}

const obj = {x: 12, y: 3, znak: '/'}
const newQuantity = new superMath();
newQuantity.check(obj)






