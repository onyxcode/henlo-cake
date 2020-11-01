let myvar = 0;
document.body.addEventListener("keyup", (e) => {
    if(e.keyCode === 13) // enter key
        myvar += 1;
})
setInterval(() => {
    document.getElementById("script-cont").innerText = `My var: ${myvar}`
}, 1)

function custom() {
  var inp = prompt("What's your clicker about?");
  if (inp == null) {}
  else {
  window.location.href = "https://henlocake.glitch.me/custom.html?name=" + inp;
  }
}