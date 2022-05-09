//Create a button that adds 1 to a botScore stored in localStorage 

if (!localStorage.getItem('machineScore')){  // This conditional was in the function addAnotherOne, but we made it a global,
    localStorage.setItem('machineScore', 0)  // so that each time the function is called, it will reset the machineScore to 0.
                                             // On page refresh, localStorage is set to 0, we will get null if we try to getItem which is not in localStorage.
                                             // Null is a falsy value. So if we do not get a falsy value "!", then upon page refresh, we wont get zero for machineScore.
                                             // But if we ignore the "!", each time the page refreshes, machineScore will reset to 0.
}

document.querySelector('button').addEventListener('click', addAnotherOne)


function addAnotherOne(){
    let machineScoreVal = Number(localStorage.getItem('machineScore')) // This will get the value of machineScore and store it in machineScoreValue
    machineScoreVal += 1
    localStorage.setItem('machineScore', machineScoreVal)
    document.querySelector('h3').innerText = machineScoreVal
}