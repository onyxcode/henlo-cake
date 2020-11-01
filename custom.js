let myvar = 0;
const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const nam = urlParams.get('name')

document.body.addEventListener("keyup", e => {
  if (e.keyCode === 13)
    // enter key
    myvar += 1;
});

if (nam == null) {
    alert("Error! No name was provided! You will now be redirected to the home page.")
    window.location.href = "/"
}
if (nam == "") {
    alert("Error! No name was provided! You will now be redirected to the home page.")
    window.location.href = "/"
}
else {
 setInterval(() => {
  document.body.innerText = `${nam}: ${myvar}`;
  if (myvar < 15) {
    document.body.innerText = `${nam}: ${myvar}
      Click "Enter" to increase the value!`;
  } else {
    document.body.innerText = `${nam}: ${myvar}`;
  }
}, 1); 
}
