//Create a button that adds 1 to a botScore stored in localStorage 

if (!localStorage.getItem('botScore')){  // This conditional was in the function addAnotherOne, but we made it a global,
    localStorage.setItem('botScore', 0)  // so that each time the function is called, it will reset the machineCount to 0. 
}

document.querySelector('button').addEventListener('click', addAnotherOne)

function addAnotherOne(){
    let botScoreVal = Number(localStorage.getItem('botScore')) // This will get the value of machineScore and store it in machineScoreValue
    botScoreVal += 1
    localStorage.setItem('botScore', botScoreVal)
}