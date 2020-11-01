let myvar = 0;
document.body.addEventListener("keyup", (e) => {
    if(e.keyCode === 13) // enter key
        myvar += 1;
})
setInterval(() => {
    document.body.innerText = `My var: ${myvar}`
}, 1)