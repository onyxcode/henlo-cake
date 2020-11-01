let myvar = 0;

let inp = prompt("What's your clicker for?")

document.body.addEventListener("keyup", (e) => {
    if(e.keyCode === 13) // enter key
        myvar += 1;
})
setInterval(() => {
    document.body.innerText = `${inp}: ${myvar}`
    if (myvar < 15) {
      document.body.innerText = `${inp}: ${myvar}
      Click "Enter" to increase the value!`
    }
    else {
      document.body.innerText = `${inp}: ${myvar}`
  }
}, 1)