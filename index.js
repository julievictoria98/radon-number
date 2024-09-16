
document.querySelector("#button").addEventListener("click", getNumber)

function getNumber(){
    let RandomNumber = Math.floor( Math.random()*(100 + 1));
    console.log(RandomNumber);
    document.querySelector("#output").innerHTML = RandomNumber;
}



